import Header from "./Components/Header/Header";
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import Aboutus from './Pages/Homepage/Homepage'
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
