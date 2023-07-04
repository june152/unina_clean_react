import React from 'react';
import SEO from '../common/SEO';
import {
  useNavigate,
} from "react-router-dom";
import '../styles/common.css'
import '../styles/style.css'
import SliderImg1 from '../assets/images/slider/slider_01.jpeg'
import SliderImg2 from '../assets/images/slider/slider_02.jpg'
import CallIcon from '../assets/images/icon/icon_call.png'
import Slider from "react-slick";
import MainImg01 from "../assets/images/main/main_01.png"
import MainImg02 from "../assets/images/main/main_02.png"
import MainImg03 from "../assets/images/main/main_03.png"
import MainImg04 from "../assets/images/main/main_04.png"
import MainImg05 from "../assets/images/main/main_05.png"
import MainImg06 from "../assets/images/main/main_06.png"
import MainImg07 from "../assets/images/main/main_07.png"
import MainImg08 from "../assets/images/main/main_08.png"

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <SEO />
            <main className="main">
                <Slider
                    speed={500}
                    autoplay={true}
                    autoplaySpeed={5000}
                    slidesToShow={1}
                    slidesToScroll={1}
                    pauseOnHover={false}
                    arrows={false}
                >
                    <div className="slider">
                        <div className="bg" style={{backgroundImage: `url(${SliderImg1})`}}>
                            <div className="slider-container">
                                <div>
                                    <h2>건강한 공간을 선물하는 업체,<br /><span>유니나 청소</span></h2>
                                    <a href="tel:010-2234-8362"><img src={CallIcon} alt="유니나 청소 전화"/> 010-2234-8362</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="bg" style={{backgroundImage: `url(${SliderImg2})`}}>
                            <div className="slider-container">
                                <div>
                                    <h2>건강한 공간을 선물하는 업체,<br /><span>유니나 청소</span></h2>
                                    <a href="tel:010-2234-8362"><img src={CallIcon} alt="유니나 청소 전화"/> 010-2234-8362</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>

                <section className="section about-us">
                    <div className="container text-center">
                        <h3 className="section-title-sm">About Us</h3>
                        <h2 className="section-title">대표의 말</h2>
                        <div className="flex">
                            <div className="left"><img src={MainImg01} alt="유니나 청소" /></div>
                            <div className="right">
                                <h4>안녕하세요. 유니나 청소입니다.</h4>
                                <p>저희 유니나 청소를 찾아주셔서 감사합니다. <br />
                                청소는 머무는 공간의 위생을 위해서 진행합니다. <br />
                                이 위생은 건강과도 관련이 있지요. <br />
                                어느날 문득, 위생적이지 못한 환경에 지속적으로 머무는 것은 건강을 해칠 수 있는 원인이 될 수 있다는 생각을 하게 되었습니다. <br />
                                모든 이의 건강은 중요하기 때문에 유니나 청소에서 엄마의 마음으로 건강한 공간을 선물해드리고 싶습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section services bg-gray">
                    <div className="container text-center">
                        <h3 className="section-title-sm">Our Services</h3>
                        <h2 className="section-title">유니나 서비스 품목</h2>
                        <ul className="flex">
                            <li>
                                <a href="#" onClick={() => navigate("/homecleaning")}>
                                    <div className="image-wrap">
                                        <div className="bg" style={{backgroundImage: `url(${MainImg05})`}}></div>
                                        <span className="button"><i aria-hidden="true"></i></span>
                                    </div>
                                    <h2>입주청소</h2>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => navigate("/homecleaning/2")}>
                                    <div className="image-wrap">
                                        <div className="bg" style={{backgroundImage: `url(${MainImg06})`}}></div>
                                        <span className="button"><i aria-hidden="true"></i></span>
                                    </div>
                                    <h2>이사청소</h2>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => navigate("/homecleaning/3")}>
                                    <div className="image-wrap">
                                        <div className="bg" style={{backgroundImage: `url(${MainImg07})`}}></div>
                                        <span className="button"><i aria-hidden="true"></i></span>
                                    </div>
                                    <h2>거주청소</h2>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => navigate("/officecleaning")}>
                                    <div className="image-wrap">
                                        <div className="bg" style={{backgroundImage: `url(${MainImg08})`}}></div>
                                        <span className="button"><i aria-hidden="true"></i></span>
                                    </div>
                                    <h2>사무실/상가 청소</h2>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="section features">
                    <div className="container text-center">
                        <h3 className="section-title-sm">Features</h3>
                        <h2 className="section-title">유니나를 선택하면 좋은 이유</h2>
                        <ul className="flex">
                            <li>
                                <div className="image-wrap"><img src={MainImg02} alt="작업" /></div>
                                <h3>책임감 있는 작업</h3>
                                <p>인건비 절약을 이유로 외국인 노동자를 이용하는 곳이 있습니다. 하지만 유니나 청소 업체에서는 외국인 노동자를 이용하지 않습니다. 
                                    대표가 직접 현장에 방문하여 작업을 진행합니다. 그렇기에 소통이 활발하므로 더욱 신뢰도가 높습니다.
                                </p>
                            </li>
                            <li>
                                <div className="image-wrap"><img src={MainImg03} alt="비용" /></div>
                                <h3>부담없는 비용</h3>
                                <p>부담스러운 비용으로 인해 선뜻 청소의뢰를 맡기기가 쉽지 않은 경우가 있습니다. 그런 부담을 조금이나마 덜어드리고자하여 비교적 
                                    저렴한 금액대로 견적을 책정해드리고 있습니다.
                                </p>
                            </li>
                            <li>
                                <div className="image-wrap"><img src={MainImg04} alt="서비스" /></div>
                                <h3>피톤치드 서비스</h3>
                                <p>건강을 유지하는데에 있어 면역력은 굉장히 중요합니다. 저희는 면역력을 향상시켜주고, 피부질환 개선, 중추신경계 안정에 효능이 있는 
                                    피톤치드 서비스를 해드리고 있습니다.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
};

export default HomePage;