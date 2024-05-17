import Navbar from "./components/Navbar";
import MiddleOne from "./components/MiddleOne";
import MiddleTwo from "./components/MiddleTwo";
import FlashItem from "./components/FlashItem";
import MiddleThree from "./components/MiddleThree";
import Footer from "./components/Footer";
import Data from "./components/Data";
import './components/style.css';
function App() {

  const shirts = Data.map((item) => {
    return (
      <FlashItem
        key={item.kid}
        {...item}
      />
    )
  })


  return (
    <div className="App">
      <Navbar />
      <MiddleOne />
      <MiddleTwo />
      <div className="shirts-list">
        {shirts}
      </div>
      <button className="product-view">View All Products</button>
      <hr className="bord"/>
      <MiddleThree url={"https://backendinit.onrender.com/getcategory?cat=Shirts"} />
      <h1 className="middle-a-one-heading margin-left">Recently Viewed</h1>
      <div className="margin-left margin-bottom">
                    <img src="./images/arrowL.png" className="left-arrow"/>
                    <img src="./images/arrowR.png" className="right-arrow"/>
      </div>
      <div className="shirts-list">
        {shirts}
      </div>
      <button className="product-view">View All Products</button>
      <Footer/>
      <div>just a trial </div>
    </div>
  );
}

export default App;
