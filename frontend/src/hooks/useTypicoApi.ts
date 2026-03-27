import { useQuery } from "@tanstack/react-query";

const ENDPOINT = 'http://localhost:3001/api/testUsersMock';

const useTypicoApi = () => {
  const { data, isError, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch(ENDPOINT);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return response.json();
    },
    queryKey: ['typicoApi'],
  });

  return { data, isError, isLoading };
};

export default useTypicoApi;
