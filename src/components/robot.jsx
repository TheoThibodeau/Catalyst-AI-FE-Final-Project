import React from "react";
import "./robot.css";


export default function LoadingRobot() {
    return (
<div className="container">
    <div className="bubble-container">
        <div class="triangle-bottom"></div>
        <div class="speech-box">
            <p>Click to generate a prompt.</p>
        </div>
        </div>
    <div className="robot">
        <div className="head">
            <div className="mouth"></div>
            <div className="left-eye"></div>
            <div className="right-eye"></div>
            <div className="left-pupil"></div>
            <div className="right-pupil"></div>
            <div className="left-dot"></div>
            <div className="right-dot"></div>
            <div className="blink-right"></div>
            <div className="blink-left"></div>
        </div>
        <div className="torso">
            <div className="chest"></div>
            <div className="muse">muse</div>
            <div className="light-left"></div>
            <div className="light-middle"></div>
            <div className="light-right"></div>
            <div className="shoulder-right"></div>
            <div className="arm-right"></div>
            <div className="right-arm-connect"></div>
            <div className="shoulder-left"></div>
            <div className="arm-left"></div>
            <div className="left-arm-connect"></div>
        </div>

        <div className="bottom">
            <div className="left-cross-vertical"></div>
            <div className="left-cross-horizontal"></div>
            <div className="middle-cross-vertical"></div>
            <div className="middle-cross-horizontal"></div>
            <div className="right-cross-horizontal"></div>
            <div className="right-cross-vertical"></div>
            <div className="right-wheel"></div> 
            <div className="middle-wheel"></div>
            <div className="left-wheel"></div>
            <div className="right-wheel-inner"></div> 
            <div className="middle-wheel-inner"></div>
            <div className="left-wheel-inner"></div>
            <div className="waist"></div>
        </div>
    </div>
</div> 
)}
