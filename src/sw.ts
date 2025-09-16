/// <reference lib="WebWorker" />
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { clientsClaim, setCacheNameDetails } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst, StaleWhileRevalidate } from "workbox-strategies";

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);
clientsClaim();

registerRoute(
  ({ request }) =>
    request.destination === "style" || request.destination === "font",
  new StaleWhileRevalidate()
);

registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "media",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);

// TODO: привести в порядок
// КЭШ
const HISTORY_URL_PATH = "/sw/__history/"; // точно слэш на конце
const HISTORY_CACHE = "history-cache-v1";

setCacheNameDetails({
  prefix: "app",
  suffix: "v1",
  runtime: "runtime",
  precache: "precache",
});

function abs(url: string | URL): string {
  const u = new URL(url.toString(), self.location.origin);
  u.hash = "";
  return u.toString();
}

async function writeCacheList(list: unknown[]): Promise<void> {
  const cache = await caches.open(HISTORY_CACHE);
  const listKey = abs(HISTORY_URL_PATH);
  const resp = new Response(JSON.stringify(list), {
    headers: {
      "Content-Type": "application/json",
      "X-Cache-Timestamp": String(Date.now()),
    },
  });
  await cache.put(listKey, resp.clone());
}

registerRoute(
  ({ url, request }) =>
    url.origin === self.location.origin &&
    url.pathname === HISTORY_URL_PATH &&
    request.method === "GET",
  async () => {
    const cache = await caches.open(HISTORY_CACHE);
    const listKey = abs(HISTORY_URL_PATH);
    let match = await cache.match(listKey);

    if (!match) {
      // Инициализируем кэш пустым массивом
      await writeCacheList([]);
      match = await cache.match(listKey)!;
    }

    // Возвращаем копию (Response одноразовый)
    const clone = match!.clone();
    // Гарантируем корректные заголовки
    const ct = clone.headers.get("Content-Type") ?? "";
    if (!ct.includes("application/json")) {
      const data = await match!.json().catch(() => []);
      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    }
    return clone;
  },
  "GET"
);

registerRoute(
  ({ url, request }) => {
    return (
      url.origin === self.location.origin &&
      url.pathname === HISTORY_URL_PATH &&
      request.method === "POST"
    );
  },
  async ({ event, request }) => {
    // ⬅ здесь БЕРЁМ request из аргумента, а не event.request
    const reqClone = request.clone();
    // event — ExtendableEvent: у него есть waitUntil, это корректно
    const response = await updateHistoryListCacheAfterPost(reqClone);
    return response;
  },
  "POST"
);

async function updateHistoryListCacheAfterPost(
  requestClone: Request
): Promise<Response> {
  try {
    const listKey = abs(HISTORY_URL_PATH);
    const cache = await caches.open(HISTORY_CACHE);
    let currentList: unknown[] = [];
    const prev = await cache.match(listKey);

    if (prev) {
      try {
        currentList = await prev.json();
      } catch {
        currentList = [];
      }
    }
    if (!Array.isArray(currentList)) currentList = [];

    let toAppend = await requestClone.json();

    if (toAppend !== null) {
      const nextList = [...currentList];
      if (
        nextList.length === 0 ||
        // @ts-ignore
        toAppend.date !== currentList[currentList.length - 1].date
      ) {
        nextList.push(toAppend);
      }
      const resp = new Response(JSON.stringify(nextList), {
        headers: {
          "Content-Type": "application/json",
          "X-Cache-Timestamp": String(Date.now()),
        },
      });
      await cache.put(listKey, resp.clone());

      return resp;
    }
  } catch {
    // Не мешаем основному ответу
  }

  const resp = new Response(JSON.stringify({}), {
    headers: {
      "Content-Type": "application/json",
      "X-Cache-Timestamp": String(Date.now()),
    },
    status: 405,
  });

  return resp;
}
