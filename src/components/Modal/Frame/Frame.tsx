import { FC, ReactNode, RefObject, useCallback } from "react";
import { getFocusableElements, nextFocus, usePortal } from "@utils/portal";
import { createPortal } from "react-dom";
import { useWindowKeyDown } from "@hooks/useWindowKeyDown";
import { usePortalFocus } from "@hooks/usePortalFocus";
import { useOutsideClick } from "@hooks/useOutsideClick";

export type FrameProps = {
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  onClose: () => void;
  open?: boolean;
  children: ReactNode;
};
export const Frame: FC<FrameProps> = ({
  children,
  closeOnClickOutside = true,
  closeOnEsc = true,
  onClose,
  open = true,
}) => {
  const portal = usePortal();

  // close on click outside
  const container = useOutsideClick(onClose, closeOnClickOutside);

  // close on esc
  const onKeyDown = useCallback(
    onKeyDownPortal(container, closeOnEsc, onClose),
    [],
  );
  useWindowKeyDown(onKeyDown, undefined, closeOnEsc, onClose, open);

  //focus on open
  usePortalFocus(container, open, portal);

  return createPortal(
    <div
      className={`fixed inset-0 z-10 p-8 text-white bg-gray-600/90 ${
        open ? "visible" : "invisible"
      }`}
    >
      {/* container: `max-w-sm` to make it reasonably narrow, `mx-auto` to center horizontally */}
      <div className={"relative w-full max-w-md mx-auto mt-8"} ref={container}>
        {/* contents */}
        <div className={"overflow-hidden bg-gray-800 rounded shadow-xl"}>
          {children}
        </div>
        {/* closer in the corner */}
        <button
          onClick={onClose}
          title={"Bye bye 👋"}
          type={"button"}
          className={
            "absolute -top-2 -right-2 flex justify-center rounded-full h-8 w-8 bg-gray-600 cursor-pointer shadow-xl outline-none border-2 border-gray-600 focus:border-blue-300"
          }
        >
          <span className={"text-2xl leading-6 select-none"}>{"&times;"}</span>
        </button>
      </div>
    </div>,
    portal.current,
  );
};

const onKeyDownPortal =
  (
    container: RefObject<HTMLDivElement>,
    closeOnEsc: boolean,
    onClose: () => void,
  ) =>
  (e: KeyboardEvent) => {
    if (!open) return;

    switch (e.key) {
      case "Escape": {
        if (closeOnEsc) onClose();
        break;
      }
      case "Tab": {
        e.preventDefault();
        nextFocus(getFocusableElements(container.current), !e.shiftKey);
        break;
      }
    }
  };
