import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const useAxios = <T>(url: string, options: AxiosRequestConfig) => {
  const [state, setState] = useState<AxiosResponse<T>>();
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    const onSuccess = (response: AxiosResponse<T>) => setState(response);
    const onError = (err: AxiosError) => setError(err);
    const source = axios.CancelToken.source();
    const axiosOptions = {
      ...options,
      url,
      onSuccess,
      onError,
      cancelToken: source.token,
    };

    axios(axiosOptions);

    return () => {
      source.cancel(`Operation ${url} was canceled by the user.`);
    };
  }, [url, options]);

  return {
    data: state?.data,
    error,
    loading: !state && !error,
  };
};

export const useAxiosGet = <T>(url: string, options: AxiosRequestConfig) => {
  const { data, loading, error } = useAxios<T>(url, {
    ...options,
    method: "get",
  });

  return { data, loading, error };
};
export const useAxiosPost = <T>(url: string, options: AxiosRequestConfig) => {
  const { data, loading, error } = useAxios<T>(url, {
    ...options,
    method: "post",
  });

  return { data, loading, error };
};

export const useAxiosPut = <T>(url: string, options: AxiosRequestConfig) => {
  const { data, loading, error } = useAxios<T>(url, {
    ...options,
    method: "put",
  });

  return { data, loading, error };
};

export const useAxiosDelete = <T>(url: string, options: AxiosRequestConfig) => {
  const { data, loading, error } = useAxios<T>(url, {
    ...options,
    method: "delete",
  });

  return { data, loading, error };
};
export const useAxiosPatch = <T>(url: string, options: AxiosRequestConfig) => {
  const { data, loading, error } = useAxios<T>(url, {
    ...options,
    method: "patch",
  });

  return { data, loading, error };
};
export const useAxiosHead = <T>(url: string, options: AxiosRequestConfig) => {
  const { data, loading, error } = useAxios<T>(url, {
    ...options,
    method: "head",
  });

  return { data, loading, error };
};
export const useAxiosOptions = <T>(
  url: string,
  options: AxiosRequestConfig,
) => {
  const { data, loading, error } = useAxios<T>(url, {
    ...options,
    method: "options",
  });

  return { data, loading, error };
};
