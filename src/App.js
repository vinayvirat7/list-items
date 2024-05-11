import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Post from "./components/PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
