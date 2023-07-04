import React from 'react';

const Modal = () => {
    return (
        <div className="modal" id="estimateModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-backdrop" onClick={() => {}}></div>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="myModalLabel">견적 문의</h4>
                </div>
                <div className="modal-body">
                    <h2 className="left-section-title">아래 연락처로 문의해주세요</h2>
                    <div className="estimate-call">
                        <a href="tel:010-2234-8362"><i className="fa fa-check" aria-hidden="true"></i> 010-2234-8362</a>
                        <a href="tel:010-2686-8362"><i className="fa fa-check" aria-hidden="true"></i> 010-2686-8362</a>
                    </div>
                    <hr />
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
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default close" data-dismiss="modal">닫기</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Modal;