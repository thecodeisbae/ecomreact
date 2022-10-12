import './App.css';
import { useState,useEffect } from 'react'
import $ from 'jquery';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import Main from './components/Main';




function App()
{
  const showLoader = async () => {
    $('#preloader').delay(500).fadeOut(500);
  }

  const getProducts = async () => {
    const data = await fetch('http://localhost:5000/products');
    return data.json()
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
    <>
      <Preloader />
      <Newsletter />
      <Navbar />
      <Main products={products} categories={categories}/>
      <Footer />
    </>
  );
}



export default App;
