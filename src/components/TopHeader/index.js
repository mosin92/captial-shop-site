import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitch, faYoutube, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { topheader, headerInfoleft, headserInfoRight, headerSocialIcon, headerRigthStyel } from './style.module.css'
function TopHeader() {
    return (
        <div className={topheader}>
            <div className="container">
                <div className="row p">
                    <div className="col-xl-12">
                        <div className="d-flex justify-content-between flex-wrap">
                            <div className={headerInfoleft}>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div className={`${headserInfoRight} d-flex`}>
                                <ul className={headerRigthStyel}>
                                    <li><a href="#">My Wishlist</a></li>
                                    <li><a href="#">Track Your Order </a></li>
                                </ul>
                                <ul className={headerSocialIcon}>
                                    <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
