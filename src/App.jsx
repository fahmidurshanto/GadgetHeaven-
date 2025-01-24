import { Outlet } from "react-router-dom"
import Navbar from "./assets/components/Navbar/Navbar"


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
