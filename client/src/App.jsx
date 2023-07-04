import "./styles/App.css";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
