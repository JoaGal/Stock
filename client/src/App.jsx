import './styles/App.css'
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} /> */}
        </Routes>
    </Router>
  )
}

export default App
