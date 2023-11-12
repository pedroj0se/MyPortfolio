import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Pedro</h1>

            <ul className='footer__list'>
                
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/dev__works/" className="footer__social-link" >
                    <i class="bx bxl-instagram"></i>
                </a>

                <a href="https://www.facebook.com/profile.php?id=100094286504093" className="footer__social-link" >
                    <i class="bx bxl-whatsapp"></i>
                </a>

                <a href="https://github.com/" className="footer__social-link" >
                    <i class="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer