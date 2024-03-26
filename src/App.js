import Home from "./components/Home";
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
