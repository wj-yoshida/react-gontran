import React,{ useState, useEffect, useRef } from 'react';

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

function InstagramList() {
  const InstagramListRef = useRef();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    /*
    fetch("https://graph.facebook.com/v5.0/17841421692100141?fields=name%2Cmedia.limit(4)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Ctimestamp%2Cthumbnail_url%2Cmedia_type%2Cusername%7D&access_token=EAAFoqmk5AR0BADYRqPWkfo8oVmkoqrjEwvZB7ANhqnZC1SmbYNkPmrOLABBskhrrjjbRUCqAxHji6fQpkyoFIf5Wwv39ucqH8ABaKmLpetPNMuMppZCeuCmE2eWroEZBayrpiLWLVLRzRruZA6T1rmEvJjm6ECWQArj0yWCWzZBZCf7YRF2mndZA1uJ2ZBHgCyGaZBVb9zFk4ErZBeAZAdJOuAidPFeD8d0U1fUpKSHYIkcR4AZDZD")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.media.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      */
  }, [InstagramListRef])
  return (
    <ul ref={InstagramListRef} className="insta_list top__instagram__ul ">
      {items.map(item => (
        <li className="top__instagram__li" key={item.id}>
          <a href={item.permalink} target="_blank">
            {item.media_type == "IMAGE" ? <img src={item.media_url} /> : <img src={item.thumbnail_url} />}
          </a>
        </li>
      ))}
    </ul>
  );
}

