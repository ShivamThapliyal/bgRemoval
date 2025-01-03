import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import Buycredit from "./Pages/Buycredit";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="result" element={<Result />} />
        <Route path="buy" element={<Buycredit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
