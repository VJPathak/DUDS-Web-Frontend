import React from "react";
import { NavLink } from "react-router-dom";

export default function ApiItems(props) {
    console.log("wait");
    console.log(props.data);
    if (!props.data || !props.data.Images || !Array.isArray(props.data.Images) || props.data.Images.length === 0) {
        return <div>No image available</div>;
    }

    return (

        <div className="specific-item">
            <NavLink to={`/product-item/${props?.data?.vid}/${props?.data?.id}`} >

                <img src={props.data.Images[1]} className="item-image-two" alt="Item" />
            </NavLink>
            <h3 className="item-heading">{props.data.Name}</h3>
            <div className="cost-content margin-left">
                <span className="last-item">{props.data.Category}</span>
                <div className="part-one margin-left">
                    <img src="./images/greenrupee.png" className="green-rupee" alt="Green Rupee" />
                    <span>{props.data.Price}</span>
                </div>
                {/* <div className="part-two">
                <img src="./images/blackrupee.png" className="black-rupee" alt="Black Rupee" />
                <span>{props.ocost}</span>
                </div> */}
            </div>
            {/* <img src="./images/Five star.png" className="star-image" alt="Star" /> */}
        </div>
    );
}
