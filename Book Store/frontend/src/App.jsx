import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import CreateBooks from "./pages/bookstore/CreateBooks.jsx";
import EditBooks from "./pages/bookstore/EditBooks.jsx";
import DeleteBooks from "./pages/bookstore/DeleteBooks.jsx";
import ShowBooks from "./pages/bookstore/ShowBooks.jsx";
import BookStore from "./components/bookstore/BookStore.jsx";
import NavBar from "./components/NavBar.jsx";
const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bookstore' element={<BookStore />} />
        <Route path='/books/create' element={<CreateBooks />} />
        <Route path='/books/details/:id' element={<ShowBooks />} />
        <Route path='/books/edit/:id' element={<EditBooks />} />
        <Route path='/books/delete/:id' element={<DeleteBooks />} />
      </Routes>
    </div>
    
  )
}

export default App;