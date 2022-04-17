import { useEffect, useState } from "react";
import { AsyncResource } from "async_hooks";

export const useAsync = <T>(
  asyncResource: AsyncResource,
  callback: () => Promise<T>,
): [T | undefined, boolean, Error | undefined | unknown] => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined | unknown>(undefined);

  useEffect(() => {
    asyncResource
      .runInAsyncScope(async () => {
        try {
          const result = await callback();
          setData(result);
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      })
      .then((r) => r);
  }, []);

  return [data, loading, error];
};
