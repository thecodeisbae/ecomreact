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
    script.id = "glass";
    if($('#glass').length === 0)
      document.body.appendChild(script);
    else{
      $('#glass').remove();
      document.body.appendChild(script);
    }
  }

  const homeSlider = async () => {
    const script = document.createElement('script');
    script.text = 'if ($(".home-slider").length > 0) {'+
        '$(".home-slider").owlCarousel({'+
        '    items: 1,'+
        '    loop:true,'+
        '    margin:0,'+
        '    nav:true,'+
        '    responsive: {'+
        '        0: {'+
        '            dots: true,'+
        '            nav:false,'+
        '        },'+
        '        768: {'+
        '            nav:true,'+
        '        },'+
        '    }'+
        '});'+
        '}'+
        'if ($(".latest-blog-salid").length > 0) {'+
        '    $(".latest-blog-salid").owlCarousel({'+
        '        loop: true,'+
        '        dots: false,'+
        '        nav: true,'+
        '        items: 2,'+
        '        mouseDrag: false,'+
        '        autoplaySpeed: 1000,'+
        '        autoplayTimeout:5000,'+
        '        autoplayHoverPause: true,'+
        '        responsiveClass: true,'+
        '        responsive: {'+
        '            0: {'+
        '                items: 1,'+
        '            },'+
        '            1200: {'+
        '                items: 2,'+
        '            },'+
        '        }'+
        '    });'+
        '}'
        ;
    
    script.id = "homeSlider";
    if($('#homeSlider').length === 0)
      document.body.appendChild(script);
    else{
      $('#homeSlider').remove();
      document.body.appendChild(script);
    }
  }

  const getProducts = async () => {
    const data = await fetch('http://localhost:5000/products');
    return data.json()
  }

  const addToCart = (product,qte = 1) =>{
    let objIndex = cart.findIndex((obj => obj.id === product.id));
    console.log(objIndex)
    if(objIndex != -1)
    {
      updateCart(product,qte)
    }else{
      setCart([...cart,{...product,qty:qte}]);
    }
  };

  const updateCart = (product,qte) =>{
    console.log(qte)
    setCart(
        cart =>
          cart.map(obj => {
            if (obj.id === product.id) {
              return {...obj, qty: (parseInt(obj.qty)+parseInt(qte))};
            }
            return obj;
          })
      )
  }

  const removeFromCart = (product) => {
    setCart(
        cart =>
          cart.filter(obj => {
            return obj.id !== product.id;
          }),
    )
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
      <Navbar cart={cart} setCart={setCart} removeFromCart={removeFromCart} />
      <Newsletter />
      <Routes>
        <Route 
          path='/'
          exact
          element={
            <>
              <Main homeSlider={homeSlider} products={products} categories={categories} onPreview={previewProduct}/>
            </>
          } 
        />
        <Route path='/product/:id' element={<ProductDetails updateCart={updateCart}  addToCart={addToCart} imageSlider={imageSlider} />} />
      </Routes>
      <Footer />
    </Router>
  );
}



export default App;
