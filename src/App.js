import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Bilpleje from "./routes/Bilpleje";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Feedback from "./routes/Feedback";
import Polering from "./routes/Polering";
import Solfilm from "./routes/Solfilm";
import PolishPrice from "./components/PolishPrice";
import BilplejePrice from "./components/BilplejePrice";
import SolfilmPrice from "./components/SolfilmPrice";
import KlargoringPrice from "./components/KlargoringPrice";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/omos" element={<About />} />
          <Route path="/bilpleje" element={<Bilpleje />} />
          <Route path="/bilplejePrice" element={<BilplejePrice />} />
          <Route path="/klargoringPrice" element={<KlargoringPrice />} />
          <Route path="/polering" element={<Polering />} />
          <Route path="/polish" element={<PolishPrice />} />
          <Route path="/solfilm" element={<Solfilm />} />
          <Route path="/solfilmP" element={<SolfilmPrice />} />
          <Route path="/service" element={<Service />} />
          <Route path="/kontakt/*" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
