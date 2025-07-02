import React from 'react';
import '../css/common.css';
import img_oxys01 from '../assets/images/img_oxys01.png';
import img_oxys02 from '../assets/images/img_oxys02.png';

function Portable(){
    return(

    <div className="oxytab-panel active">
      <div className="oxytbti">휴대용 산소발생기</div>

      <div className="product_list">
        {/* 제품 1 */}
        <div className="product_card">
          <div className="imgbx">
            <img src={img_oxys01} alt="Kingon P2 이미지" />
          </div>
          <div className="prodtdiscpt">
            <p className="prodtname">Kingon P2</p>
            <table className="productb">
              <tbody>
                <tr>
                  <th>월20,000원</th>
                  <td data-label="월20,000원">
                    · 처방전 발급시<br />
                    · 차상위1,2종/의료급여1,2종은 국가에서 100% 지원
                  </td>
                </tr>
                <tr>
                  <th>최대소음</th>
                  <td data-label="최대소음">55dB</td>
                </tr>
                <tr>
                  <th>사이즈</th>
                  <td data-label="사이즈">221*85*160mm</td>
                </tr>
                <tr>
                  <th>무게</th>
                  <td data-label="무게">1.98Kg(배터리포함)</td>
                </tr>
                <tr>
                  <th>작동시간</th>
                  <td data-label="작동시간">2~3시간</td>
                </tr>
                <tr>
                  <th>유량</th>
                  <td data-label="유량">· 흡입모드(펄스)1~5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 제품 2 */}
        <div className="product_card">
          <div className="imgbx">
            <img src={img_oxys02} alt="PM4150 Easypulse 이미지" />
          </div>
          <div className="prodtdiscpt">
            <p className="prodtname">PM4150 Easypulse</p>
            <table className="productb">
              <tbody>
                <tr>
                  <th>월 20,000원</th>
                  <td data-label="월20,000원">
                    · 처방전 발급시<br />
                    · 차상위1,2종/의료급여1,2종은 국가에서 100% 지원
                  </td>
                </tr>
                <tr>
                  <th>최대소음</th>
                  <td data-label="최대소음">59dB</td>
                </tr>
                <tr>
                  <th>사이즈</th>
                  <td data-label="사이즈">257*165*114mm</td>
                </tr>
                <tr>
                  <th>무게</th>
                  <td data-label="무게">3.08Kg</td>
                </tr>
                <tr>
                  <th>작동시간</th>
                  <td data-label="작동시간">2~3시간</td>
                </tr>
                <tr>
                  <th>유량</th>
                  <td data-label="유량">· 흡입모드(펄스)1~5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 버튼 */}
        <div className="btbx">
          <button className="btn_mid">임대절차</button>
        </div>
      </div>
    </div>




    );
}

export default Portable;