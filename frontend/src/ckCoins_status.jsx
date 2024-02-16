import React from 'react';
import ProtocolStatus from './components/status';

function CkCoinsDescription() {
    return (
        <div style={{ maxWidth: '30vw' }}>
            <p> The CkCoins is an innovative decentralized and over-collateralized stablecoins
                platform that aims to provide a stable and capital-efficient alternative to highly volatile cryptocurrencies.</p>
            <button style={{ border: 'solid', height: 'fit-content' }}>
                Whitepaper
            </button>
        </div>
    )
}


export default function CkCoinsStatus() {
    return (
        <div className="container">
            <CkCoinsDescription />
            <ProtocolStatus />
        </div>
    );
}