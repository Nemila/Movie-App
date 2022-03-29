import { useState, useEffect } from "react";

export default function useFetch(url) {
  let [data, setData] = useState(null);
  let [pending, setPending] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setPending(false);
      })
      .catch((error) => {
        setPending(false);
        setError(error.message);
      });
  }, [url]);

  return { data, pending, error };
}
