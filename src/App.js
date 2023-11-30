
import './App.css';
import { NavBar1 } from './components/Navbar/NavBar1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop';
import { ShopCategory } from './pages/ShopCategory';
import { Product } from './pages/Product';
import { Cart1 } from './pages/Cart1';
import { LoginSignup } from './pages/LoginSignup';
import { Footer } from './components/Footer/Footer';
import sofa_banner from "./components/Assets/image_data/sofabanner.jpg"
import bed_banner from "./components/Assets/image_data/bedbanner.jpg"
import chair_banner from "./components/Assets/image_data/chairbanner.jpg"
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
    <NavBar1/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/chairs' element={<ShopCategory banner={sofa_banner} category="chairs"/>}/>
      <Route path='/sofas' element={<ShopCategory banner={bed_banner} category="sofas"/>}/>
      <Route path='/beds' element={<ShopCategory banner={chair_banner}category="beds"/>}/>
      <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart1/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    
    </BrowserRouter>
    
    </div>
  );
}

export default App;
