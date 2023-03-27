import React from 'react'
import { Link,Outlet } from 'react-router-dom';

export const BookLayout = () => {
    return (
        <>
        <h2>BookLayout</h2>
        <Link to="/books/1">b1</Link>
        <br />
        <Link to="/books/2">b2</Link>
        <br />
        <Link to="/books/new">New Book</Link>
        <Outlet context={{ hello:"hat" }}/>
        </>
      );
}
