import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from'./pages/Home.js';
import About from'./pages/About.js';
import Counter from'./pages/Counter.js';
import Input from'./pages/input.js';
import Input2 from'./pages/input2.js';
import List from'./pages/List.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/input2">Input2</Link> | <Link to="/list">List</Link>
        {/* 아래 route에서 같은 path를 가진 라우트를 찾아 해당 리액트로 이동한다. */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/input2" element={<Input2 />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
