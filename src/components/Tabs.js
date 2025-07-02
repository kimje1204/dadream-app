import React, { useState } from 'react';
import '../css/common.css';
import WelfareQnA from '../components/WelfareQnA'; 
import OxygenQnA from '../components/OxygenQnA';
import WheelchairQnA from '../components/WheelchairQnA';
import CertQnA from './CertQnA';


function Tabs({ tabs }) {

const [activeTab, setActiveTab] = useState('welfare');

  return (
    <>
        {/* 탭 메뉴 영역 */}
          <div className="tabs">
        <div
          className={`tab ${activeTab === 'welfare' ? 'active' : ''}`}
          onClick={() => setActiveTab('welfare')}
        >
          복지용구 QnA
        </div>
        <div
          className={`tab ${activeTab === 'oxygen' ? 'active' : ''}`}
          onClick={() => setActiveTab('oxygen')}
        >
          산소발생기 QnA
        </div>
        <div
          className={`tab ${activeTab === 'wheelchair' ? 'active' : ''}`}
          onClick={() => setActiveTab('wheelchair')}
        >
          휠체어대여 QnA
        </div>
        <div
          className={`tab ${activeTab === 'cert' ? 'active' : ''}`}
          onClick={() => setActiveTab('cert')}
        >
          자격증취득 QnA
        </div>
      </div>

      {/* 탭별 콘텐츠 영역*/}
        {activeTab === 'welfare' && <WelfareQnA />}
        {activeTab === 'oxygen' && <OxygenQnA/>}
        {activeTab === 'wheelchair' && <WheelchairQnA/>}
        {activeTab === 'cert' && <CertQnA/>}
 
    </>
  );
}

export default Tabs;