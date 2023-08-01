import React from "react";
import "./musedictionary.css";


const SmallLoadingRobot = () => {
    return (
<div className="muse-container">
    <div className="robot-dict">
        <div className="head-dict">
            <div className="mouth-dict"></div>
            <div className="left-eye-dict"></div>
            <div className="right-eye-dict"></div>
            <div className="left-pupil-dict"></div>
            <div className="right-pupil-dict"></div>
            <div className="blink-right-dict"></div>
            <div className="blink-left-dict"></div>
        </div>
        <div className="torso-dict">
            <div className="chest-dict"></div>
            <div className="muse-dict">muse</div>
            <div className="light-left-dict"></div>
            <div className="light-middle-dict"></div>
            <div className="light-right-dict"></div>
            <div className="light-left-blink-dict"></div>
            <div className="light-middle-blink-dict"></div>
            <div className="light-right-blink-dict"></div>
            <div className="shoulder-right-dict"></div>
            <div className="arm-right-dict"></div>
            <div className="right-arm-connect-dict"></div>
            <div className="shoulder-left-dict"></div>
            <div className="arm-left-dict"></div>
            <div className="left-arm-connect-dict"></div>
        </div>

        <div className="bottom-dict">
            <div className="left-cross-vertical-dict"></div>
            <div className="left-cross-horizontal-dict"></div>
            <div className="middle-cross-vertical-dict"></div>
            <div className="middle-cross-horizontal-dict"></div>
            <div className="right-cross-horizontal-dict"></div>
            <div className="right-cross-vertical-dict"></div>
            <div className="right-wheel-dict"></div> 
            <div className="middle-wheel-dict"></div>
            <div className="left-wheel-dict"></div>
            <div className="right-wheel-inner-dict"></div> 
            <div className="middle-wheel-inner-dict"></div>
            <div className="left-wheel-inner-dict"></div>
            <div className="waist-dict"></div>
        </div>
    </div>
</div> 
)};
export default SmallLoadingRobot;