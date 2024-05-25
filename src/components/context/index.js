import { createContext, useRef } from "react";
import { useState } from "react";
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('');
    const [productDetailsData,setProductsDetailsData] = useState(null);
    
   
    return <GlobalContext.Provider value={{ searchParam, setSearchParam,productDetailsData,setProductsDetailsData }}>{children}</GlobalContext.Provider>
}