import React from 'react'
import { Link } from 'react-router-dom'

function Socialicons() {
  return (
    <>
      <div className="social-icons">
                <ul>
                    <li><Link to="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></Link></li>
                    <li><Link to="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></Link></li>
                    <li><Link to="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link to="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                    <li><Link to="https://github.com/" target="_blank"><i className="fa-brands fa-github"></i></Link></li>
                    <li><Link to="https://youtube.com/" target="_blank"><i className="fa-brands fa-youtube"></i></Link></li>
                </ul>
                </div>
    </>
  )
}

export default Socialicons
