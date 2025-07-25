import { useState, useEffect } from "react";

const getMatches = (query: string): boolean => {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia === "undefined"
  ) {
    return false;
  }

  return window.matchMedia(query).matches;
};

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const listener = (event: MediaQueryListEvent) => {
      console.log("zdec change");
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", listener);
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}
