import React from "react";
import 'antd/dist/antd.min.css'
import { Route, Routes } from 'react-router-dom'

// Components
import TopNav from './components/TopNav/TopNav'

import { AntD } from './pages/AntD/AntD'
import { FakeStore } from './pages/FakeStore/FakeStore'
import { AddItemForm } from './pages/Form/Form'
import { Home } from './pages/Home/Home'
import { MongoDB } from './pages/MongoDB/MongoDB'
import { Backend } from './pages/Backend/Backend'
import { Storybook } from './pages/Storybook/Storybook'
import { Login } from './pages/Login/Login'
import { useDispatch } from 'react-redux'
import { getList } from './features/list/listSlice'
import { getBooks } from './features/books/booksSlice'
import { getItems } from './features/items/itemsSlice'

function App() {
  const dispatch = useDispatch();
  dispatch(getList())
  dispatch(getBooks())
  dispatch(getItems())

  return (
      <div className="overall-layout">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fakestore" element={<FakeStore />} />
          <Route path="/form" element={<AddItemForm />} />
          <Route path="/antd" element={<AntD />} />
          <Route path="/MongoDB" element={<MongoDB />} />
          <Route path="/Backend" element={<Backend />} />
          <Route path="/Storybook" element={<Storybook />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
