import React, { useState } from "react";
import { Link } from 'react-router-dom';
export const Header = () => {
    const [active, setActive] = useState(false);
    function toggleMenu() {
        setActive(!active)
    }
    return (
        <>
        <header className={`header ${active ? "open" : ""}`}>
            <div id="header_menu" className="header__menu " onClick={toggleMenu}>
                <div className="header__menu__box"></div>
                <div className="header__menu__box"></div>
            </div>
            <ul className="header__nav">
                <li className="header__nav__li"><Link to={"/about/"}className="font-minervamodern">GONTRAN CHERRIER</Link></li>
                <li className="header__nav__li"><Link to={"/location/"} className="font-minervamodern">LOCATION</Link></li>
                <li className="header__nav__li"><Link to={"/test/"} className="font-minervamodern">TEST</Link></li>
                <li className="header__nav__li"><Link to={"/hooks-tutorial/"} className="font-minervamodern">Hooks</Link></li>
            </ul>
            <h1 className="header__logo common_logo">
                <Link to={"/"}>
                    <img src="https://file003.shop-pro.jp/PA01461/818/svg/logo.svg" alt="logo" className="bk_logo" />
                    <img src="https://file003.shop-pro.jp/PA01461/818/svg/logo_wh.svg" alt="logo" className="wh_logo" />
                </Link>
            </h1>
            <div className="header__account">
            </div>
            <div className="header__cart">
                <Link href="https://gontrancherrier.jp/cart/proxy/basket?shop_id=PA01461818&amp;shop_domain=gontrancherrier.jp" >
                    <span className="txt font-minervamodern">My Cart</span>
                    <div className="header__cart__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.102" height="29.102" viewBox="0 0 29.102 29.102">
                            <g fill="none">
                                <path d="M2.646,0H26.457L29.1,21.165A7.937,7.937,0,0,1,21.165,29.1H7.937A7.937,7.937,0,0,1,0,21.165Z" stroke="none"></path>
                                <path id="header__cart__icon__fill" d="M 4.411243438720703 2.000003814697266 L 2.001113891601562 21.28110122680664 C 2.062841415405273 24.50173759460449 4.701908111572266 27.10246467590332 7.937034606933594 27.10246467590332 L 21.16543388366699 27.10246467590332 C 24.40056037902832 27.10246467590332 27.03962707519531 24.50173759460449 27.10135459899902 21.28110313415527 L 24.69121551513672 2.000003814697266 L 4.411243438720703 2.000003814697266 M 2.645673751831055 3.814697265625e-06 L 26.45678329467773 3.814697265625e-06 L 29.10246467590332 21.16543388366699 C 29.10246467590332 25.54893493652344 25.54893493652344 29.10246467590332 21.16543388366699 29.10246467590332 L 7.937034606933594 29.10246467590332 C 3.553533554077148 29.10246467590332 3.814697265625e-06 25.54893493652344 3.814697265625e-06 21.16543388366699 L 2.645673751831055 3.814697265625e-06 Z" stroke="none"></path>
                            </g>
                        </svg>
                    </div>
                            
                </Link>
            </div>
        </header>
        <div className={`gnav ${active ? "open" : ""}`}>
            <div className="gnav__wrap">
                <ul className="gnav__main">
                    <li className="gnav__main__li">
                        <Link to={"/about/"} className="gnav__main__a">
                            <span className="gnav__main__a__en font-minervamodern">Gontran cherrier</span>
                            <span className="gnav__main__a__ja">ゴントラン シェリエについて</span>
                        </Link>
                    </li>
                    <li className="gnav__main__li">
                        <Link to={"/location/"} className="gnav__main__a">
                            <span className="gnav__main__a__en font-minervamodern">Store Location</span>
                            <span className="gnav__main__a__ja">店舗所在地</span>
                        </Link>
                    </li>
                </ul>
                <ul className="gnav__sub">
                    <li className="gnav__sub__li">
                        <span className="gnav__sub__ttl font-minervamodern">Follow us</span>
                        <a href="https://www.instagram.com/gontrancherrierjp/" className="gnav__sub__a" target="_blank" rel="noreferrer">インスタグラム</a>
                    </li>
                </ul>
            </div>	
        </div>
        </>
    )
  }