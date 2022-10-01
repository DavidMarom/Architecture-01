import React, { useState } from "react";
import 'antd/dist/antd.min.css'
import { Route, Routes } from 'react-router-dom'

// Components
import TopNav from './components/TopNav/TopNav'

import { AntD } from './pages/AntD/AntD'
import { FakeStore } from './pages/FakeStore/FakeStore'
import { AddItemForm } from './pages/Form/Form'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { useDispatch } from 'react-redux'
import { getList } from './features/list/listSlice'

function App() {
  const dispatch = useDispatch();
  dispatch(getList())

  return (
      <div className="overall-layout">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fakestore" element={<FakeStore />} />
          <Route path="/form" element={<AddItemForm />} />
          <Route path="/antd" element={<AntD />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
