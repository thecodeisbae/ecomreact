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

  const getProducts = async () => {
    const data = await fetch('http://localhost:5000/products');
    return data.json()
  }

  const previewProduct = (product) => {
    console.log(product);
  }

  const getCategories = async () => {
    const data = await fetch('http://localhost:5000/categories');
    return data.json()
  }

  const [products,setProducts] = useState([]); 
  const [categories,setCategories] = useState([]); 

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
      <Navbar />
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
        <Route path='/product' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}



export default App;
