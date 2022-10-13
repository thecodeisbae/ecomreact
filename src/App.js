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
    let objIndex = cart.findIndex((obj => obj.id === product.id));
    console.log(objIndex)
    if(objIndex != -1)
    {
      setCart(
        cart =>
          cart.map(obj => {
            if (obj.id === product.id) {
              return {...obj, qty:obj.qty+1};
            }
            return obj;
          })
      )
    }else{
      setCart([...cart,{...product,qty:1}]);
    }
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
  const [cart,setCart] = useState([]);

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
