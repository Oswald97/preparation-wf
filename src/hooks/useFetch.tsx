import { useEffect, useState } from "react";

const useFetch = (route: string, option: any = null) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(undefined);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(route, option = {});
        const data = await response.json();
        if (!response.ok) {
          throw new Error("HTTP_ERROR");
        }
        setData(data);
        setIsLoading(false);
      } catch (error) {
        const errorObj = { message: "une erreur inconnue s'est produite" };
        setError(errorObj);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);
  return { isLoading, error, data, setData };
};

export default useFetch;
