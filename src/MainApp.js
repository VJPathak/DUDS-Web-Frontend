import Orders from "./pages/orders";
import Product from "./pages/product";
import Wishlist from "./pages/wishlist";
import Yourcart from "./pages/yourcart";
import About from "./pages/about";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Routes,Route } from "react-router-dom";

export default function MainApp(){
    return(
        <div>
            <div className="main-class">
                    <Navbar />
                    <Routes>
                        <Route
                        path='/'
                        element={
                            <App/>
                        } 
                        />
                        <Route
                        path='/product-item/:id'
                        element={
                            <Product/>
                        } 
                        />
                        <Route
                        path='/about'
                        element={
                            <About/>
                        } 
                        />
                        <Route
                        path='/orders'
                        element={
                            <Orders/>
                        } 
                        />
                        <Route
                        path='/wishlist'
                        element={
                            <Wishlist/>
                        } 
                        />
                        <Route
                        path='/yourcart'
                        element={
                            <Yourcart/>
                        } 
                        />
                    </Routes>
                    <Footer/>
            </div>
        </div>
    )
}