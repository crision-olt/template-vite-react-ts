import { FC, ReactNode } from "react";

export type HeadProps = {
  children: ReactNode;
};

export const Head: FC<HeadProps> = ({ children }) => (
  <div className={"block px-4 py-2 bg-gray-900"}>
    <h1 className={"text-lg"}>{children}</h1>
  </div>
);
