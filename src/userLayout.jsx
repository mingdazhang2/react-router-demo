import React from "react";
import { Link, Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <>
      <h2>UserLayout</h2>
      <Link to="/users/1">u1</Link>
      <br />
      <Link to="/users/2">u2</Link>
      <br />

      <Outlet context={{ hello: "userlayout" }} />
    </>
  );
};
