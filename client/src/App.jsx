import "./styles/App.css";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { motion } from "framer-motion";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { InputValueContext } from "./context/InputValueContext";
import { UserDataContext } from "./context/UserDataContext";

function App() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <AnimatePresence>
        <InputValueContext>
          <UserDataContext>
            <Router>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<h1>404</h1>} />
              </Routes>
            </Router>
          </UserDataContext>
        </InputValueContext>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
