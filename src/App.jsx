import React from "react";
import { Routes, Route } from "react-router-dom";
import "./input.css";
import Home from "./page/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}
