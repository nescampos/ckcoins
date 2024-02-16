import React, { FunctionComponent } from "react";
import "./landing.css"

const LandingPageMobile: FunctionComponent = () => {
    return (
        <div style={{ overflow: 'hidden' }}>

            <section className="container-mobile">
                <img className="elliptic-logo" alt="" src="landing/logo.png" />
                <div className="section">
                    <div className="title">
                        <h1>ckCoins</h1>
                    </div>
                    <div className="sub-title">
                        <p>A decentralized stablecoins platform,</p>
                        <p>backed by ckBTC</p>
                    </div>
                    <div className="social-images">
                        
                    </div>
                </div>
                <p style={{ fontStyle: 'italic', marginTop: '5em', color: 'grey', position: 'absolute', top: '100vh' }}>The dapp is not yet supported on mobile.</p>
            </section>
            <img
                className="image"
                style={{ filter: 'blur(12px)' }}
                alt=""
                src="tokens/taler_logo.png"
            />
            <div className="link-landing">
                <a href="https://github.com/nescampos/ckcoins" target="_blank" rel="noreferrer"><p>Github</p></a>
            </div>
            <p className='img-icp'><img alt="" src="landing\icp_powered_by.svg" /></p>
        </div>
    );
};

export default LandingPageMobile;