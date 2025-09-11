// dateGrid.ts
import dayjs from "dayjs";

/**
 * Смещает индекс дня недели 0..6 под произвольный startOfWeek (0=вс, 1=пн)
 */
function normalizeDow(dow: number, startOfWeek: 0 | 1): number {
  // Приводим dayjs().day() к шкале, где 0 всегда соответствует startOfWeek
  // В dayjs Sunday=0 ... Saturday=6
  // Если startOfWeek=1 (понедельник), то понедельник должен стать 0, воскресенье — 6
  return (dow - startOfWeek + 7) % 7;
}

/**
 * Возвращает 42 даты (6×7), начиная с правильного начала недели,
 * чтобы сетка покрывала отображаемый месяц.
 */
export function buildMonthGrid(
  baseMonth: dayjs.Dayjs,
  startOfWeek: 0 | 1
): dayjs.Dayjs[] {
  const firstOfMonth = baseMonth.startOf("month");
  const dow = firstOfMonth.day(); // 0..6
  const offset = normalizeDow(dow, startOfWeek); // сколько дней отмотать назад
  const start = firstOfMonth.subtract(offset, "day");

  const days: dayjs.Dayjs[] = [];
  for (let i = 0; i < 42; i += 1) {
    days.push(start.add(i, "day"));
  }
  return days;
}

/**
 * Возвращает короткие названия дней недели в соответствии с локалью и startOfWeek.
 * dayjs().locale(locale).format("dd") даёт локализованный короткий день.
 * Берём одну «неделю» подряд от стартового дня.
 */
export function getWeekdayShortNames(
  locale: string,
  startOfWeek: 0 | 1
): string[] {
  const startOfWeekLocale = locale === "ru" ? startOfWeek - 1 : startOfWeek;
  const base = dayjs().locale(locale).startOf("week"); // тут Sunday=0 по умолчанию
  const normalized = base.add(startOfWeekLocale, "day"); // сдвигаем к нужному старту
  const result: string[] = [];
  for (let i = 0; i < 7; i += 1) {
    result.push(normalized.add(i, "day").format("dd"));
  }
  return result;
}

/**
 * Хелпер для проверки границ доступности.
 */
export function isDateDisabled(
  date: dayjs.Dayjs,
  opts: {
    minDate?: dayjs.Dayjs;
    maxDate?: dayjs.Dayjs;
    disabledDates?: (d: dayjs.Dayjs) => boolean;
  } = {}
): boolean {
  const { minDate, maxDate, disabledDates } = opts;
  if (minDate && date.isBefore(minDate, "day")) return true;
  if (maxDate && date.isAfter(maxDate, "day")) return true;
  if (disabledDates && disabledDates(date)) return true;
  return false;
}
