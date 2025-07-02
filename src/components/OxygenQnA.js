import React, { useState } from 'react';
import '../css/common.css';

function OxygenQnA() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const items = [
    {
      question: '산소발생기 지원은 누가 받을 수 있나요?',
      answer: '국민건강보험 가입자 중 산소치료처방전을 발급받은 분이 대상입니다. 만성 호흡기 질환으로 지속적인 산소치료가 필요한 분들이 해당돼요.',
    },
    {
      question: '산소치료처방전은 어떻게 발급받나요?',
      answer: '호흡기 전문의가 있는 병원에서 산소포화도 검사 후 산소치료가 필요하다고 판단되면 발급됩니다. 처방전에는 산소 유량, 사용 시간 등이 명시됩니다.',
    },
    {
      question: '산소발생기는 구입인가요, 대여인가요? 본인부담금은 얼마인가요?',
      answer: '공단 지원사업은 산소발생기 대여를 지원합니다. 가정용 산소발생기는 월임대료 12만원 중 자부담 12,000원만 발생됩니다. 휴대용 산소발생기는 월임대료 20만원 중 자부담 20,000원만 발생됩니다. 의료수급자나 공단 차상위 계층은 자부담이 없습니다.',
    },
    {
      question: '산소발생기 대여 절차는 어떻게 되나요?',
      answer: '병원에서 산소치료처방전을 받은 후 공단에 등록합니다. 그 다음 공단에 등록된 공급업체를 선택해 계약하고, 업체에서 자택에 설치 및 사용 교육을 해줍니다.',
    },
    {
      question: '산소발생기 대여 기간은 어떻게 되며, 재처방도 가능한가요?',
      answer: '처방전 유효기간(최대 1년) 동안 대여 가능합니다. 계속 사용하려면 만료 전 재진료 후 새로운 처방전을 받아 공단에 재등록해야 해요.',
    },
    {
      question: '산소발생기 사용 중 고장이 나면 어떻게 해야 하나요?',
      answer: '대여 계약을 맺은 공급업체에 연락해 A/S를 요청하면 됩니다. 공급업체는 수리 또는 대체 장비 제공 의무가 있습니다.',
    },
  ];

  return (
    <div className="accordion-section active">
      <div className="tabti">
        <p>산소발생기 관련 Q&A</p>
      </div>

      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${openIndex === index ? 'active' : ''}`}
        >
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <p>{item.question}</p>
          </div>
          <div className="accordion-content">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

export default OxygenQnA;
