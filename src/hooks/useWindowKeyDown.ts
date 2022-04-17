import { useEffect } from "react";

export const useWindowKeyDown = (
  callback: (event: KeyboardEvent) => void,
  options?: {
    capture?: boolean;
    passive?: boolean;
  },
  ...deps: never[]
): void => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      callback(event);
    };

    window.addEventListener("keydown", handleKeyDown, options);

    return () => {
      window.removeEventListener("keydown", handleKeyDown, options);
    };
  }, [callback, options, ...deps]);
};
