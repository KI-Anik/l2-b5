import { Button } from "@/components/ui/button"
import Navbar from "./components/layout/Navbar"
import { Outlet } from "react-router"
 
function App() {
  return (
  <>
  
      <Navbar></Navbar>
      <Outlet></Outlet>
      
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  </>
  )
}
 
export default App