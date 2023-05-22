// SuppliersView.js

import React, { useState } from "react"; // add useState to the import statement
import useAxiosService from "./useAxiosService"; // import your custom hook

function SuppliersView() {
  // create an object with service name, function name and additional data
  const [userId, setUserId] = useState(1); // use a state variable to store the user ID input value
  const [id, setId] = useState(2); // use a state variable to store the ID

  const [params, setParams] = useState({
    service: "farm", // pass the service name as a property
    function: "getUserById", // pass the function name as a property
    data: { id }, // pass the state variable as the data property
  });

  // use your custom hook with the object parameter
  const { response, loading, error, handleRefresh } = useAxiosService(params);

  if (loading) return <div>Loading...</div>; // render loading state
  if (error) return <div>Error: {error.message}</div>; // render error state
  if (response)
    return (
      <div>
        <div>Suppliers: {JSON.stringify(response)}</div>
        <input
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value); // update the userId state
            setParams((prevParams) => ({
              ...prevParams,
              data: { id: e.target.value }, // update the ID value of the params object
            }));
          }}
          type="text"
        />{" "}
        // render the user ID input element within the component
        <button onClick={handleRefresh}>Refresh</button>
        <button
          onClick={() => handleRefresh({ ...params, data: { id: userId } })}
        >
          Refresh with id {userId}
        </button>
      </div>
    );
  return null; // render nothing by default
}

export default SuppliersView;
