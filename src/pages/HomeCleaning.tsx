import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../common/SEO';
import HomeImg01 from "../assets/images/home_cleaning/index1/image_01.png"
import HomeImg02 from "../assets/images/home_cleaning/index2/image_01.png"
import HomeImg03 from "../assets/images/home_cleaning/index3/image_01.png"
import HomeFloorImg from "../assets/images/home_cleaning/index1/floor_plant.png"
import CleaningTitle from '../common/CleaningTitle';
import SideLeft from '../common/SideLeft';

import '../styles/common.css'
import '../styles/style.css'
import CheckArticle from '../common/CheckArticle';

const HomeCleaning = () => {
    const { page } = useParams()
    //타이틀
    const [pageTitle, setPageTitle] = useState("")
    //이미지
    const [contentImg, setContentImg] = useState("")
    useEffect(() => {
        if (Number(page) === 1) {   //입주청소
            setPageTitle("입주청소")
            setContentImg(HomeImg01)
        } else if (Number(page) === 2) {    //이사청소
            setPageTitle("이사청소")
            setContentImg(HomeImg02)
        } else {    //거주청소
            setPageTitle("거주청소")
            setContentImg(HomeImg03)
        }
    }, [page])

    return (
        <React.Fragment>
            <SEO />
            <main className={`main home-cleaning ${Number(page) === 1 ? "" : Number(page) === 2 ? "index2" : "index3"}`}>
                <CleaningTitle
                    title={pageTitle}
                />
                <section className="section">
                    <div className="container">
                        <div className="flex sidebar-container">
                            <SideLeft
                                category='home'
                                page={Number(page)}
                            />
                            <div className="single-right-main-wrap">
                                <div className="single-right-main">
                                    <Part_01 title={pageTitle} img={contentImg} page={Number(page)} />
                                    <hr />
                                    <article className="part2">
                                        <h2 className="left-section-title">입주/이사청소 범위</h2>
                                        <div className="top"><img src={HomeFloorImg} alt="입주/이사청소 범위"/></div>
                                        <div className="bottom">
                                            <div className="vertical">
                                                <h3>거실</h3>
                                                <ul>
                                                    <li>- 천장, 벽, 바닥, 전등커버, 몰딩, 수납장</li>
                                                </ul>
                                            </div>
                                            <div className="vertical">
                                                <h3>주방</h3>
                                                <ul>
                                                    <li>- 싱크대 내,외부, 가스레인지, 렌즈후드, 수납장</li>
                                                </ul>
                                            </div>
                                            <div className="vertical">
                                                <h3>욕실</h3>
                                                <ul>
                                                    <li>- 천장, 벽, 바닥, 거울, 배수구, 변기, 세면대, 환풍기, 수납장</li>
                                                </ul>
                                            </div>
                                            <div className="vertical">
                                                <h3>현관</h3>
                                                <ul>
                                                    <li>- 신발장, 현관문, 바닥</li>
                                                </ul>
                                            </div>
                                            <div className="vertical">
                                                <h3>방</h3>
                                                <ul>
                                                    <li>- 천장, 벽, 바닥, 붙박이장, 전등커버, 몰딩, 걸레받이, 콘센트</li>
                                                </ul>
                                            </div>
                                            <div className="vertical">
                                                <h3>창/샤시</h3>
                                                <ul>
                                                    <li>- 내부, 샤시, 방충망, 창틀</li>
                                                </ul>
                                            </div>
                                            <div className="vertical">
                                                <h3>다용도/베란다</h3>
                                                <ul>
                                                    <li>- 천장, 벽, 바닥, 붙박이장, 전등커버, 몰딩, 걸레받이, 콘센트, 창문, 샤시, 창틀, 방충망, 장식장, 붙박이장</li>
                                                </ul>
                                            </div>
                                            <div className="vertical">
                                                <h3>기타</h3>
                                                <ul>
                                                    <li>- 스팀 살균 청소</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <hr />
                                    <CheckArticle />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
};

const Part_01 = ({title, img, page} : {title: string, img: string, page: number}) => {
    return (
        <React.Fragment>
            <article className="part1">
                <h2 className="left-section-title">{title}</h2>
                <div className="vertical-top flex">
                    <div className="bg" style={{ backgroundImage: `url(${img})` }}></div>
                    <div className="right">
                        <h3>{title}가 필요한 이유</h3>
                        {page === 1 ?
                            <ul>
                                <li>새로 지어진 아파트, 빌라와 같은 곳을 청소하는 것입니다.</li>
                                <li>새로 지어진 건물이므로 깨끗해 보이기는 하겠지만, 공기 중에는 미세먼지, 오염물질, 공사시 발생한 톱밥 등과 같은 이물질들이 남아있기에 입주청소를 통해 쾌적한 환경을 만들어야 합니다.</li>
                            </ul>
                            :
                            page === 2 ?
                            <ul>
                                <li>사람이 머물렀던 곳에는 흔적이 있습니다. 전 거주자로 인해 생겨난 미세먼지, 찌든때, 곰팡이 등과 같은 부분을 제거하고 쾌적한 공간에서 새로운 시작을 할 수 있도록 도와드리는 것이 이사청소입니다.</li>
                                <li>당장 보이는 곳은 청소하기가 쉽지만, 전문가를 통해 더욱 세심한 진행이 필요합니다.</li>
                            </ul>
                            :
                            <ul>
                                <li>바쁜 일상생활로 인해 집안 구석구석 신경을 쓰지 못하는 경우가 있을 것입니다. 이 때, 고객님을 대신하여 곰팡이제거, 창문틀청소 등등 고객님께서 신경쓰시지 못하거나 하기 아려운 부분들을 전문가의 손길로 쾌적한 환경을 만들어드리는 것이 거주청소입니다.</li>
                            </ul>
                        }
                    </div>
                </div>
            </article>
        </React.Fragment>
        
    )
}

export default HomeCleaning;