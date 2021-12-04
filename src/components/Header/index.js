import React from 'react'
import TopHeader from '../TopHeader'
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineUser, AiOutlineDown } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { blogMenu,BlogSubmenu,PageMenu, Submenu, New, Cart, menuWrapper, BrowseBtn, logoStyle, menList, menuListIcons, downIcon, HeaderBottom } from './style.module.css'
import logo from '../../Images/logo.webp'
function Header() {
    return (
        <>
            <TopHeader />
            <div>
                <div className={`container`}>
                    <div className={`row p`}>
                        <div className={`${menuWrapper}`}>
                            <div className={logoStyle}>
                                <img src={logo} alt="logo-1" />
                            </div>
                            <div>
                                <ul className={`${menList}`}>
                                    <li><a href="#"> Home</a></li>
                                    <li><a href="#"> Men</a></li>
                                    <li><a href="#">Women </a></li>
                                    <li className={New}><a href="#">Baby Collection</a></li>
                                    <li className={PageMenu}><a href="#"> Pages</a><span className={downIcon}><AiOutlineDown /></span>
                                        <ul className={Submenu}>
                                            <li><a href="#">Login</a></li>
                                            <li><a href="#">Cart</a></li>
                                            <li><a href="#">Product Details</a></li>
                                            <li><a href="#">Product Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li className={blogMenu}><a href="#">Blog </a>
                                        <ul className={BlogSubmenu}>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Element</a></li>
                                            <li><a href="#">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"> Contact</a></li>
                                </ul>
                            </div>
                            <div className={`${menuListIcons}`}>
                                <ul>
                                    <li><a href="#"><FiSearch /> </a> </li>
                                    <li><a href="#"><AiOutlineUser /> </a></li>
                                    <li><a href="#" className={Cart}><FiShoppingCart /> </a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Bottom Bar */}
                <div className={HeaderBottom}>
                    <p>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer
                        <a href="#" className={BrowseBtn}>Shop Now</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Header
