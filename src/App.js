import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBarFooter } from "./components/navbar__footer";
import Home from "./pages/home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route element={<NavBarFooter />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
