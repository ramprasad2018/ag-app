import React from "react";
// import the LeftSideNavbar component from the Menu folder
import LeftSideNavbar from "./Menu/LeftSideNavbar";
// import the FMS component from the Components folder
import FMS from "./FMS/FMS";
// import Routes and Route from react-router-dom
import { Routes, Route } from "react-router-dom";

// component for home page
function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      {/* render the left side navbar component */}
      <LeftSideNavbar />
      {/* use Routes instead of Switch */}
      <Routes>
        {/* add a route for the FMS component */}
        <Route path="/home/fms" element={<FMS />} />
      </Routes>
    </div>
  );
}

export default Home;
