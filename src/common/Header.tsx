import React from 'react';
import {
  useNavigate,
} from "react-router-dom";
import '../styles/common.css'
import '../styles/style.css'
import Logo from '../assets/images/logo.png'

const Header = ({handleModalToggle} : {handleModalToggle : Function}) => {
    const navigate = useNavigate()

    return (
        <header className="header">
            <div className="header-wrap clearfix">
                <h1>
                    <a href="#" onClick={() => navigate("/home")}>
                        <img src={Logo} alt="유니나 청소 로고" />
                        <span className="hide">유니나 청소</span>
                    </a>
                </h1>

                <button type="button" className="navbar-toggle mobile" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">메뉴 보이기</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <nav id="navbar">
                    <button type="button" className="navbar-close" aria-expanded="false">
                        <span className="sr-only">메뉴 닫기</span>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <ul className="gnb clearfix">
                        <li><a href="#" onClick={() => navigate("/home")}>홈</a></li>
                        <li><a href="#" onClick={() => navigate("/homecleaning")}>홈클리닝</a>
                            <ul className="lnb">
                                <li><a href="#" onClick={() => navigate("/homecleaning/1")}>입주청소</a></li>
                                <li><a href="#" onClick={() => navigate("/homecleaning/2")}>이사청소</a></li>
                                <li><a href="#" onClick={() => navigate("/homecleaning/3")}>거주청소</a></li>
                            </ul>
                        </li>
                        <li><a href="#" onClick={() => navigate("/officecleaning")}>오피스 클리닝</a>
                            <ul className="lnb">
                                <li><a href="#" onClick={() => navigate("/officecleaning")}>사무실/상가 청소</a></li>
                            </ul>
                        </li>
                        <li><a onClick={() => handleModalToggle(true)}>견적 문의</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;