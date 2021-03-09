import React, { useState } from 'react'
import { Burgermenu2Icon } from '../icons/burgermenu2';
import { CovaLogo } from '../icons/covelogo'
import './header.scss';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export const HeadexComponent = () => {
    const [hidediv, sethidediv] = useState(true)
    return (
        <div className="headercomp">
            <div className="desktop ">
                <div className="covalogo">
                    <CovaLogo />
                </div>
                <div className="alllinks">
                    <a className="linksd" href="/#how-it-works">How it works</a>
                    <a className="linksd" href="/#pricing-assets">Pricing</a>
                    <a className="linksd" href="/#secure-assets">Security</a>
                    <a target="_blank"  className="linksd signin" href="https://beta.getcova.com/signin">Sign In</a>
                    <a target="_blank"  className="getstarted signup " href="https://beta.getcova.com/signup">Get Started</a>
                </div>
            </div>

            <div className="mobile ">
                <div className="inner-top">
                    <div className="v-222">
                        <div className="covalogo">
                            <CovaLogo />
                        </div>
                        <div>
                            <span onClick={()=>{
                                sethidediv(!hidediv)
                            }}><Burgermenu2Icon  /></span>
                        </div>
                    </div>

                    <div  style={{ display: hidediv ? 'none' : 'flex' }} className="layer2">
                        <a className="linksd" href="/#how-it-works">How it works</a>
                        <a className="linksd" href="/#pricing-assets">Pricing</a>
                        <a className="linksd" href="/#secure-assets">Security</a>
                        <a target="_blank" className="linksd signin" href="https://beta.getcova.com/signin">Sign In</a>
                        <a className="getstarted signup " target="_blank"  href="https://beta.getcova.com/signup">Get Started</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
