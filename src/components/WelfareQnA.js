import React, { useState } from 'react';
import '../css/common.css';

function WelfareQnA() {
  const [openIndex, setOpenIndex] = useState(null); // 열려 있는 항목 index 저장

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index)); // 열려 있으면 닫고, 아니면 염
  };

  const items = [
    {
      question: '복지용구는 누가 이용할 수 있나요?',
      answer: '노인장기요양보험 수급자 중 시설급여를 이용하지 않는 분들이 대상입니다.',
    },
    {
      question: '복지용구는 모두 구입해야 하나요, 아니면 대여도 가능한가요?',
      answer: '품목에 따라 구입 또는 대여가 가능합니다.',
    },
    {
      question: '복지용구의 연간 지원 한도액은 얼마이며, 본인부담금은 얼마나 되나요?',
      answer:
        '연간 160만 원 한도 내에서 지원됩니다. 본인부담금은 일반대상자 15%, 감경대상자 6% 또는 9%, 기초생활수급자는 본인부담금이 없습니다.',
    },
    {
      question: '복지용구 구입 또는 대여 절차는 어떻게 되나요?',
      answer:
        '품목별로 내구연한이 정해져 있어 해당 기간 내에서만 급여를 받을 수 있습니다. 예를 들어, 전동침대는 10년, 휠체어는 5년입니다. 내구연한이 지나면 재급여는 어렵습니다.',
    },
    {
      question: '복지용구 사용 중 병원 입원이나 요양원 입소 시 어떻게 되나요?',
      answer:
        '병원 입원 시 일부 품목은 혜택이 제한될 수 있고, 요양원 입소 시에는 대여 품목을 모두 반납해야 합니다.',
    },
  ];

  return (
    <div className="accordion-section active">
      <div className="tabti">
        <p>복지용구 관련 Q&A</p>
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

export default WelfareQnA;
