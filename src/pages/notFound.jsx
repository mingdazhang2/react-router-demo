import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    let timer = setTimeout(() => {
      navigate("/", {state:"Err Not page"});
    }, 1000);
    return ()=> clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <h2>404 Not Found</h2>
      {/* <Navigate to="/"></Navigate> */}
    </>
  );
}

export default NotFound;
