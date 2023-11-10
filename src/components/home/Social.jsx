import React from 'react';
import './home.css';

const Social = () => {
 
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/dev__works/" className="home__social-icon" >
                <i class="uil uil-instagram"></i>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100094286504093" className="home__social-icon" >
                <i class="uil uil-facebook"></i>
            </a>

            <a href="https://github.com/" className="home__social-icon" >
                <i class="uil uil-github"></i>
            </a>
        </div>
    );
}

export default Social;
