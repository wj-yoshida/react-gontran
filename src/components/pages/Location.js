import React from 'react';
import Head from "../block/Head"
import { Link } from "react-router-dom";
import '../../Location.css';
const Register = () => {
  return (
    <>
      <div className="store_page">
        <section className="common__head ttl_anim"> <a className="common__head__sidelink sidelink__left font-minervamodern" href="/?mode=cate&csid=0&cbid=2750575">ONLINE STORE</a>
          <div className="common__head__kv">
            <div className="common__head__kv__wrap">
              <div className="common__head__kv__txt "> <img src="https://file003.shop-pro.jp/PA01461/818/svg/ttl_store.svg" alt="about" className="common__head__kv__txt__imgttl ttl_anim_p" />
                <h1 className="common__head__kv__txt__ttl font-minervamodern ttl_anim_p">Store list<span className="hide_sp"> & </span><br className="sp" />location</h1>
                <p className="common__head__kv__txt__subttl ttl_anim_p2">店舗一覧・所在地</p>
              </div>
              <div className="common__head__kv__img">
                <img src="https://img07.shop-pro.jp/PA01461/818/etc/kv_store.jpg?cmsp_timestamp=20220920121304" className="pc" />
                <img src="https://img07.shop-pro.jp/PA01461/818/etc/kv_store_sp.jpg?cmsp_timestamp=20220920121304" className="sp" />
              </div>
            </div>
            <a href="/" className="common__head__kv__logo pc">
              <img src="https://file003.shop-pro.jp/PA01461/818/svg/logo.svg" /></a>
            </div>
            <a className="common__head__sidelink sidelink__right font-minervamodern" href="https://www.instagram.com/gontrancherrierjp/" target="_blank">FOLLOW US ON INSTAGRAM</a>
        </section>
        <section className="store__news ttl_anim">
          <h2 className="font-minervamodern ttl_anim_h2"> <span className="ttl_anim_h2_span">
              Enjoy our store, café and<br />a croissant
            </span> </h2>
          <div className="store__news__left ttl_anim_p">

          </div>

        </section>
        {/*<section className="store__list ttl_anim">
          <div className="store__list__location ttl_anim_p" id="aoyama"> <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_store_aoyama_bk.svg" className="store__list__svg pc" />
            <div className="store__list__location__wrap">
              <div className="store__list__img">
                <div className="imgswiper imgswiper01">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide" style="background-image: url(https://img07.shop-pro.jp/PA01461/818/etc/store_aoyama_01.jpg?cmsp_timestamp=20220920121752);"></div>
                    <div className="swiper-slide" style="background-image: url(https://img07.shop-pro.jp/PA01461/818/etc/store_aoyama_02.jpg?cmsp_timestamp=20220920121752);"></div>
                    <div className="swiper-slide" style="background-image: url(https://img07.shop-pro.jp/PA01461/818/etc/store_aoyama_03.jpg?cmsp_timestamp=20220920121752);"></div>
                    <div className="swiper-slide" style="background-image: url(https://img07.shop-pro.jp/PA01461/818/etc/store_aoyama_04.jpg?cmsp_timestamp=20220920121752);"></div>
                    <div className="swiper-slide" style="background-image: url(https://img07.shop-pro.jp/PA01461/818/etc/store_aoyama_05.jpg?cmsp_timestamp=20220920121752);"></div>
                  </div>
                  <div className="store__list__img__button_box">
                    <div className="swiper-button-prev swiper_prev01"> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20.7 13.9" style="enable-background:new 0 0 20.7 13.9;" xmlSpace="preserve"><polygon points="20.7,6.5 1.8,6.5 7.6,0.7 6.9,0 0,6.9 6.9,13.9 7.6,13.1 2,7.5 20.7,7.5 "/></svg> </div>
                    <div className="swiper-button-next swiper_next01"> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20.7 13.9" style="enable-background:new 0 0 20.7 13.9;" xmlSpace="preserve"><polygon points="13.8,0 13.1,0.7 18.7,6.3 0,6.3 0,7.3 18.9,7.3 13.1,13.1 13.8,13.9 20.7,6.9 "/></svg> </div>
                  </div>
                </div>
              </div>
              <div className="store__list__txt "> <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_store_aoyama_bk.svg" className="store__list__svg sp" />
                <h3 className="store__list__txt__ttl">ゴントラン シェリエ 青山店</h3>
                <p className="store__list__txt__address">〒150-0001 東京都渋谷区神宮前5丁目51-8 1階～2階 ラ・ポルト青山1F・2F</p>
                <div className="store__list__txt__time-tel font-minervamodern">
                  <p className="store__list__txt__time-tel__time">Open 7:30-19:30</p>
                  <p className="store__list__txt__time-tel__tel"> <span className="store__list__txt__time-tel__tel__icon"><img src="https://file003.shop-pro.jp/PA01461/818/svg/icon_phone.svg" /></span> <span className="store__list__txt__time-tel__tel__number"><a href="tel:03-6450-6184">03-6450-6184</a></span> </p>
                </div>
                <p className="store__list__txt__p"> 1階：ベーカリー（テラス14席あり）、テイクアウェイコーナー（フレンチクレープ、ワッフル、ソフトクリーム）。<br /> 2階：カフェ（34席）。各種ドリンク、パンに合うライトミールの他、アルコールもお楽しみいただけます。 </p> <a href="https://goo.gl/maps/X4jJ6mv2KfaFGzTq7" target="_blank" className="btn_bk font-minervamodern">OPEN MAP</a> </div>
            </div>
          </div>
          <div className="store__list__location ttl_anim_p" id="shinjuku"> <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_store_shinjuku_bk.svg" className="store__list__svg pc" />
            <div className="store__list__location__wrap">
              <div className="store__list__img">
                <div className="imgswiper imgswiper02">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide" style="background-image: url(https://img07.shop-pro.jp/PA01461/818/etc/store_slider_shinjuku01.jpg?cmsp_timestamp=20221018183635);"></div>
                    <div className="swiper-slide" style="background-image: url(https://img07.shop-pro.jp/PA01461/818/etc/store_slider_shinjuku02.jpg?cmsp_timestamp=20221018183635);"></div>
                    <div className="swiper-slide" style="background-image: url(https://img07.shop-pro.jp/PA01461/818/etc/store_slider_shinjuku03.jpg?cmsp_timestamp=20221018183635);"></div>
                    <div className="swiper-slide" style="background-image: url(https://img07.shop-pro.jp/PA01461/818/etc/store_slider_shinjuku04.jpg?cmsp_timestamp=20221018183635);"></div>
                  </div>
                  <div className="store__list__img__button_box">
                    <div className="swiper-button-prev swiper_prev02"> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20.7 13.9" style="enable-background:new 0 0 20.7 13.9;" xmlSpace="preserve"><polygon points="20.7,6.5 1.8,6.5 7.6,0.7 6.9,0 0,6.9 6.9,13.9 7.6,13.1 2,7.5 20.7,7.5 "/></svg> </div>
                    <div className="swiper-button-next swiper_next02"> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20.7 13.9" style="enable-background:new 0 0 20.7 13.9;" xmlSpace="preserve"><polygon points="13.8,0 13.1,0.7 18.7,6.3 0,6.3 0,7.3 18.9,7.3 13.1,13.1 13.8,13.9 20.7,6.9 "/></svg> </div>
                  </div>
                </div>
              </div>
              <div className="store__list__txt "> <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_store_shinjuku_bk.svg" className="store__list__svg sp" />
                <h3 className="store__list__txt__ttl">ゴントラン シェリエ 新宿店 </h3>
                <p className="store__list__txt__address">〒160-0023 東京都新宿区西新宿一丁目5番1号　小田急百貨店新宿店1階</p>
                <div className="store__list__txt__time-tel col1 font-minervamodern">
                  <p className="store__list__txt__time-tel__time"> Open 7:30-20:30<span className="date_txt">（平日・土曜）</span><br /><span style="opacity: 0;font-size: 32px;">Open </span>7:30-20:00<span className="date_txt">（日曜・祝）</span> </p>
                  <p className="store__list__txt__time-tel__tel"> <span className="store__list__txt__time-tel__tel__icon"><img src="https://file003.shop-pro.jp/PA01461/818/svg/icon_phone.svg" /></span> <span className="store__list__txt__time-tel__tel__number"><a href="tel:03-6258-1918">03-6258-1918</a></span> </p>
                </div>
                <a href="https://goo.gl/maps/7uSTFXkjN7UPpKko8" target="_blank" className="btn_bk font-minervamodern">OPEN MAP</a> </div>
            </div>
          </div>
        </section>
        <section className="store__map">
          <h2 className="store__map__store__ttl"> <span className="en font-minervamodern">Our store in the world</span> <span className="ja">世界各地の店舗</span> </h2>
          <div id="map" className="store__map__base"></div>
          <div className="store__map__store__slide swiper-container ttl_anim">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <p className="store__map__store__slide__ttl">フランス</p>
                <div className="img"> <img src="https://img07.shop-pro.jp/PA01461/818/etc/store01.jpg?cmsp_timestamp=20220920121304" /> </div> <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_france_wh.svg" className="store__map__store__slide__bgtxt" height="105" /> </div>
              <div className="swiper-slide">
                <p className="store__map__store__slide__ttl">サウジアラビア</p>
                <div className="img"> <img src="https://img07.shop-pro.jp/PA01461/818/etc/store02.jpg?cmsp_timestamp=20220920121304" /> </div> <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_saudi_arabia_wh.svg" className="store__map__store__slide__bgtxt" height="105" /> </div>
              <div className="swiper-slide">
                <p className="store__map__store__slide__ttl">韓国</p>
                <div className="img"> <img src="https://img07.shop-pro.jp/PA01461/818/etc/store03.jpg?cmsp_timestamp=20220920121304" /> </div> <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_south_korea_wh.svg" className="store__map__store__slide__bgtxt" height="105" /> </div>
              <div className="swiper-slide">
                <p className="store__map__store__slide__ttl">中国</p>
                <div className="img"> <img src="https://img07.shop-pro.jp/PA01461/818/etc/store04.jpg?cmsp_timestamp=20220920121304" /> </div> <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_china_wh.svg" className="store__map__store__slide__bgtxt" height="105" /> </div>
              <div className="swiper-slide">
                <p className="store__map__store__slide__ttl">アルゼンチン</p>
                <div className="img"> <img src="https://img07.shop-pro.jp/PA01461/818/etc/store05.jpg?cmsp_timestamp=20220920121304" /> </div> <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_argentina_wh.svg" className="store__map__store__slide__bgtxt" height="105" /> </div>
              <div className="swiper-slide">
                <p className="store__map__store__slide__ttl">台湾</p>
                <div className="img"> <img src="https://img07.shop-pro.jp/PA01461/818/etc/store06.jpg?cmsp_timestamp=20220920121304" /> </div> <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_taiwan_wh.svg" className="store__map__store__slide__bgtxt" height="105" /> </div>
              <div className="swiper-slide">
                <p className="store__map__store__slide__ttl">タイ</p>
                <div className="img"> <img src="https://img07.shop-pro.jp/PA01461/818/etc/store07.jpg?cmsp_timestamp=20220920121304" /> </div> <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_thailand_wh.svg" className="store__map__store__slide__bgtxt" height="105" /> </div>
              <div className="swiper-slide">
                <p className="store__map__store__slide__ttl">インドネシア</p>
                <div className="img"> <img src="https://img07.shop-pro.jp/PA01461/818/etc/store08.jpg?cmsp_timestamp=20220920121304" /> </div> <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_indonesia_wh.svg" className="store__map__store__slide__bgtxt" height="105" /> </div>
              <div className="swiper-slide">
                <p className="store__map__store__slide__ttl">オーストラリア</p>
                <div className="img"> <img src="https://img07.shop-pro.jp/PA01461/818/etc/store09.jpg?cmsp_timestamp=20220920121304" /> </div> <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_australia_wh.svg" className="store__map__store__slide__bgtxt" height="105" /> </div>
              <div className="swiper-slide">
                <p className="store__map__store__slide__ttl">米国</p>
                <div className="img"> <img src="https://img07.shop-pro.jp/PA01461/818/etc/store10.jpg?cmsp_timestamp=20220920121304" /> </div> <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_america_wh.svg" className="store__map__store__slide__bgtxt" height="105" /> </div>
            </div>
            <div className="store__map__store__slide__btns">
              <div className="swiper-button-prev btnprev__store"> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 9" style="enable-background:new 0 0 36.1 9;" xmlSpace="preserve"><path d="M9,0l0.7,0.7L2.4,8h33.7v1H0L9,0z"/></svg> </div>
              <div className="swiper-button-next btnnext__store"> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 9" style="enable-background:new 0 0 36.1 9;" xmlSpace="preserve"><path d="M36.1,9H0V8h33.7l-7.3-7.3L27.1,0L36.1,9z"/></svg> </div>
            </div>
          </div>
        </section>*/}
      </div>
    </>
  );
};

export default Register;