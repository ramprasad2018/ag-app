// Define a custom hook that uses axios service class
import { useState, useEffect } from "react";
import axiosService from "./AxiosService"; // import your service class

function useAxiosService(method, options) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false); // create a state variable for refresh

  const handleRefresh = () => {
    setRefresh(!refresh); // toggle the refresh value
  };

  useEffect(() => {
    setLoading(true); // set loading state to true before making request
    console.log("Inside useAxiosService");
    axiosService
      .request(method, options) // call your service class method with method and options
      .then((data) => {
        setResponse(data); // set response state with data
        setLoading(false); // set loading state to false after getting response
      })
      .catch((err) => {
        setError(err); // set error state with error
        setLoading(false); // set loading state to false after getting error
      });
  }, [method, options, refresh]); // pass method, options and refresh as dependencies to useEffect

  return { response, loading, error, handleRefresh }; // return the states and the handleRefresh function
}

export default useAxiosService; // add this line to export your custom hook as default
