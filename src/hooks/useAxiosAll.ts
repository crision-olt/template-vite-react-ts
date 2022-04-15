import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export const useAxiosAll = <T>(requests: AxiosRequestConfig[]) => {
  const [state, setState] = useState<AxiosResponse<T>[]>([]);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    const onSuccess = (response: AxiosResponse<T>) =>
      setState((prevState) => [...prevState, response]);
    const onError = (err: AxiosError) => setError(err);
    const controllers: AbortController[] = [];
    const setController = (request: AxiosRequestConfig) => {
      const controller = new AbortController();
      controllers.push(controller);
      request.signal = controller.signal;
      return request;
    };
    const axiosOptions = requests.map((request) => ({
      ...setController(request),
      onSuccess,
      onError,
    }));

    axios.all(axiosOptions);

    return () => {
      controllers.forEach((controller) => controller.abort());
    };
  }, [requests]);

  return {
    data: state.map((res) => res.data),
    error,
    loading: !state.length && !error,
  };
};
export const useAxiosAllGet = <T>(urls: string[]) => {
  const requests = urls.map((url) => ({ url }));
  return useAxiosAll<T>(requests);
};
export const useAxiosAllPost = <T, D>(urls: string[], data: D) => {
  const requests = urls.map((url) => ({ url, data }));
  return useAxiosAll<T>(requests);
};
export const useAxiosAllPut = <T, D>(urls: string[], data: D) => {
  const requests = urls.map((url) => ({ url, data }));
  return useAxiosAll<T>(requests);
};
