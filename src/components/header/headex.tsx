import React from 'react'
import { CovaLogo } from '../icons/covelogo'
import './header.scss';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export const HeadexComponent = () => {
    return (
        <div className="headercomp">
            <div className="desktop ">
                <div className="covalogo">
                    <CovaLogo />
                </div>
                <div className="alllinks">
                    <a className="linksd" href="">How it works</a>
                    <a className="linksd" href="">Pricing</a>
                    <a className="linksd" href="">Security</a>
                    <a className="linksd signin" href="">Sign In</a>
                    <a className="getstarted signup " href="">Get Started</a>
                </div>
            </div>

            <div className="mobile ">

            </div>
        </div>
    )
}
