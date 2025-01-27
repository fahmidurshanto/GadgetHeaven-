import { Outlet } from "react-router-dom"
import Navbar from "./assets/components/Navbar/Navbar"
import Footer from "./assets/components/Footer/Footer"


function App() {

  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
