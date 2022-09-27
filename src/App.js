import React, { useState } from "react";
import { PageContext } from "./Context";
import 'antd/dist/antd.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import TopNav from './components/TopNav/TopNav'
import { AntD } from './pages/AntD/AntD'

// Pages
import { FakeStore } from './pages/FakeStore/FakeStore'
import { AddItemForm } from './pages/Form/Form'
import { useDispatch } from 'react-redux'

import { getList } from './features/list/listSlice'

function App() {
  const dispatch = useDispatch();
  dispatch(getList())

  const [value, setValue] = useState("/");

  return (
    <PageContext.Provider value={{ value, setValue }}>

      <div className="overall-layout">
        <Router>
          <TopNav />
          <Routes>
            <Route path="/" element={<AntD />} />
            <Route path="/fakestore" element={<FakeStore />} />
            <Route path="/form" element={<AddItemForm />} />
          </Routes>
        </ Router>
      </div>
    </PageContext.Provider>
  );
}

export default App;
