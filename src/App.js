import React, { useEffect } from "react";
// Components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import GameDetail from "./components/GameDetail";

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Routes path={["/game/:id","/"]}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>        
      </Routes>
    </div>
  );
}

export default App;
