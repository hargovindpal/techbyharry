import {Link} from 'react-router-dom';
import '../index.css'
import Socialicons from './Socialicons';

function Header(){
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

        <nav className='nav sticky-top'>
            <div className="logo-container">
                <img src='/main-logo.png' alt='TechByHarry' className='logo'/>
                {/* <div className="brand-name">
                    <h1>Tech By Harry</h1>
                    <h3>Simplifying Tech | Empowering You</h3>
                </div> */}
            </div>
            <div className="nav-menu">
                <ul className="nav-list">
                    <li>
                        <Link to="/">HOME</Link>
                        <Link to="/">BLOG</Link>
                        <Link to="/">DOWLOAD</Link>
                        <Link to="/">RESUME</Link>
                        <Link to="/">BIO-DATA</Link>
                        <Link to="/">VIDEOS</Link>
                        <Link to="/">CONTACT</Link>
                        <Link to="/" title='Free Tools'>FREE TOOLS<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">NEW</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Header