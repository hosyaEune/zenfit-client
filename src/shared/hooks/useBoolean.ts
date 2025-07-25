import { useCallback, useState } from "react";

export const useBoolean = (initValue = false) => {
  const [state, setState] = useState(initValue);

  const on = useCallback(() => setState(true), []);
  const off = useCallback(() => setState(false), []);
  const toggle = useCallback(() => setState((prev) => !prev), []);

  return [
    state,
    {
      on,
      off,
      toggle,
    },
  ] as const;
};
