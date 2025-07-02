import React, { useState } from 'react';
import '../css/common.css';
import OxygenGenerator from '../components/OxygenGenerator';
import Portable from '../components/Portable';
import Procedure from '../components/Procedure';

function OxyTab() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['산소발생기', '휴대용 산소발생기', '임대절차'];

  return (
    <>
      {/* 탭 버튼 */}
      <div className="oxytab">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`oxytab-item ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 탭 콘텐츠 */}
      <div className={`oxytab-panel ${activeTab === 0 ? 'active' : ''}`}>
        {activeTab === 0 && <OxygenGenerator />}
      </div>
       <div className={`oxytab-panel ${activeTab === 1 ? 'active' : ''}`}>
        {activeTab === 1 && <Portable />}
      </div>
       <div className={`oxytab-panel ${activeTab === 2 ? 'active' : ''}`}>
        {activeTab === 2 && <Procedure />}
      </div>  
    </>
  );
}

export default OxyTab;
