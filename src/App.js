import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import BannerCarousel from './components/BannerCarousel';
import Header from "./components/Header";
import NavBarOffCanva from './components/NavBarOffCanva';
import ProductList from './components/ProductList';

function App() {
  const [ourProds, setOurProds] = useState([
    { id: 1, name: "Product Name 1", price: 500000, image: './images/pro1.jpg' },
    { id: 2, name: "Product Name 4", price: 500000, image: './images/pro1.jpg' },
    { id: 3, name: "Product Name 3", price: 500000, image: './images/pro1.jpg' },
    { id: 4, name: "Product Name 2", price: 500000, image: './images/pro1.jpg' }
  ]);

  const [salerProds, setSaleProds] = useState([
    { id: 1, name: "Product Name 1", price: 500000, image: './images/pro1.jpg' },
    { id: 2, name: "Product Name 4", price: 500000, image: './images/pro1.jpg' },
    { id: 3, name: "Product Name 3", price: 500000, image: './images/pro1.jpg' },
    { id: 4, name: "Product Name 2", price: 500000, image: './images/pro2.jpg' }
  ])
  return (
    <div className="App">
      <Header />
      <NavBarOffCanva />
      <BannerCarousel />
      <ProductList title="Our Product" data={ourProds} />
      <ProductList title="Sale Product" data={salerProds} />
    </div>
  );
}

export default App;
