import { useState } from "react";

const useMutation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [responseData, setResponseData] = useState<any>(null);

  const executeMutation = async (route: string, options: any) => {
    setIsLoading(true);
    try {
      const response = await fetch(route, {...options});
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Une erreur s'est produite lors de la requête de mutation"
        );
      }      
      setIsLoading(false);
      setResponseData((oldData:any) => {
        console.log('While setting state',data)
        return {...data}
      });
    } catch (error: any) {
      setError("Une erreur inconnue s'est produite lors de la requête de mutation");
      setIsLoading(false);
    }
  };

  const handleMutation = async (route: string, options: any) => {
    await executeMutation(route, options);
  };

  return { isLoading, error, responseData, handleMutation };
};

export default useMutation;
