import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBarFooter } from "./components/navbar__footer";
import Home from "./pages/home";
import PlaceToStay from "./pages/placetostay";


function App() {

 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<NavBarFooter />}>
            <Route index element={<Home />} />
            <Route path="placetostay" element={<PlaceToStay />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
