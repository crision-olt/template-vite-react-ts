import { FC, ReactNode } from "react";

export type BodyProps = {
  children: ReactNode;
};

export const Body: FC<BodyProps> = ({ children }) => (
  <div className={"p-4"}>{children}</div>
);
