import { About, Detail, Form, Home, Landing } from "./views";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-dog" element={<Form />} />
        <Route path="/dogdetail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
