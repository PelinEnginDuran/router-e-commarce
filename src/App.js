import Header from "./Components/Header"
import Footer from "./Components/Footer"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Error from "./Pages/Error";
import Post from "./Pages/Post"
import About from "./Pages/About"
import Products from "./Pages/Products"
import SingleProducts from "./Pages/SingleProducts";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Post" element={<Post />}/>
        <Route path="About" element={<About />}/>
        <Route path="Products" element={<Products />}/>
        <Route path="Products/:productid" element={<SingleProducts />}/>
        <Route path="*" element={<Error />}/>
        

      </Routes>
      <Footer/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
