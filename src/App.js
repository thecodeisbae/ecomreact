import './App.css';
import { useEffect } from 'react'
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

  useEffect(() => {
     showLoader();
  }, []);

  return (
    <>
      <Preloader />
      <Newsletter />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}



export default App;
