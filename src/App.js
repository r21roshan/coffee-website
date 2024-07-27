import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App(){
  return(
    <div>
      <BrowserRouter>
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default App;

