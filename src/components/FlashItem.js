import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

export default function FlashItem(props) {
    return (
        <div >
            <img src={props.image} className="item-image" />
            <h3 className="item-heading">{props.title}</h3>
            <div className="cost-content">
                <div className="part-one">
                <img src="./images/greenrupee.png" className="green-rupee" />
                <span>{props.dcost}</span>
                </div>
                <div className="part-two">
                <img src="./images/blackrupee.png" className="black-rupee"/>
                <span>{props.ocost}</span>
                </div>
            </div>
            <img src="./images/Five star.png" className="star-image"/>
            <span className="last-val">({props.reviews})</span>
        </div>

    )
}