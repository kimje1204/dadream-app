import React, { useState } from 'react';
import '../css/common.css';

function WheelchairQnA() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const items = [
    {
      question: '일반 휠체어는 어디서 대여할 수 있나요?',
      answer: '1533-5921로 연락주시면 다드림에서 직접 대여를 도와드립니다.',
    },
    {
      question: '휠체어 대여 시 필요한 서류나 조건이 있나요?',
      answer: '일반적으로 본인 확인을 위한 신분증이 필요합니다.',
    },
    {
      question: '휠체어 대여 기간은 얼마나 되며, 연장도 가능한가요?',
      answer: '보통 1개월 이내 3만원, 15일 이내 대여 시 2만원입니다.',
    },
    {
      question: '대여 가능한 휠체어 종류는 어떤 것이 있나요?',
      answer: '주로 수동 휠체어를 대여합니다. 다드림에서는 철저한 품질검사와 사후관리로 최상의 상태의 휠체어를 대여하고 있습니다.',
    },
    {
      question: '휠체어 대여 시 주의할 점이 있나요?',
      answer: '방문 전 전화로 휠체어 재고, 대여 조건, 필요 서류를 확인하고 사용자에게 적합한지 확인하는 것이 중요합니다. 반납 기한도 꼭 지켜주세요.',
    },
  ];

  return (
    <div className="accordion-section active">
      <div className="tabti">
        <p>휠체어 대여 관련 Q&A</p>
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
          <div className="accordion-content">{item.answer}</div>
        </div>
      ))}
    </div>
  );
}

export default WheelchairQnA;
