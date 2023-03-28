//import logo from './logo.svg';
import "./App.css";
import { Link, Route, Routes, useRoutes,NavLink, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Book from "./pages/book";
import BookList from "./pages/bookList";
import { BookLayout } from "./bookLayout";
import NewBook from "./pages/newBook";
import NotFound from "./pages/notFound";

import {UserRoutes} from "../src/userRoutes";
function App() {
  const location = useLocation()
 
  let elements = useRoutes([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ])
  return (
    <div className="App">
       {location.state}
      {/* {elements} */}
      <nav>
        <ul>
          <li>
            <NavLink style={({isActive})=>{return isActive?{color:"red"}:{}}} to="/">Home</NavLink>
          </li>
          <li>
            <Link to="/about" replace>About</Link>
          </li>
          <li>
            <NavLink state="Hi, this is NavLink state" to="/books">Books</NavLink>
          </li>
          <li>
            <Link to="/books/new">New Book</Link>
          </li>
          <li>
            <NavLink end to="/users">Users</NavLink>
          </li>
          <li>
            <Link to="/xkjfdlsjf" >Not found page navigate test</Link>
          </li>
          
        </ul>
      </nav>
      {/* Hard code location attribute in routes tells no matter what url,
       it will render to /books content
      <Routes location="/books">
        <Route path="/books" element={<h1>Side Menu</h1>} />
      </Routes> 
      */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="/books" element={<BookList/>} />      
        <Route path="/books/:id" element={<Book/>} />
        <Route path="/books/new" element={<NewBook/>} />
         */}
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="/users/*" element={<UserRoutes />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
