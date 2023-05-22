// Use the custom hook in your SuppliersView component
import React from "react";
import useAxiosService from "./useAxiosService"; // import your custom hook

function SuppliersView() {
  const method = "get"; // define your method
  const options = "/users"; // define your options (in this case, just the url path)
  const { response, loading, error, handleRefresh } = useAxiosService(
    method,
    options
  ); // use your custom hook with method and options and get the handleRefresh function

  if (loading) return <div>Loading...</div>; // render loading state
  if (error) return <div>Error: {error.message}</div>; // render error state
  if (response)
    return (
      <div>
        <div>Suppliers: {JSON.stringify(response)}</div>
        state
        <button onClick={handleRefresh}>Refresh</button>
        calls handleRefresh on click
      </div>
    );
  return null; // render nothing by default
}

export default SuppliersView;
