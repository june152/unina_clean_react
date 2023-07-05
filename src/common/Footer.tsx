import React from 'react';
import {
  useNavigate,
} from "react-router-dom";
import '../styles/common.css'
import '../styles/style.css'
import FooterLogo from "../assets/images/logo_footer.png"

const Footer = () => {
    const navigate = useNavigate()

    return (
    <footer className="footer">
        <div className="footer-wrap">
            <div className="container flex">
                <a href="#" onClick={() => navigate("/unina_clean_react/home")} className="footer-logo"><img src={FooterLogo} alt="유니나 청소 로고" /></a>
                <address>
                    <p>법인명(상호) : 유니나 청소 <em></em> 대표자 (성명) : 박동철 <em></em> 사업자 등록번호 안내 : 883-04-01528 <em></em> 통신판매업 신고 신고준비중</p>
                    <p>전화 : <a href="tel:010-2234-8362">010-2234-8362</a> / <a href="tel:010-2686-8362">010-2686-8362</a> <em></em> 주소 : 광주광역시 서구 화정로 105</p>
                    <p>개인정보보호책임자 : 박동철</p>
                    <p>Copyright © 2021 유니나 청소. All rights reserved.</p>
                </address>
            </div>
        </div>
    </footer>
    );
};

export default Footer;