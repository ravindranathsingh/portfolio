import Home from "./components/Home";
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from "./components/NavBar"
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variant = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }

  return (
    <div className="App">
      <motion.div className="w-8 h-8 border-l-black bg-black rounded-full fixed top-0 left-0" variant={variant} animate="default"/>
      <Router>
        <NavBar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
