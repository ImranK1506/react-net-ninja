// Hook
import { useState, useEffect } from 'react';

// Custom hook
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
          .then(res => {
            console.log(res);
            if (!res.ok) throw Error('Could not fetch data')
            return res.json();
          })
          .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch((err) => {
            setIsPending(false);
            setError(err.message);
          })
    }, 3000);
  }, [url]);

return {data, isPending, error}
}

export default useFetch;