import { MutableRefObject, RefObject, useEffect, useRef } from "react";
import { getFocusableElements, nextFocus } from "@utils/portal";

export const usePortalFocus = (
  container: RefObject<HTMLDivElement>,
  open: boolean,
  portal: MutableRefObject<HTMLDivElement>,
) => {
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    document
      .getElementById("root")
      ?.setAttribute("aria-hidden", open.toString());
    portal.current?.setAttribute("aria-hidden", (!open).toString());

    if (open) {
      previousFocus.current = (document.activeElement as HTMLElement) ?? null;
      nextFocus(getFocusableElements(container.current));
    } else {
      previousFocus.current?.focus?.();
      previousFocus.current = null;
    }
  }, [open, portal]);

  return previousFocus;
};
