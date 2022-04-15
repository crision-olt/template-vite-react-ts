import { FC, ReactNode } from "react";

export type ActionsProps = {
  children: ReactNode;
};

export const Actions: FC<ActionsProps> = ({ children }) => (
  <div className={"p-4"}>{children}</div>
);
