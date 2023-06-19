import {Route,Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Card from "./pages/Card"



function App() {

  return (
    <>
     
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Card" element={<Card/>} />
     </Routes>
    </>
  )
}

export default App
