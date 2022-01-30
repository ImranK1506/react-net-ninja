// Hook
import { useState, useEffect } from 'react';

// Custom hook
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // Run on render
  useEffect(() => {
    const abortConst = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortConst.signal })
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
            if (err.name === 'AbortError') console.log('fetch aborted');
            setIsPending(false);
            setError(err.message);
          })
    }, 3000);
    // Cleanup after
    return () => abortConst.abort();
  }, [url]);

return {data, isPending, error}
}

export default useFetch;