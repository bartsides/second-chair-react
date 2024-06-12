import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavMenu from "./components/NavMenu/NavMenu";
import Trial from "./views/Trial/Trial";
import Trials from "./views/Trials/Trials";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavMenu />}>
            <Route index element={<Trials />} />
            <Route path="trials" element={<Trials />} />
            <Route path="trial" element={<Trial />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
