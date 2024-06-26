import React from "react";
import 'antd/dist/antd.min.css'
import { Route, Routes } from 'react-router-dom'

// Import Components and Pages
import { TopNav, Footer } from './components'
// import { AntD, FakeStore, Home, MongoDB, Backend, Storybook, Login, Next } from "./pages";
import { Home } from "./pages";

import { useDispatch } from 'react-redux'

// import { getList } from './features/list/listSlice'
// import { getBooks } from './features/books/booksSlice'
// import { getItems } from './features/items/itemsSlice'

function App() {
  // const dispatch = useDispatch();
  // dispatch(getList())
  // dispatch(getBooks())
  // dispatch(getItems())

  return (
    <div className="overall-layout">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/fakestore" element={<FakeStore />} />
        <Route path="/antd" element={<AntD />} />
        <Route path="/MongoDB" element={<MongoDB />} />
        <Route path="/Backend" element={<Backend />} />
        <Route path="/Storybook" element={<Storybook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/next" element={<Next />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
