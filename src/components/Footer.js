import React from "react";

export default function Footer(){
    return(
        <div className="total-part">
            <div className="left-part">
                <div className="left-part-one">
                    <h3 className="lph">Support</h3>
                    <p>111 Jaipur,Rajasthan,DH 1515,India</p>
                    <p>duds@gmail.com</p>
                    <p>+910000000000</p>
                </div>
                <div className="left-part-two">
                    <h3 className="lph">Account</h3>
                    <p>My Account</p>
                    <p>Login/Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className="left-part-three">
                    <h3 className="lph">Quick Link</h3>
                    <p>Privacy policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className="right-part">
                <div className="top-part">
                    <h3 className="lph">Download App</h3>
                </div>
                <div className="two-images">
                    <img src="./images/Qrcode 1.png" className="qrcode"/>
                    <div className="small-images">
                        <img src="./images/GooglePlay@2x.png" className="playstore"/>
                        <img src="./images/download-appstore.png" className="appstore"/>
                    </div>
                </div>
            </div>
        </div>
    )
}