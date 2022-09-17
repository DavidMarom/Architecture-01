import React, { useState } from "react";
import { PageContext } from "./Context";

import TopNav from './components/TopNav/TopNav'
import { PageComp } from './components/PageComp/PageComp'
import { PageComp01 } from './components/PageComp01/PageComp01'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  const [value, setValue] = useState("/");

  return (
    <PageContext.Provider value={{ value, setValue }}>

      <div className="overall-layout">
        <TopNav />

        <Router>
          <Routes>
            <Route path="/" element={<PageComp />} />
            <Route path="/page01" element={<PageComp01 />} />
          </Routes>
        </ Router>
      </div>
    </PageContext.Provider>
  );
}

export default App;
