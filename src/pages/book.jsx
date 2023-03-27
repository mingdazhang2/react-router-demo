import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

function Book() {
  const {id}= useParams();
  const outletContentObj = useOutletContext();
  return (
    <>
    <h2>Book {id}</h2>
    <div>{console.log("outletContentObj",outletContentObj?.hello)}</div>
    </>
  )
}

export default Book;
