import React from 'react';
import '../css/common.css';
import img_doc01 from '../assets/images/img_doc01.png';
import img_doc02 from '../assets/images/img_doc02.png';

function Procedure(){
    return(

    <div className="oxytab-panel active">
      <div className="oxytbti">임대절차</div>

      {/* 단계 */}
      <div className="stepbx">
        {[
          { icon: '👩‍⚕️', title: '산소치료처방', desc: '전문의로부터 처방전을\n받습니다.' },
          { icon: '📋', title: '다드림 산소발생기 상담', desc: '전문담당자를 통한 상담진행.\n기타 서류 업무 대행' },
          { icon: '✍️', title: '산소발생기 설치/계약', desc: '제품설치 및 사용법 안내 및\n계약진행' },
          { icon: '🛠️', title: '사후관리', desc: '정기점검, 이전설치 등\n지속적인 관리' },
        ].map((step, i) => (
          <React.Fragment key={i}>
            <div className="step">
              <div className="step-icon">{step.icon}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc.split('\n').map((line, i) => <div key={i}>{line}</div>)}</div>
            </div>
            {i < 3 && <div className="arrow">▶</div>}
          </React.Fragment>
        ))}
      </div>

      {/* 처방전 양식 */}
      <div className="doclst">
        <div className="oxytbti mgt50">산소치료 처방전 양식</div>
        <div className="docbx">
          <img src={img_doc01} alt="산소치료 처방전 양식" />
        </div>
        <div className="btbx mgt50">
          <button className="btn_mid">양식 다운로드</button>
        </div>
      </div>

      {/* 상병 정보 */}
      <div className="doclst">
        <div className="oxytbti mgt50">산소치료 요양비 지급대상 상병</div>
        <div className="vidis">
          <table>
            <thead>
              <tr>
                <th>상병기호</th>
                <th>상병명</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['A150 ~ A169', '호흡기결핵'],
                ['B909', '호흡기 및 상세불명 결핵의 후유증'],
                ['C32 ~ C349', '기관지 및 폐의 악성 신생물'],
                ['C73', '갑상선의 악성신생물'],
                ['C78 ~ C783', '호흡기및소화기관, 폐의 이차성 악성 신생물'],
                ['D021 ~ D022', '기관의 제자리암종 등'],
                ['I21 ~ I25', '심근경색 관련 상병'],
                ['I26 ~ I289', '폐성심장병 및 폐순환의 질환'],
                ['I500 ~ I509', '울혈성 심부전 등'],
                ['J43 ~ J47', '폐기종 등'],
                ['J60 ~ J65', '진폐증 등'],
                ['J70', '호흡기형태 및 폐장애 등'],
                ['J80 ~ J99', '성인호흡곤란증후군 등'],
                ['P22 ~ P229', '신생아의 호흡곤란'],
                ['P270 ~ P289', '윌슨미키티증후군 등'],
                ['Q20 ~ Q349', '심방실 및 연결의 선천기형 등'],
                ['R060 ~ R068', '호흡곤란 등'],
                ['하단 참고*', '폐관련 상병'],
              ].map(([code, desc], i) => (
                <tr key={i}><td>{code}</td><td>{desc}</td></tr>
              ))}
            </tbody>
          </table>
          <div className="note">
            <strong>※ 참고코드:</strong><br />
            <span>
              A202, A403, A482, B012, B052, B206, B221, B250, B953, B960, B961, G001, J12, J15, J16, J17, J18, J100, J110, J120 ~ J129,
              J13, J14, J150 ~ 159, J160 ~ J168, J170 ~ J178, J180, J181, J182, J188, J189, J200, J67, J69, J678, J679, J680, J690, J691,
              J698, J8410, J851, MO01, MO010 ~ MO019, O740, P23, P230 ~ P239
            </span>
          </div>
        </div>
      </div>

      {/* 지급대상 기준 */}
      <div className="doclst">
        <div className="oxytbti mgt50">산소치료 요양비 지급대상 기준</div>
        <div className="vidis">
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th>처방전발급시</th>
                <th>처방전 미발급 시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>처방전 미발급 시</td>
                <td>12,000원/월</td>
                <td>120,000원/월</td>
              </tr>
              <tr>
                <td>차상위1,2종/의료보험 1,2종</td>
                <td>없음</td>
                <td>120,000원/월</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 전기요금 양식 */}
      <div className="doclst">
        <div className="oxytbti mgt50">전기요금 할인 신청서</div>
        <div className="docbx">
          <img src={img_doc02} alt="전기요금 할인 신청서" />
        </div>
        <div className="btbx mgt50">
          <button className="btn_mid">양식 다운로드</button>
        </div>
      </div>
    </div>

    );
}

export default Procedure;