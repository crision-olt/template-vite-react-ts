import { useEffect, useState } from "react";
import * as Cookies from "js-cookie";

export const useCookie = (name: string) => {
  const [cookie, setCookie] = useState<string | undefined>(undefined);

  useEffect(() => {
    setCookie(Cookies.get(name));
  }, [name]);

  return [cookie, setCookie];
};
