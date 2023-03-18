import { useEffect, useState } from 'react';
import { makeRequest } from '../api/makeRequest';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setData(res.data);
      } catch {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
