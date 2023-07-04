import React, { useEffect, useState } from 'react';
import HomeTitleImg from "../assets/images/home_cleaning/index1/title_image.png"
import OfficeTitleImg from "../assets/images/office_cleaning/index1/title_image.png"
import SEO from './SEO';

import '../styles/common.css'
import '../styles/style.css'

const CleaningTitle = ({ title }: { title: string }) => {
    const [titleImg, setTitleImg] = useState(HomeTitleImg)
    useEffect(() => {
        if (title === "사무실/상가청소") {
            setTitleImg(OfficeTitleImg)
        }
    }, [])
    
    return (
        <React.Fragment>
            <SEO />
            <div className="title-image__wrap bg" style={{ backgroundImage: `url(${titleImg})` }}>
                <div className="container text-center">
                    <h2>{title}</h2>
                    <h3>차별화된 기술력과 노하우로 고객님께서 100% 만족할때까지</h3>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CleaningTitle;