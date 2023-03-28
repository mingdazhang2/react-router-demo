import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

function User() {
  const {id}= useParams();
  const outletContentObj = useOutletContext();
  return (
    <>
    <h2>User  {id}</h2>
    userLayout
    </>
  )
}

export default User;
