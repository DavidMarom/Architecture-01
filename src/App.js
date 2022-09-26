import React, { useState } from "react";
import { PageContext } from "./Context";
import 'antd/dist/antd.css';

import TopNav from './components/TopNav/TopNav'
import { AntD } from './pages/AntD/AntD'
import { PageComp01 } from './pages/PageComp01/PageComp01'
import { Form } from './pages/Form/Form'
import { useDispatch } from 'react-redux'

import { getList } from './features/list/listSlice'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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
            <Route path="/antd" element={<AntD />} />
            <Route path="/page01" element={<PageComp01 />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </ Router>
      </div>
    </PageContext.Provider>
  );
}

export default App;
