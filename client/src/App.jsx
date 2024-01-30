import "./styles/App.css";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { InputValueContext } from "./context/InputValueContext";
import { UserDataContext } from "./context/UserDataContext";

function App() {
  return (
    <div className="container">
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
    </div>
  );
}

export default App;
