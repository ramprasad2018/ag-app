import React from "react";
// import Link from react-router-dom
import { Link } from "react-router-dom";

// component for left side navbar
function LeftSideNavbar() {
  return (
    <div className="left-side-navbar">
      {/* use Link to create a navigation item for FMS */}
      <Link to="/home/fms">FMS</Link>
    </div>
  );
}

export default LeftSideNavbar;
