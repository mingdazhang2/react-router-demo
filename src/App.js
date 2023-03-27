//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/home"
import About from "./pages/about"
import Book from "./pages/book"
import BookList from "./pages/bookList"
import {BookLayout} from "./pages/bookLayout"
import NewBook from './pages/newBook';
import NotFound from './pages/notFound';
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/books/new">New Book</Link></li>
          
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>

        {/* <Route path="/books" element={<BookList/>} />      
        <Route path="/books/:id" element={<Book/>} />
        <Route path="/books/new" element={<NewBook/>} />
         */}
        <Route path="/books" element={<BookLayout/>}>
          <Route index element={<BookList/>} />
          <Route path=":id" element={<Book/>} />
          <Route path="new" element={<NewBook/>} />
        </Route>

        <Route path="*" element={<NotFound/>} />
      </Routes>
      
    </div>
  );
}

export default App;
