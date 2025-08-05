import {Link} from 'react-router-dom';
import { useState } from 'react';
import '../index.css'
import Socialicons from './Socialicons';

function Header(){

    const [menuOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!menuOpen);


    return(
        <>
        <div className="site-header ">
            
                <div className="contact-bar">
                    <ul>
                        <li>
                        <Link to="tel:7379583727">
                            <i className="fa-solid fa-phone-volume"></i> 7379583727 (Er.Harry)
                        </Link>
                        </li>
                        <li>
                        <Link to="https://maps.google.com/?q=Jhansi">
                            <i className="fa-solid fa-location-dot"></i> Jhansi
                        </Link>
                        </li>
                        <li>
                        <Link to="mailto:hargovindpal4@gmail.com">
                            <i className="fa-solid fa-envelope"></i> hargovindpal4@gmail.com
                        </Link>
                        </li>
                    </ul>
                </div>
                
                <Socialicons/>
        </div>

        <div className='nav sticky-top'>
            <div className="logo-container">
                <Link to="/"><img src='/main-logo.png' alt='TechByHarry' className='logo'/></Link>
                {/* <div className="brand-name">
                    <h1>Tech By Harry</h1>
                    <h3>Simplifying Tech | Empowering You</h3>
                </div> */}
            </div>
            
            <nav> 
                <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                    <li> <Link to="/">HOME</Link></li>
                    <li><Link to="/">BLOG</Link></li> 
                    <li><Link to="/">DOWLOAD</Link></li> 
                    <li><Link to="/">RESUME</Link></li> 
                    <li><Link to="/">BIO-DATA</Link></li> 
                    <li><Link to="/">VIDEOS</Link></li> 
                    <li><Link to="/">CONTACT</Link></li> 
                    <li> <Link to="/" title='Free Tools'>FREE TOOLS<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">NEW</span></Link></li> 
                    
                </ul>
            </nav>   
            
            <button className="nav-toggle d-md-none" onClick={toggleMenu}>☰</button>
        </div>
        </>
    )
}
export default Header