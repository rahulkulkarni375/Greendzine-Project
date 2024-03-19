import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import List from './components/List';

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/list" element={<List />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App


//   < div >
  
// {/* <Home/> */ }
// {/* <List /> */ }
// </ >