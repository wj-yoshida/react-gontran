import React from 'react';
import { Link } from 'react-router-dom';
export const Footer = () => {  
    return (
        <>
            <footer className="footer">
                <img src="https://img07.shop-pro.jp/PA01461/818/etc/footer_logo.png?cmsp_timestamp=20220920115317" className="footer__logo" alt="logo" />
                <div className="footer__wrap">
                    <div className="footer__top">
                        <div className="footer__top__box">
                            <h4 className="font-minervamodern">ABOUT US</h4>
                            <Link to="/?mode=f3" >運営会社</Link>
                            <Link to="https://gontrancherrier.shop-pro.jp/secure/?mode=inq&amp;shop_back_url=https%3A%2F%2Fgontrancherrier.jp%2F&amp;shop_id=PA01461818">お問い合わせ</Link>
                        </div>
                        <div className="footer__top__box">                        
                        </div>
                        <div className="footer__top__box">
                        </div>
                        <div className="footer__top__box">
                            <h4 className="font-minervamodern">Follow Us</h4>
                            <Link to="https://www.instagram.com/gontrancherrierjp/" target="_blank" className="font-minervamodern insta">Instagram</Link>
                        </div>
                    </div>
                    <div className="footer__copy">
                        <p className="font-minervamodern">©Gontran Cherrier Japan 2022</p>
                    </div>
                </div>
            </footer>
        </>
    )
  }