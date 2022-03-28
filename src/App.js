import {BrowserRouter as Link, Router, Routes, Route} from "react-router-dom";
import About from  "./components/About";
import Users from "./components/Users";
import Home from "./components/Home";
function App() {
  return (
    <Router>
    <div>
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
        <li>
          <Link to ="/About">About</Link>
          </li>
        <li>
          <Link to ="/Users">Users</Link>
          </li>
      </ul>
      </nav>
      <Routes>
        <Route path="/about" element ={<About/>}>
          <About/>
        </Route>
        <Route path="/users" element ={<Users/>}>

          </Route>
          <Route path ="/" element ={<Home/>}>

            </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

