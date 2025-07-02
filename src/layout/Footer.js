import React from 'react';
import '../css/common.css';

function Footer(){
    return(
    <footer>
      <div className="inner">
        <div className="gobt">
          <ul>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">개인정보 보호방침</a></li>
          </ul>
        </div>

        <div className="fotinfo">
          <div className="info">
            <ul>
              <li>다드림 복지용구</li>
              <li>주소 : 대전 서구 가수원로 62. 1층 (우)35389 | 대표자: 이영미 | 개인정보보호책임자: 이영미</li>
              <li>사업자등록번호: 439-32-01585</li>
              <li>TEL. 1533-5921 | E-mail. bc1592@naver.com</li>
              <li>COPYRIGHT (C) DADREAM. All right reserved.</li>
            </ul>
          </div>

          <div className="ftlog">
            <p>DADREAM</p>
          </div>
        </div>
      </div>
    </footer>
    );
}


export default Footer; 