import { useState, useEffect, useCallback } from "react";

const UseHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    // setProgress(20)
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        //mode: requestConfig.mode ? requestConfig.mode : {},
        body: JSON.stringify(requestConfig.body)
          ? JSON.stringify(requestConfig.body)
          : null,
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      applyData(data);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
    //  setProgress(100)
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default UseHttp;
