import './App.css';
import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import $ from 'jquery';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import Main from './components/Main';
import ProductDetails from './components/ProductDetails';




function App()
{
  const showLoader = async () => {
    $('#preloader').delay(500).fadeOut(500);
  }

  const imageSlider = async () => {
    const script = document.createElement('script');
    script.text = "$('#glasscase').glassCase({'thumbsPosition': 'bottom','widthDisplayPerc': 100,isDownloadEnabled: false,});";
    script.async = true;
    document.body.appendChild(script);
  }

  const getProducts = async () => {
    const data = await fetch('http://localhost:5000/products');
    return data.json()
  }

  const addToCart = (product) =>{
    console.log('Product'+product)
    setCart([...cart,[...product,{qte:1}]]);
  };

  const previewProduct = (product) => {
    console.log(product);
  }

  const getCategories = async () => {
    const data = await fetch('http://localhost:5000/categories');
    return data.json()
  }

  const [products,setProducts] = useState([]); 
  const [categories,setCategories] = useState([]); 
  const [cart,setCart] = useState([{title:'Men basket',price:500,qty:5}]);

  useEffect(() => {
    
    showLoader();

    const init = async () =>{
      setProducts(await getProducts());
      setCategories(await getCategories());
    }

    init();

  }, []);

  return (
    <Router>
      <Preloader />
      <Navbar cart={cart} setCart={setCart} />
      <Newsletter />
      <Routes>
        <Route 
          path='/'
          exact
          element={
            <>
              <Main products={products} categories={categories} onPreview={previewProduct}/>
            </>
          } 
        />
        <Route path='/product/:id' element={<ProductDetails addToCart={addToCart} imageSlider={imageSlider} />} />
      </Routes>
      <Footer />
    </Router>
  );
}



export default App;
