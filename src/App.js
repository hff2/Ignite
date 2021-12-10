import React, { useEffect } from "react";
// Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//Styles
import GlobalStyles from "./components/GlobalStyles";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes path={["/game/:id","/"]}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>        
      </Routes>
    </div>
  );
}

export default App;
