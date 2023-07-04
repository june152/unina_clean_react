import React from 'react';

import '../styles/common.css'
import '../styles/style.css'
import SEO from './SEO';

const CheckArticle = () => {
    return (
        <React.Fragment>
            <SEO />
            <article className="part3">
                <h2 className="left-section-title">체크사항</h2>
                 <ul>
                    <li>계약금 10% 선결제<br />
                    (청소 계약을 하게되면, 해당 날짜는 다른 계약을 하지 못하기에, 고객님의 신중한 선택을 부탁드립니다.)
                    </li>
                    <li>
                        청소가 완료되면, 고객님께서 검수 후 전액 결제하시면 됩니다. <br />
                        (무엇보다 고객님의 마음에 드는 것이 중요하다고 생각하기 때문에 고객님께서 직접 결과를 확인하시는 것을 권해드리고 있습니다. 단, 검수후 전액 결제 시 계약금은 제외됩니다.)
                    </li>
                    <li>
                        현장 도착시 시트지, 곰팡이의 정도가 심한 경우 추가요금이 발생할 수 있습니다.
                    </li>
                    <li>
                        모든 견적책정은 전용면적이 아니라, 공급면적 기준으로 진행합니다.
                    </li>
                    <li>
                        카드결제나 현금영수증 필요시 부가세 10%가 발생됩니다.
                    </li>
                </ul>
            </article>
        </React.Fragment>
    );
};

export default CheckArticle;