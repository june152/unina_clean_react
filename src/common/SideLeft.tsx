import React from 'react';
import {
  useNavigate,
} from "react-router-dom";
import CallIconW from "../assets/images/icon/icon_call_w.png"
import CardIcon from "../assets/images/icon/icon_card.png"

import '../styles/common.css'
import '../styles/style.css'

const SideLeft = ({ category, page }: { category: string, page?: number }) => {
    
    return (
        <div className="single-sidebar-wrap">
            <aside className="single-sidebar">
                {category === "home" ? 
                    <HomeSide page={page} />
                    :
                    <OfficeSide />
                }
            </aside>
        </div>
    );
};

const HomeSide = ({page} : {page?:number}) => {
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <article className="single-sidebar__top">
                <div className="service-sidebar-title">
                    <h3>홈클리닝</h3>
                </div>
                <ul className="service-pages">
                    <li id="index1" className={page === 1 ? 'active' : ""}><a href="#" onClick={() => navigate("/unina_clean_react/homecleaning")}>입주청소</a></li>
                    <li id="index2" className={page === 2 ? 'active' : ""}><a href="#" onClick={() => navigate("/unina_clean_react/homecleaning/2")}>이사청소</a></li>
                    <li id="index3" className={page === 3 ? 'active' : ""}><a href="#" onClick={() => navigate("/unina_clean_react/homecleaning/3")}>거주청소</a></li>
                </ul>
            </article>
            <SideBarBottom />            
        </React.Fragment>
    )
}

const OfficeSide = () => {
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <article className="single-sidebar__top">
                <div className="service-sidebar-title">
                    <h3>오피스 클리닝</h3>
                </div>
                <ul className="service-pages">
                    <li id="index1" className='active'><a href="#" onClick={() => navigate("/unina_clean_react/officecleaning")}>사무실/상가청소</a></li>
                </ul>
            </article>
            <SideBarBottom />
        </React.Fragment>
    )
}

const SideBarBottom = () => {
    return (
        <article className="single-sidebar__bottom">
            <ul>
                <li>
                    <div className="left text-center"><img src={CallIconW} alt="연락처"/></div>
                    <div className="right"><a href="tel:010-2234-8362">010-2234-8362</a><a href="tel:010-2686-8362">010-2686-8362</a></div>
                </li>
                <li>
                    <div className="left text-center"><img src={CardIcon} alt="결제방법"/></div>
                    <div className="right"><a>카드 /  현금 / 계좌이체</a></div>
                </li>
            </ul>
        </article>
    )
}

export default SideLeft;