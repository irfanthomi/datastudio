import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./page/Login";
import Home from "./page/Home";

import Studio from "./page/Akademik/Studio";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studio/:url" element={<Studio />} />
      </Routes>
    </div>
  );
}

export default App;