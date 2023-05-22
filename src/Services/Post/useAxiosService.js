// useAxiosService.js

import { useState, useEffect } from "react";
import planterService from "./planterService"; // import your planterService class
import farmService from "./farmservice";

function useAxiosService({ service, function: func, data }) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false); // create a state variable for refresh
  const [userID, setUserID] = useState(null); // create a state variable for userID

  const handleRefresh = (newParams) => {
    if (newParams) {
      console.log(newParams);
      setUserID(newParams.data.id); // update the userID state
    }
    setRefresh(!refresh); // toggle the refresh value
  };

  //const handleRefresh = () => {
  //setRefresh(!refresh); // toggle the refresh value
  //};

  useEffect(() => {
    setLoading(true); // set loading state to true before making request
    console.log(userID); // log the updated value of userID
    // create an object that maps service names to service classes
    const services = {
      farm: farmService,
      planter: planterService,
    };

    // get the service class based on the service name
    const serviceClass = services[service];

    if (serviceClass) {
      // call the service class method with the function name and the data
      serviceClass[func](data)
        .then((data) => {
          setResponse(data); // set response state with data
          setLoading(false); // set loading state to false after getting response
        })
        .catch((err) => {
          setError(err); // set error state with error
          setLoading(false); // set loading state to false after getting error
        });
    } else {
      setError(new Error("Invalid service name")); // set error state with invalid service name error
      setLoading(false); // set loading state to false after getting error
    }
  }, [refresh, userID]); // pass service, func, data and refresh as dependencies to useEffect
  return { response, loading, error, handleRefresh }; // return the states and the handleRefresh function
}

export default useAxiosService; // export your custom hook as default
