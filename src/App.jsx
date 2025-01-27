import { Outlet } from "react-router-dom"
import Navbar from "./assets/components/Navbar/Navbar"


function App() {

  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
