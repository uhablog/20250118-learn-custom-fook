import { useEffect, useState } from "react";

type FetchState<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export const useFetch = <T>(url: string): FetchState<T> => {

  const [ data, setData ] = useState<T | null>(null);
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('fetch error');
        }

        const result: T = await response.json();
        setData(result);

      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error};

}