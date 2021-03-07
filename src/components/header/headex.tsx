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
                    <a className="linksd" href="">How it works</a>
                    <a className="linksd" href="">Pricing</a>
                    <a className="linksd" href="">Security</a>
                    <a className="linksd signin" href="">Sign In</a>
                    <a className="getstarted signup " href="">Get Started</a>
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
                        <a className="linksd" href="">How it works</a>
                        <a className="linksd" href="">Pricing</a>
                        <a className="linksd" href="">Security</a>
                        <a className="linksd signin" href="">Sign In</a>
                        <a className="getstarted signup " href="">Get Started</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
