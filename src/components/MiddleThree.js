import { useContext, useEffect, useState } from "react";
import ApiItems from "./ApiItems";
import { GlobalContext } from "./context";
export default function MiddleThree({ url }) {
    const [shirtsData, setShirtsData] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isViewAll, setIsViewAll] = useState(false);
    const handleViewAllClick = () => {
        setIsViewAll(!isViewAll);
    };

    // const { isViewAll, setIsViewAll, handleViewAllClick } = useContext(GlobalContext);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();
            console.log(data);
            if(data?.data){

                setShirtsData(data?.data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url.trim() !== "") {
            fetchData(url);
        }
    }, [url]);

    console.log(shirtsData);

    if (loading) {
        return <div>Loading data! Please wait</div>;
    }
    if (errorMsg !== null) {
        return <div>Error occurred! {errorMsg}</div>;
    }
    if (!Array.isArray(shirtsData)) {
        return <div>Data is not an array!</div>;
    }

    console.log(shirtsData);
    const dresses = shirtsData.map((item)=>{
        return(
            <ApiItems
            data = {item}
            />
        )
    })

    return (
        <div>

        <div className={`Shirts-List ${isViewAll ? 'view-all' : ''}`}>
            {dresses}
        </div>
        <button className="Product-View margin-new-left" onClick={handleViewAllClick}>
        {isViewAll ? 'Close the Products' : 'View All Products'}
      </button>
        </div>
    );
}
