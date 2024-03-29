
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/detail/:id' element={<Detail/>}/> 
            <Route path='/contact' element={<Contact/>}/> 
            <Route path='/favs' element={<Favs/>}/> 
            <Route path='*' element={<h1>Ruta no encontrada...</h1>}/>
          </Routes>
          <Footer/>
      </div>

  );
}

export default App;
