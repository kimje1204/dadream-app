import React from 'react';
import '../css/common.css';
import ScrollTopButton from '../components/ScrollTopButton';
import Tabs from '../components/Tabs';
import bgptl from '../assets/images/bgptl.jpg';
import icoMainselOld from '../assets/images/ico_mainsel_old.png';
import icoMainselOxy from '../assets/images/ico_mainsel_oxy.png';
import icoMainselChair from '../assets/images/ico_mainsel_chair.png';
import icoMainselPaper from '../assets/images/ico_mainsel_paper.png';

import { Link } from 'react-router-dom';

function Main() {
  
 const warpPotalStyle = {
    backgroundImage: `url(${bgptl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div className="warp potal" style={warpPotalStyle}>
      <div className="contbox">
            <div className="inner">
                <div className="texmainbx">
                        <div className="subt">
                        <p>장기요양보험</p>
                        </div>
                        <div className="txtnbx">
                        <p className="title">다드림복지용구</p>
                        <span className="description">문의처 : 1533-5921</span>
                        <i>(다드림 지원 콜센터)</i>
                        </div>
                </div>
            </div>

                <div className="inner">
      <div className="selwp">
        <div className="box">
          <a href="https://bc1592.gagaon.com/" target="_blank" rel="noopener noreferrer">
            <div className="ico">
              <img src={icoMainselOld} alt="복지용구 아이콘" />
            </div>
            <p>복지용구</p>
            <span>장기요양등급을 받으신 어르신</span>
            <div className="mo">+</div>
          </a>
        </div>


        <div className="box">
            <a href="/Oxy" target="_blank" rel="noopener noreferrer">
            {/* <Link to="/Oxy"> */}
            <div className="ico">
              <img src={icoMainselOxy} target="_blank" alt="산소발생기 아이콘" />
            </div>
            <p>산소발생기</p>
            <span>산소치료 처방전을 받으신 분</span>
            <div className="mo">+</div>
            {/* </Link> */}
            </a>
        </div>

        <div className="box">
          <a href="/Teun" target="_blank" rel="noopener noreferrer">
          {/* <Link to="/Teun"> */}
            <div className="ico old">
              <img src={icoMainselChair} alt="휠체어대여 아이콘" />
            </div>
            <p>휠체어대여</p>
            <span>재활환자, 거동이 불편하신분</span>
            <div className="mo">+</div>
             {/* </Link> */}
          </a>
        </div>

        <div className="box">
          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="ico old">
              <img src={icoMainselPaper} alt="자격증 취득 아이콘" />
            </div>
            <p>자격증 취득</p>
            <span>생활지원사, 병원동행매니저</span>
            <div className="mo">+</div>
          </a>
        </div>
      </div>
    </div>

    <div className="inner">
        <div className="qnabx">
                <Tabs/>
        </div>
    </div>

      </div>
        <ScrollTopButton />
    </div>

  );
}

export default Main;