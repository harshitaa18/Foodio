import Header from "./Components/Header/Header";
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import Aboutus from './Pages/Aboutus/Aboutus'
import Footer from "./Components/Footer/Footer";
import Menu from "./Pages/Menu/Menu";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
