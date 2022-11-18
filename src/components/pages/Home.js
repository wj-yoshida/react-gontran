import React,{ useEffect, useRef } from 'react';

import Head from "../block/Head"
/*import { Link } from "react-router-dom";*/
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from "framer-motion";

import 'swiper/swiper-bundle.css';
SwiperCore.use([Autoplay])
/* eslint-disable import/first */
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/* eslint-disable import/first */
import '../../scss/top.scss';

const params1 = {
  loop: true,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
  }
}
const params2 = {
  direction: 'vertical',
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  }
}
const params3 = {
  mode: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  //resizeReInit: true,
  autoHeight: false,
  //scrollContainer: true,
  grabCursor: true,
  //createPagination: false,
  preventClicks: false,
  freeMode: true,
  //freeModeFluid: true,
  spaceBetween: 60,
  //dynamicBullets: false,
  mousewheel: {
    invert: true,
    forceToAxis: true
  },
  navigation: {
    nextEl: '.btnnext__store',
    prevEl: '.btnprev__store',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  }
}

const Home = () => {
  const topAboutRef = useRef(null);
  
  useEffect(() => {
      
      gsap.fromTo( 
        '#top__about__img',
        { opacity: 0 }, //fromの設定
        {  //toの設定
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: '#top__about',
            start: 'top center', //要素のトップが、画面の中央まできたら開始
            end: 'center center', //要素のボトムが、画面の中央まできたら終了
            scrub: true,
            
          },
        }
      )

      let topAboutTxt = gsap.timeline({
        scrollTrigger: {
          trigger: "#top__about",
          start: '25% center', //要素のトップが、画面の中央まできたら開始
          end: '75% center', //要素のボトムが、画面の中央まできたら終了
          scrub: 1,
          markers: true,
          /*
          snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            ease: "power2.out" // the ease of the snap animation ("power3" by default)
          },
          */
        },
      })
      topAboutTxt.from("#top__about__txt",  { yPercent: 20}, 0).to("#top__about__txt",  { yPercent: 0}, 0)
  }, [])

  return (
    <>
        <Head title="ゴントラン シェリエ ジャポン" />
        <motion.div
          animate={{ opacity:1 }}
          initial={{ opacity:0 }}
          exit={{ opacity:0 }}
          transition={{ duration: 0.4}}
        >

        <section id="common__head" className="common__head" >
          <a className="common__head__sidelink sidelink__left font-minervamodern" href="/?mode=cate&csid=0&cbid=2750575">ONLINE STORE</a>
          <div className="common__head__kv">
            <Swiper className="swiper-container top_kv_slider common__head__kv__wrap"  {...params1}>
              <SwiperSlide className="common__head__kv__img_">
                <div className="img">
                  <img src="https://img07.shop-pro.jp/PA01461/818/etc/topSlider_01.jpg?cmsp_timestamp=20220920115317" className="pc" alt="画像" />
                  <img src="https://img07.shop-pro.jp/PA01461/818/etc/topSlider_01_sp.jpg?cmsp_timestamp=20220920115317" className="sp" alt="画像" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="common__head__kv__img_">
                <div className="img">
                  <img src="https://img07.shop-pro.jp/PA01461/818/etc/topSlider_02.jpg?cmsp_timestamp=20220920115317" className="pc" alt="画像"  />
                  <img src="https://img07.shop-pro.jp/PA01461/818/etc/topSlider_02_sp.jpg?cmsp_timestamp=20220920115317" className="sp" alt="画像"  />
                </div>
                </SwiperSlide>
              <SwiperSlide className="common__head__kv__img_">
                <div className="img">
                  <img src="https://img07.shop-pro.jp/PA01461/818/etc/topSlider_03.jpg?cmsp_timestamp=20220920115317" className="pc" alt="画像"  />
                  <img src="https://img07.shop-pro.jp/PA01461/818/etc/topSlider_03_sp.jpg?cmsp_timestamp=20220920115317" className="sp" alt="画像"  />
                </div>
                </SwiperSlide>

            </Swiper>
            <img src="https://file003.shop-pro.jp/PA01461/818/svg/logo.svg" className="common__head__kv__logo pc" alt="画像"  />
          </div>
          <a className="common__head__sidelink sidelink__right font-minervamodern" href="https://www.instagram.com/gontrancherrierjp/" target="_blank" rel="noreferrer">FOLLOW US ON INSTAGRAM</a>

          <Swiper className="top__head__news" {...params2}>
            <SwiperSlide>
                  2022/09/28
                    <a href="https://cms.mkp.jp/pdf/news/detail/2603_77529883.pdf">新宿店オープンのお知らせ</a>
            </SwiperSlide>
            <SwiperSlide>
                  2022/09/20
                  ホームページをリニューアルしました。
            </SwiperSlide>
          </Swiper>
        </section>
        <section id="top__about" className="top__about ttl_anim act" ref={topAboutRef}>
          <h3 className="top__about__ttl sp font-minervamodern">
            <span>About</span>
            <span>Gontran</span>
            <span>Cherrier</span>
          </h3>
          <div id="top__about__img" className="top__about__img">
            <div className="top__about__img__wrap ttl_anim_img">
              <img src="https://img07.shop-pro.jp/PA01461/818/etc/top_about01.jpg?cmsp_timestamp=20220920115317" className="pc" width="535" alt="画像"  />
              <img src="https://img07.shop-pro.jp/PA01461/818/etc/top_about01_sp.jpg?cmsp_timestamp=20220920115317" className="sp" alt="画像"  />
            </div>
            <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_about.svg" className="top__about__img__bgtxt" alt="画像"  />
          </div>
          <div id="top__about__txt" className="top__about__txt">
            <h3 className="top__about__txt__h3 font-minervamodern ttl_anim_h2">
              <span className="ttl_anim_h2_span">
                About<br />
                Gontran Cherrier
              </span>
            </h3>
            <p className="top__about__txt__p ttl_anim_p">
              ゴントラン・シェリエ氏は、フランス・ノルマンディー出身の4代目ブーランジェです。同氏は、Ferrandi Culinary schoolとLes Grands Moulins de Parisという二つの著名な調理学校を卒業後、Alain Passard 氏の手掛ける3つ星レストラン L’ArpegeやAlain Senderens氏のLucas Cartonで勤めたのち、2010年に自身のブーランジェリーをフランス・パリ（モンマルトル）にオープンさせました。その人気はフランスにとどまらずアジア・北米・中東でも約60店舗を展開するまでに至り、各国の人々に親しまれています。
            </p>
            <a href="/?mode=f1" className="btn_bk font-minervamodern"><span>MORE DETAIL</span></a>
          </div>
        </section>
        <div className="top__wrap_online_news ">
          <section className="top__store ttl_anim act">
            <div className="top__store__wrap">
              <h2 className="top__store__h2 font-minervamodern ttl_anim_h2">
                <span className="ttl_anim_h2_span">
                  Enjoy our<br />Store & Café
                </span>
              </h2>
              <p className="top__store__p ttl_anim_p">
                最新フレンチカルチャーやゴントランの少年期からインスパイアされた独創的なメニューは、<br />
                ブレックファーストからディナータイムまで⽤意しており、店内やテラスでは常に焼きたてのパンの香りが楽しめます。
              </p>
              <Swiper className="top__store__slide" {...params3}>
                  <SwiperSlide className="swiper-slide">
                    <p className="top__store__slide__ttl font-minervamodern">AOYAMA STORE, café and terrace</p>
                    <div className="img">
                      <a href="/?mode=f4#aoyama">
                      <img src="https://img07.shop-pro.jp/PA01461/818/etc/store_aoyama.jpg?cmsp_timestamp=20220920115317" width="170" alt="画像"  />
                      </a>
                    </div>
                    <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_store_aoyama.svg" className="top__store__slide__bgtxt" width="225" alt="画像"  />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <p className="top__store__slide__ttl font-minervamodern">Shinjuku STORE & pickup</p>
                    <div className="img">
                      <a href="/?mode=f4#shinjuku">
                      <img src="https://img07.shop-pro.jp/PA01461/818/etc/store_shinjyuku1018_v2.jpg?cmsp_timestamp=20221018184522" width="170" alt="画像"  />
                      </a>
                    </div>
                    <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_store_shinjuku.svg" className="top__store__slide__bgtxt" width="225" alt="画像"  />
                  </SwiperSlide>
                  
                {/*<div className="top__store__slide__btns">
                  <div className="swiper-button-prev btnprev__store">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 9" style="enable-background:new 0 0 36.1 9;" xmlSpace="preserve"><path d="M9,0l0.7,0.7L2.4,8h33.7v1H0L9,0z"/></svg>
                  </div>
                  <div className="swiper-button-next btnnext__store">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 9" style="enable-background:new 0 0 36.1 9;" xmlSpace="preserve"><path d="M36.1,9H0V8h33.7l-7.3-7.3L27.1,0L36.1,9z"/></svg>
                  </div>
                </div>*/}
              </Swiper>
              <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_store.svg" width="825" className="top__store__bgtxt" alt="画像"  />
            </div>
          </section>	
          <section className="top__newslist ttl_anim act">
          <div className="top__newslist__wrap">
              <h2 className="top__newslist__h2 font-minervamodern ttl_anim_h2">
                <span className="ttl_anim_h2_span">
                  News &amp; Event
                </span>
              </h2>
              <div className="top__newslist__ul ttl_anim_img">
                <div className="top__newslist__li">
                  <a href="https://cms.mkp.jp/pdf/news/detail/2603_77529883.pdf">
                    <p className="top__newslist__li__date font-minervamodern">2022/09/28</p>
                    <p className="top__newslist__li__ttl">新宿店オープンのお知らせ</p>	
                  </a>
                </div>
                <div className="top__newslist__li">
                    <p className="top__newslist__li__date font-minervamodern">2022/09/20</p>
                    <p className="top__newslist__li__ttl">ホームページをリニューアルしました。</p>
                </div>
              </div>       
          </div>
          </section>
          <section className="top__instagram ttl_anim act">
              <h2 className="top__instagram__h2 font-minervamodern ttl_anim_h2">
                <span className="ttl_anim_h2_span">
                  Instagram
                </span>
              </h2>
              <div className="">
                <ul className="insta_list top__instagram__ul ">
                  {/* <li className="top__instagram__li"><a href="https://www.instagram.com/reel/CkP1eYNA61A/" target="_blank" rel="noreferrer"><img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/312785036_1401511007044593_4040544817137242914_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=A6T-H7SI-FwAX_5MYIr&amp;_nc_ht=scontent-nrt1-1.cdninstagram.com&amp;edm=AL-3X8kEAAAA&amp;oh=00_AfAjmAR2eQl1kz4we1PN5K_8L8aN80y-qdnqJQ0wc6hAvA&amp;oe=63695146" alt="画像" /></a></li>
                  <li className="top__instagram__li"><a href="https://www.instagram.com/p/CkNvapmL6xT/" target="_blank" rel="noreferrer"><img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/312814755_1267457737373827_3896374972202093947_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=A1qJyAhCMZsAX-30Kbo&amp;_nc_ht=scontent-nrt1-1.cdninstagram.com&amp;edm=AL-3X8kEAAAA&amp;oh=00_AfBAfNq_aJYjdNfnR44NDuyZ7DTqf8s85VRJ_y03vOKsCg&amp;oe=636A99CF" alt="画像" /></a></li>
                  <li className="top__instagram__li"><a href="https://www.instagram.com/reel/CkFBCkGJ8Q4/" target="_blank" rel="noreferrer"><img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/306544235_3342888585981656_6730518387315700015_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=uQNYtpL4NFsAX9sIbqx&amp;_nc_oc=AQk0Uv7ZF8fgmfX3d6fFFFbQjrcwpKEEbpFmA01laRQC-xMlscWjT2vAcS7akvZrJb4&amp;_nc_ht=scontent-nrt1-1.cdninstagram.com&amp;edm=AL-3X8kEAAAA&amp;oh=00_AfDPmO44McVpQTLmiiusdaBPg8OMlmV6wJv-Z9qn1E-j1g&amp;oe=63693C92" alt="画像" /></a></li>
                  <li className="top__instagram__li"><a href="https://www.instagram.com/p/Cj-So95PIH7/" target="_blank" rel="noreferrer"><img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/312074347_1174437486616309_8025921210695619612_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=nm-fyWy5yFQAX-h8BHF&amp;_nc_ht=scontent-nrt1-1.cdninstagram.com&amp;edm=AL-3X8kEAAAA&amp;oh=00_AfDv-56hdV1pYvdZR-usgGwjr22gNDZtPzKYg2LTyPEgYA&amp;oe=6368F91B" alt="画像" /></a></li> */}
                </ul>
              </div>
              <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_follow_us.svg" className="top__instagram__bgtxt" alt="画像"  />
            </section>
        </div>

        </motion.div>
    </>
  );
};

export default Home;