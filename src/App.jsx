
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail' element={<Detail/>} />
        <Route path='/favs' element={<Favs/>} />
        </Routes>
      </BrowserRouter>
          <Navbar/>
          <Footer/>
      </div>
  );
}

export default App;
