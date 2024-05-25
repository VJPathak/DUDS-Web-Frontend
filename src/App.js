import React, { useState, useRef, useContext } from "react";
import MiddleOne from "./components/MiddleOne";
import MiddleTwo from "./components/MiddleTwo";
import FlashItem from "./components/FlashItem";
import MiddleThree from "./components/MiddleThree";
import Data from "./components/Data";
import './components/style.css';
import FilterProduct from "./components/FilterProduct";
import { GlobalContext } from "./components/context";

function App() {
  const shirtsListRef = useRef(null);
  const shirtsListRefer = useRef(null);
  const [isViewAll, setIsViewAll] = useState(false);
  const handleViewAllClick = () => {
    setIsViewAll(!isViewAll);
  };
  const [isViewAllOther, setIsViewAllOther] = useState(false);
    const handleViewAllClickOther = () => {
        setIsViewAllOther(!isViewAllOther);
    };

  // const { isViewAll, setIsViewAll, handleViewAllClick } = useContext(GlobalContext);
  const shirts = Data.map((item) => {
    return (
      <FlashItem
        key={item.kid}
        {...item}
      />
    )
  });
  const scrollLeft = () => {
    if (shirtsListRef.current) {
      shirtsListRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (shirtsListRef.current) {
      shirtsListRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  const scrollL = () => {
    if (shirtsListRefer.current) {
      shirtsListRefer.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollR = () => {
    if (shirtsListRefer.current) {
      shirtsListRefer.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <MiddleOne />
      <MiddleTwo />
      <div className="middle-arrows">
        <img src="./images/arrowL.png" className="left-arrow" onClick={scrollL} />
        <img src="./images/arrowR.png" className="right-arrow" onClick={scrollR} />
      </div>

      <div className={`shirts-list ${isViewAll ? 'view-all' : ''}`} ref={shirtsListRefer}>
        {shirts}
      </div>
      <button className="product-view" onClick={handleViewAllClick}>
        {isViewAll ? 'Close the Products' : 'View All Products'}
      </button>
      <hr className="bord" />
      <FilterProduct/>
      {/* <MiddleThree url={"https://backendinit.onrender.com/getcategory?cat=Jeans"} /> */}
      <hr className="bord" />
      <div className="flex-row">

      <h1 className="middle-a-one-heading margin-left">Recently Viewed</h1>
      <div className="margin-left margin-bottom margin-right">
        <img src="./images/arrowL.png" className="left-arrow" onClick={scrollLeft} />
        <img src="./images/arrowR.png" className="right-arrow" onClick={scrollRight} />
      </div>
      </div>
      <div className={`shirts-list ${isViewAllOther ? 'view-all' : ''}`} ref={shirtsListRef}>
        {shirts}
      </div>
      <button className="product-view" onClick={handleViewAllClickOther}>
        {isViewAll ? 'Close the Products' : 'View All Products'}
      </button>
    </div>
  );
}

export default App;
