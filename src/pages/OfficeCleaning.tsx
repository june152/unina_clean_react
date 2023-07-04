import React from 'react';
import SEO from '../common/SEO';

import '../styles/common.css'
import '../styles/style.css'
import CleaningTitle from '../common/CleaningTitle';
import SideLeft from '../common/SideLeft';
import OfficeImg01 from '../assets/images/office_cleaning/index1/image_01.png'
import OfficeImg02 from '../assets/images/office_cleaning/index1/image_02.png'
import CheckArticle from '../common/CheckArticle';

const OfficeCleaning = () => {
    return (
        <React.Fragment>
            <SEO />
            <main className="main home-cleaning index2">
                <CleaningTitle
                    title='사무실/상가청소'
                />
                <section className="section">
                    <div className="container">
                        <div className="flex sidebar-container">
                            <SideLeft
                                category='office'
                            />
                            <div className="single-right-main-wrap">
                                <div className="single-right-main">
                                    <article className="part1">
                                        <h2 className="left-section-title">사무실/상가청소</h2>
                                        <div className="vertical-top flex">
                                            <div className="bg" style={{ backgroundImage: `url(${OfficeImg01})` }}></div>
                                            <div className="right">
                                                <h3>사무실/상가청소가 필요한 이유</h3>
                                                <ul>
                                                    <li>사무실/상가 청소는 쾌적한 공간을 제공하여 직원, 고객 모두의 기분을 좋게 합니다.</li>
                                                    <li>쾌적한 사무실 환경은 기업들의 품위를 높여주며 업무실적을 크게 향상시키는데 한몫 합니다.</li>
                                                    <li>전문청소장비와 전문청소약품을 사용하여 오염제거가 힘든 청소를 보다 효과적으로 할 수 있습니다.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <hr />
                                    <article className="part2">
                                        <h2 className="left-section-title">사무실/상가청소 범위</h2>
                                        <div className="top"><img src={OfficeImg02} alt="사무실/상가청소 범위"/></div>
                                        <div className="bottom">
                                            <div className="vertical">
                                                <h3>건물 내부</h3>
                                                <ul>
                                                    <li>- 건물 시설내∙외부 및 부속 시설물일체</li>
                                                </ul>
                                            </div>
                                            <div className="vertical">
                                                <h3>각 사무실</h3>
                                                <ul>
                                                    <li>- 화장실/사무실/휴게실/탕비실/대기실 등</li>
                                                    <li>- 사무실바닥, 계단, 복도, 벽면, 의자청소</li>
                                                </ul>
                                            </div>
                                            <div className="vertical">
                                                <h3>문/창틀</h3>
                                                <ul>
                                                    <li>- 현관, 출입문, 창문 창틀, 전등, 액자, 조명기구, 거미줄 제거</li>
                                                </ul>
                                            </div>
                                            <div className="vertical">
                                                <h3>세척</h3>
                                                <ul>
                                                    <li>- 고압세척, 바닥왁스</li>
                                                </ul>
                                            </div>
                                            <div className="vertical notice">
                                                <ul>
                                                    <li>- 대량의 보양지나 문틀,창틀,스티커가 과도한 경우 비용추가 됩니다.</li>
                                                    <li>- 상가/사무실청소는 방문견적(무료)이 원칙입니다.</li>
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

export default OfficeCleaning;