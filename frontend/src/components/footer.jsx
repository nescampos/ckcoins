import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <img src="/mobius_strip.png" className="icon" />
                <div style={{ display: 'flex' }}>
                    <h2 style={{ display: 'flex', alignItems: 'center' }}>ckCoins</h2>
                    <span className="beta">beta</span>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <h2>Socials</h2>
                    
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <h2>Ressources</h2>
                    <div className='links'>
                        <li><a href="https://github.com/nescampos/ckcoins" target="_blank" rel="noreferrer"><p>Github</p></a></li>
                    </div>
                </div>
            </div>
        </footer >
    );
}