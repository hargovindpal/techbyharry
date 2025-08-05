import { Link } from "react-router-dom"
import Socialicons from "./Socialicons"
import PrimaryButton from "./PrimaryButton"
import Instragram from "./Instragram"

function Footer(){
    return(
        <>
            <footer className="container-fluid">
                <div className="container-xxl">
                    <div className="row p-4">
                        <div className="col company">
                            <img src="public/logo.png" alt="" />
                            <img src="public/services.png" alt="" />
                        </div>
                        <div className="col">
                            <h4>Category</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Features</Link></li>
                                <li><Link to="/">Pricing</Link></li>
                                <li><Link to="/">FAQs</Link></li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Products</h4>
                            <ul>
                                <li><Link to="/">Logo Design</Link></li>
                                <li><Link to="/">Product Creative Design</Link></li>
                                <li><Link to="/">Web Design & Development</Link></li>
                                <li><Link to="/">Online Services</Link></li>
                                <li><Link to="/">Digital Marketing</Link></li>
                                <li><Link to="/">Paid Promotion</Link></li>
                            </ul>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115293.14143957528!2d78.47988551907308!3d25.441249887869777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397776d458ba7703%3A0x96e9cda55c3481ca!2sJhansi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1753255969845!5m2!1sen!2sin"
                                width="350"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </footer>


            <div className='copyright'>
                <p>© 2025  Tech By Harry. All Rights Reserved. | Designed & Maintained by : <Link to="/">HarryTechCraft</Link> 
                </p>
                <Socialicons/>
            </div>
            <Instragram/>

        </>
    )
}
export default Footer