function TopAbout() {
  useEffect(() => {
      gsap.fromTo( 
        '#top__about__img',
        { opacity: 0 }, //from?????????
        {  //to?????????
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: '#top__about',
            start: 'top center', //????????????????????????????????????????????????????????????
            end: 'center center', //????????????????????????????????????????????????????????????
            scrub: true,
            
          },
        }
      )

      let topAboutTxt = gsap.timeline({
        scrollTrigger: {
          trigger: "#top__about",
          start: '25% center', //????????????????????????????????????????????????????????????
          end: '75% center', //????????????????????????????????????????????????????????????
          scrub: 1,
          //markers: true,
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
    <section id="top__about" className="top__about ttl_anim act">
      <h3 className="top__about__ttl sp font-minervamodern">
        <span>About</span>
        <span>Gontran</span>
        <span>Cherrier</span>
      </h3>
      <div id="top__about__img" className="top__about__img">
        <div className="top__about__img__wrap ttl_anim_img">
          <img src="https://img07.shop-pro.jp/PA01461/818/etc/top_about01.jpg?cmsp_timestamp=20220920115317" className="pc" width="535" />
          <img src="https://img07.shop-pro.jp/PA01461/818/etc/top_about01_sp.jpg?cmsp_timestamp=20220920115317" className="sp" />
        </div>
        <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_about.svg" className="top__about__img__bgtxt" />
      </div>
      <div id="top__about__txt" className="top__about__txt">
        <h3 className="top__about__txt__h3 font-minervamodern ttl_anim_h2">
          <span className="ttl_anim_h2_span">
            About<br />
            Gontran Cherrier
          </span>
        </h3>
        <p className="top__about__txt__p ttl_anim_p">
          ????????????????????????????????????????????????????????????????????????????????????4?????????????????????????????????????????????Ferrandi Culinary school???Les Grands Moulins de Paris??????????????????????????????????????????????????????Alain Passard ??????????????????3????????????????????? L???Arpege???Alain Senderens??????Lucas Carton?????????????????????2010?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????60????????????????????????????????????????????????????????????????????????????????????
        </p>
        <a href="/?mode=f1" className="btn_bk font-minervamodern"><span>MORE DETAIL</span></a>
      </div>
    </section>
  );
}

const Home = () => {


  return (
    <>
        <Head title="??????????????? ???????????? ????????????" />
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
                  <img src="https://img07.shop-pro.jp/PA01461/818/etc/topSlider_01.jpg?cmsp_timestamp=20220920115317" className="pc" />
                  <img src="https://img07.shop-pro.jp/PA01461/818/etc/topSlider_01_sp.jpg?cmsp_timestamp=20220920115317" className="sp" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="common__head__kv__img_">
                <div className="img">
                  <img src="https://img07.shop-pro.jp/PA01461/818/etc/topSlider_02.jpg?cmsp_timestamp=20220920115317" className="pc" />
                  <img src="https://img07.shop-pro.jp/PA01461/818/etc/topSlider_02_sp.jpg?cmsp_timestamp=20220920115317" className="sp" />
                </div>
                </SwiperSlide>
              <SwiperSlide className="common__head__kv__img_">
                <div className="img">
                  <img src="https://img07.shop-pro.jp/PA01461/818/etc/topSlider_03.jpg?cmsp_timestamp=20220920115317" className="pc" />
                  <img src="https://img07.shop-pro.jp/PA01461/818/etc/topSlider_03_sp.jpg?cmsp_timestamp=20220920115317" className="sp" />
                </div>
                </SwiperSlide>

            </Swiper>
            <img src="https://file003.shop-pro.jp/PA01461/818/svg/logo.svg" className="common__head__kv__logo pc" />
          </div>
          <a className="common__head__sidelink sidelink__right font-minervamodern" href="https://www.instagram.com/gontrancherrierjp/" target="_blank">FOLLOW US ON INSTAGRAM</a>

          <Swiper className="top__head__news" {...params2}>
            <SwiperSlide>
                  2022/09/28
                    <a href="https://cms.mkp.jp/pdf/news/detail/2603_77529883.pdf">????????????????????????????????????</a>
            </SwiperSlide>
            <SwiperSlide>
                  2022/09/20
                  ??????????????????????????????????????????????????????
            </SwiperSlide>
          </Swiper>
        </section>
        <TopAbout />

        <div className="top__wrap_online_news ">
          <section className="top__store ttl_anim act">
            <div className="top__store__wrap">
              <h2 className="top__store__h2 font-minervamodern ttl_anim_h2">
                <span className="ttl_anim_h2_span">
                  Enjoy our<br />Store & Caf??
                </span>
              </h2>
              <p className="top__store__p ttl_anim_p">
                ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br />
                ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              </p>
              <Swiper className="top__store__slide" {...params3}>
                  <SwiperSlide className="swiper-slide">
                    <p className="top__store__slide__ttl font-minervamodern">AOYAMA STORE, caf?? and terrace</p>
                    <div className="img">
                      <a href="/?mode=f4#aoyama">
                      <img src="https://img07.shop-pro.jp/PA01461/818/etc/store_aoyama.jpg?cmsp_timestamp=20220920115317" width="170" />
                      </a>
                    </div>
                    <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_store_aoyama.svg" className="top__store__slide__bgtxt" width="225" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <p className="top__store__slide__ttl font-minervamodern">Shinjuku STORE & pickup</p>
                    <div className="img">
                      <a href="/?mode=f4#shinjuku">
                      <img src="https://img07.shop-pro.jp/PA01461/818/etc/store_shinjyuku1018_v2.jpg?cmsp_timestamp=20221018184522" width="170" />
                      </a>
                    </div>
                    <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_store_shinjuku.svg" className="top__store__slide__bgtxt" width="225" />
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
              <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_store.svg" width="825" className="top__store__bgtxt" />
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
                    <p className="top__newslist__li__ttl">????????????????????????????????????</p>	
                  </a>
                </div>
                <div className="top__newslist__li">
                    <p className="top__newslist__li__date font-minervamodern">2022/09/20</p>
                    <p className="top__newslist__li__ttl">??????????????????????????????????????????????????????</p>
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
                <InstagramList />
              </div>
              <img src="https://file003.shop-pro.jp/PA01461/818/svg/txt_follow_us.svg" className="top__instagram__bgtxt" />
            </section>
        </div>

        </motion.div>
    </>
  );
};

export default Home;