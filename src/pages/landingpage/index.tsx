import React, { useState } from 'react'
import { HeadexComponent } from '../../components/header/headex';
import FammilyLove from '../../assets/svg/familylove.svg';
import HowitWorks4 from '../../assets/svg/hotitworks4.svg';
import './index.scss'
import { HowitworksIcon } from '../../components/icons/howitworks';
// import { Howitworks1 } from '../../components/icons/Howitworks1';
// import { Howitworks2 } from '../../components/icons/Howitworks2';
// import { Howitworks3 } from '../../components/icons/Howitworks3';
import Howitworks1 from '../../assets/svg/hotitworks1.svg';
import Howitworks2 from '../../assets/svg/hotitworks2.svg';
import Howitworks3 from '../../assets/svg/hotitworks3.svg';
import Howitworks4 from '../../assets/svg/hotitworks4.svg';
import Pixalo from '../../assets/svg/pixalo.svg';
import { CovaLogo } from '../../components/icons/covelogo';
import { InstagramIcon } from '../../components/icons/instagram';
import { TwittterIcon } from '../../components/icons/twittter';
import { Facebookicon } from '../../components/icons/facebook';
import { Homer12 } from '../../components/icons/homemaye';
import ManDan from '../../assets/img/mandan.png'

export const LandingPage = () => {
    const [isImage, setisImage] = useState(1);

    setTimeout(() => {
        if (isImage==1) {
            setisImage(2)
        }else if (isImage==2) {
            setisImage(3)
        }else if (isImage==3) {
            setisImage(4)
        }else if (isImage==4) {
            setisImage(1)
        }
    }, 3000);
    return (
        <div className="landingpage">
            <div className="headerholder">
                <HeadexComponent />
            </div>
            <div className="familybackground">
                {/* <img src={FammilyLove} alt="" /> */}

                <div className="showmesomethings">
                    <p className="organiset">Track <span>all</span> your assets in one place</p>
                    <p className="organisec">Organize cryptocurrencies, bank accounts, stocks, investments and safely transfer your information to your beneficiaries in case of eventualities.</p>
                    <button onClick={() => {
                        window.location.replace("https://beta.getcova.com/signup");
                    }}
                        className="getstarted">Get Started</button>
                    <p className="tryc">Try Cova for <span> 14 days</span> free</p>

                </div>
                <div className="sided1">
                    <img src={ManDan} alt="" />
                </div>
            </div>

            <div id="how-it-works" className="how-it-works">
                <div className="beg1">


                    <div className="journer">
                        <p className=""> The journey to planning your inheritance starts with tracking your assets</p>

                    </div>
                    <div className="hereishow">
                        <p className="hereishow-text">
                            <span className="icon001"><HowitworksIcon /></span>
                            <span className="text44">here’s how it works</span>
                        </p>
                    </div>

                </div>

                <div className="image-how-it ">
                    <div className="image-how-it-img-div left-img6 dol-4">
                        <div id="cf3">
                            <img style={{display:isImage==1?'block':'none'}}  className="top" src={Howitworks1} alt="" />
                            <img style={{display:isImage==2?'block':'none'}}   className="bottom" src={Howitworks2} alt="" />
                            <img style={{display:isImage==3?'block':'none'}}   src={Howitworks1} alt="" />
                            <img style={{display:isImage==4?'block':'none'}}   src={Howitworks1} alt="" />
                        </div>
                        {/* <Howitworks1 /> */}
                    </div>
                    <div className="image-how-it-info">
                        <p className="image-how-it-info-1">
                            Connect & track your cryptocurrencies and wallets
                        </p>
                        <p className="image-how-it-info-2">
                            Conect your wallets and cryptocurrencies, get their balances in real-time and easily track their growth with Cova.
                        </p>

                    </div>
                </div>

                <div className="image-how-it depictreverse">

                    <div className="image-how-it-info">
                        <p className="image-how-it-info-1">
                            Track your bank and investments accounts balances
                        </p>
                        <p className="image-how-it-info-2">
                            See all your investments in one place. Cova uses industry-leading aggregation technology to give you access to your bank, retirement, and investment accounts.                        </p>

                    </div>
                    <div className="image-how-it-img-div right-img6">
                        <img src={Howitworks2} alt="" />
                        {/* <Howitworks2 /> */}
                    </div>

                </div>
                <div className="image-how-it">
                    <div className="image-how-it-img-div left-img6">
                        <img src={Howitworks3} alt="" />
                        {/* <Howitworks3 /> */}
                    </div>
                    <div className="image-how-it-info">
                        <p className="image-how-it-info-1">
                            Add your traditional assets, create your digital vault.
                        </p>
                        <p className="image-how-it-info-2">
                            Add traditional assets like real estate properties, cars, etc. Add their values and upload vital supporting documents. Cova is fully secured.                         </p>

                    </div>
                </div>

                <div className="image-how-it depictreverse">

                    <div className="image-how-it-info">
                        <p className="image-how-it-info-1">
                            Safely transfer your portfolio to your chosen beneficiaries.                        </p>
                        <p className="image-how-it-info-2">
                            Decide who receives access to your assets and safely transfer this information to them in the event of an unforeseen emergency.                         </p>

                    </div>
                    <div className="image-how-it-img-div right-img6">
                        <img src={HowitWorks4} alt="" />
                        {/* <Howitworks4 /> */}
                    </div>

                </div>

            </div>

            <div id="secure-assets" className="secure-assets">
                <div className="secure-assets-width">
                    <p className="secure-assets-t1">Secure Wealth Tracking & Inheritance Planning</p>
                    <p className="secure-assets-t2">Cova uses Bank Grade Security working with the world’s best agreegators to secure and manage your investment data. We understand you store and track your sensitive data with Cova.</p>
                    <button
                        onClick={() => {
                            window.location.replace("https://beta.getcova.com/signup");
                        }}
                        className="getstarted">Get Started</button>
                    <div className="pixalo">
                        <img src={Pixalo} alt="" />
                    </div>
                </div>
            </div>

            <div id="pricing-assets" className="pricing-assets">
                <div className="pricing-assets-inner">
                    <p className="pricing-header-1">Pricing</p>
                    <p className="pricing-header-2">We do not sell or share your user data with anyone. We make money by charging a yearly/monthly subscription. </p>
                    <div className=""></div>
                    <div className="pricing-div">
                        <p className="pricing-div-freq">EVERY MONTH</p>
                        <p className="pricing-div-freq-price">
                            <span className="pricing-div-freq-price-1">$9.99</span>
                            <span className="pricing-div-freq-price-2">paid monthly</span>
                        </p>
                    </div>
                    <p className="p-try-1">Try Cova for 14 days free</p>
                </div>


            </div>

            <div id="ready-to-get-started" className="ready-to-get-started">
                <div className="ready-to-get-started-1">
                    <p className="ready-to-get-started-ready">Ready to Get Started with Cova?</p>
                    <p className="ready-to-get-started-start">Start organizing your assets, tracking your investments, building your digital vault and setting up your beneficiaries for the future.</p>
                </div>
                <div className="ready-to-get-started-2">
                    <button
                        onClick={() => {
                            window.location.replace("https://beta.getcova.com/signup");
                        }}
                        className="getstarted-white">Get Started</button>
                </div>
            </div>

            <div id="covafooter-1" className="covafooter-1">
                <div className="logodiv">
                    <CovaLogo />
                </div>
                <div className="urls">
                    <p className="urls-header">Company</p>
                    <a href="" className="urls-links">Our Mission</a>
                    <a href="" className="urls-links">How Cova Works</a>
                    <a href="" className="urls-links">Our Commitment to Security</a>

                </div>
                <div className="urls">
                    <p className="urls-header">Resources</p>
                    <a href="" className="urls-links">Blog</a>
                    <a href="" className="urls-links">Features</a>
                    <a href="" className="urls-links">Press</a>
                    <a href="" className="urls-links">FAQs</a>
                </div>
                <div className="urls">
                    <p className="urls-header">Get in Touch</p>
                    <a className="urls-links" href="">support@getcova.com</a>
                    <a className="urls-links" href="">+234 809 6062 291</a>
                    <div className="url-socials">
                        <a className="url-socials-t" href="">
                            <TwittterIcon />
                        </a>
                        <a className="url-socials-t" href="">
                            <Facebookicon />
                        </a>
                        <a className="url-socials-t" href="">
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
            </div>

            <div id="covafooter-2" className="covafooter-2">
                <div className="covafooter-2-1">
                    <p className="">© 2021 Cova. All rights reserved</p>
                </div>
                <div className="covafooter-2-2">
                    <a href="" className="links-3">Privacy Policy</a>
                    <a href="" className="links-3">Terms and Conditions</a>
                </div>
            </div>
            <div className="mobile44">
                <p className="try909"> Try Cova for <span>14 days </span> free</p>

                <button onClick={() => {
                    window.location.replace("https://beta.getcova.com/signup");
                }}
                    className="getstarted22">Get Started</button>
            </div>
        </div>
    )
}
