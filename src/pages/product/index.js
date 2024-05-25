import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../components/context";

export default function Product() {
    const { productDetailsData, setProductsDetailsData } = useContext(GlobalContext);
    const { vid, id } = useParams();
    console.log({ vid, id });

    useEffect(() => {
        async function getProductDetails() {
            const response = await fetch(`https://backendinit.onrender.com/getitem?vid=${vid}&itemid=${id}`);
            const data = await response.json();

            console.log(data.data);
            setProductsDetailsData(data.data);
        }

        getProductDetails();
    }, [vid, id, setProductsDetailsData]);

    return (
        <div>
            <h1 className="all-margin">
                Product Page
            </h1>
            <h2>Name : {productDetailsData.Name}</h2>
            <h2>Description :{productDetailsData.Description}</h2>
            <h2>Price :{productDetailsData.Price}</h2>
            <h2>outOfStock :{productDetailsData.outOfStock.toString()}</h2>
            <h2>subCategory :{productDetailsData.subCategory}</h2>
        </div>
    );
}
