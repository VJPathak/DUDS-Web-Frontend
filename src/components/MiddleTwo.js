import React, { useState, useEffect } from "react";

export default function MiddleTwo() {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const deadline = new Date("2024-06-01T00:00:00").getTime();

        // Update the countdown every second
        const countdownInterval = setInterval(() => {
            // Get the current time
            const now = new Date().getTime();

            // Calculate the remaining time
            const distance = deadline - now;

            if (distance < 0) {
                // If the deadline has passed, clear the interval
                clearInterval(countdownInterval);
            } else {
                // Calculate days, hours, minutes, and seconds
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Update the countdown state
                setCountdown({ days, hours, minutes, seconds });
            }
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(countdownInterval);
    }, []); // Run effect only once on component mount

    return (
        <div className="middle-two">
            <div className="countdown" id="countdown"> {/* Ensure this element exists */}
                {/* Display the countdown timer */}
                <p className="not-show">Flash sale ends in:</p>
                <p className="not-show">{countdown.days} days {countdown.hours} hours {countdown.minutes} minutes {countdown.seconds} seconds</p>
            </div>
            <div className="middle-a">
                <div className="middle-a-one">
                    <div className="middle-a-one-image">
                        <div className="rectangle"></div>
                        <h4 className="rectangle-name">Today's</h4>
                    </div>
                    <h3 className="middle-a-one-heading">Flash Sales</h3>
                </div>
                <div className="middle-a-two">
                    <div className="middle-a-two-days">
                        <p className="time">Days</p>
                        <h3 className="time-val">{countdown.days}</h3>
                    </div>
                    <h1 className="colon">:</h1>
                    <div className="middle-a-two-hours">
                        <p className="time">Hours</p>
                        <h3 className="time-val">{countdown.hours}</h3>
                    </div>
                    <h1 className="colon">:</h1>
                    <div className="middle-a-two-minutes">
                        <p className="time">Minutes</p>
                        <h3 className="time-val">{countdown.minutes}</h3>
                    </div>
                    <h1 className="colon">:</h1>
                    <div className="middle-a-two-seconds">
                        <p className="time">Seconds</p>
                        <h3 className="time-val">{countdown.seconds}</h3>
                    </div>
                </div>
                <div className="middle-arrows">
                    <img src="./images/arrowL.png" className="left-arrow"/>
                    <img src="./images/arrowR.png" className="right-arrow"/>
                </div>
            </div>
            <div className="middle-b">

            </div>
        </div>
    );
}
