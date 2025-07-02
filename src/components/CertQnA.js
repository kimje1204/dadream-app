import React, { useState } from 'react';
import '../css/common.css';

function CertQnA() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const items = [
    {
      sectionTitle: '1. 동행관리사 (병원동행관리사)',
      sectionSub: '병원 진료 동행을 지원하는 역할입니다.',
      questions: [
        {
          q: '동행관리사란 무엇인가요?',
          a: '노인 및 장애인을 대상으로 병원 진료 시 이동, 예약 확인, 진료 동행, 수납 등을 도와주는 돌봄 서비스입니다.',
        },
        {
          q: '국가자격증인가요, 민간자격증인가요?',
          a: '국가자격증은 아니고, 한국직업능력연구원에 등록된 다양한 민간자격과정이 존재합니다.',
        },
        {
          q: '동행관리사 자격증 취득 조건과 과정은 어떻게 되나요?',
          a: '대부분 만 19세 이상이면 가능하며, 온라인 강의 수료(보통 4주 이내)와 온라인 시험 통과 후 자격증이 발급됩니다. 발급비용은 약 8~10만 원입니다.',
        },
        {
          q: '동행관리사 취업 시 필수 자격인가요?',
          a: '필수는 아니지만, 취업 시 유리하며 요양보호사나 사회복지사 등 국가자격증 소지자를 우대합니다.',
        },
      ],
    },
    {
      sectionTitle: '2. 생활지원사 관련 Q&A',
      sectionSub: '노인을 위한 맞춤형 돌봄서비스를 제공하는 역할입니다.',
      questions: [
        {
          q: '생활지원사는 어떤 일을 하나요?',
          a: '안부 확인, 사회참여 지원, 가사 및 외출 지원 등 취약 노인을 위한 돌봄서비스를 제공합니다.',
        },
        {
          q: '국가자격증이 필요한 직종인가요?',
          a: '별도 국가자격증이 필요한 직무는 아니며, 민간자격(예: 시니어민원생활지원사 등)은 존재하지만 필수는 아닙니다.',
        },
        {
          q: '생활지원사 채용 조건은? 필수 자격증이 있나요?',
          a: '학력과 나이 제한이 없는 경우가 많고, 요양보호사나 사회복지사 자격증 보유자를 우대합니다. 노인맞춤돌봄서비스 수행기관에서 모집합니다.',
        },
        {
          q: '생활지원사의 근무조건과 급여는 어떻게 되나요?',
          a: '주 5일, 하루 5시간(주 25시간) 근무가 일반적이며, 2024년 기준 급여는 약 128만 원입니다.',
        },
      ],
    },
  ];

  return (
    <div className="accordion-section active">
      <div className="tabti">
        <p>자격증취득 관련 Q&A</p>
      </div>

      {items.map((section, sectionIdx) => (
        <div key={sectionIdx}>
          <div className={`tabsubti ${sectionIdx === 1 ? 'tw' : ''}`}>
            <p>{section.sectionTitle}</p>
            <span>{section.sectionSub}</span>
          </div>
          {section.questions.map((item, idx) => {
            const currentIndex = `${sectionIdx}-${idx}`;
            return (
              <div
                key={currentIndex}
                className={`accordion-item ${
                  openIndex === currentIndex ? 'active' : ''
                }`}
              >
                <div
                  className="accordion-header"
                  onClick={() =>
                    toggleAccordion(currentIndex)
                  }
                >
                  <p>{item.q}</p>
                </div>
                <div className="accordion-content">{item.a}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default CertQnA;
