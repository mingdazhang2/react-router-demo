import React, { useState } from 'react'
import { Link,Outlet, useSearchParams } from 'react-router-dom';

export const BookLayout = () => {
  const [searchNumber, setSearchNumber] =useSearchParams({n:3}) 
  const number = searchNumber.get("n")
  //console.log("searchNumber",searchNumber.get("n"))
  //const [number, setNumber] = useState(0);
    return (
        <>
        <h2>BookLayout</h2>
        <Link to="/books/1">b1</Link>
        <br />
        <Link to="/books/2">b2</Link>
        <br />
        <Link to={`/books/${number}`}>b {number}</Link>
        <br />
        <Link to="/books/new">New Book</Link>
        <Outlet context={{ hello:"hat" }}/>
        <br />
        {/* <input type="number" onChange = {(e)=> setNumber(e.target.value) }/> */}
        <input type="number" onChange = {(e)=> setSearchNumber({n:e.target.value}) }/>
        </>
      );
}
