import React from 'react';
import '../css/common.css';
import img_oxyb01 from '../assets/images/img_oxyb01.png';
import img_oxyb02 from '../assets/images/img_oxyb02.png';

function OxygenGenerator() {

    return(
  <div className="oxytab-panel active">
                    <div className="oxytbti">산소발생기</div>
                    <div className="product_list">

                        <div className="product_card">
                        <div className="imgbx">
                            <img src={img_oxyb01} alt="Krober O2-4.0 제품 이미지" />
                        </div>
                        <div className="prodtdiscpt">
                            <p className="prodtname">Krober O2-4.0 / 클로버 O2-4.0</p>
                            <table className="productb">
                            <tbody>
                                <tr>
                                <th>월 12,000원</th>
                                <td data-label="월 12,000원">
                                    · 처방전 발급시<br />
                                    · 차상위1,2종/의료급여1,2종은 국가에서 100% 지원
                                </td>
                                </tr>
                                <tr>
                                <th>최대소음</th>
                                <td data-label="최대소음">31dB</td>
                                </tr>
                                <tr>
                                <th>사이즈</th>
                                <td data-label="사이즈">520 * 210 * 540mm</td>
                                </tr>
                                <tr>
                                <th>무게</th>
                                <td data-label="무게">16Kg</td>
                                </tr>
                                <tr>
                                <th>먼지필터</th>
                                <td data-label="먼지필터">1차 / 2차</td>
                                </tr>
                                <tr>
                                <th>유량</th>
                                <td data-label="유량">
                                    · 0 ~ 2L/min 은 0.1 단위로 조정가능.<br />
                                    · 2 ~ 4L/min 은 0.2 단위로 조정가능.<br />
                                    · 4 ~ 5L/min 은 0.5 단위로 조정가능.
                                </td>
                                </tr>
                                <tr>
                                <th>사용온도</th>
                                <td data-label="사용온도">
                                    <span className="impct">10~40℃</span>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>

                        <div className="product_card">
                        <div className="imgbx">
                            <img src={img_oxyb02} alt="Krober O2-4.0 제품 이미지 2" />
                        </div>
                        <div className="prodtdiscpt">
                            <p className="prodtname">Krober O2-4.0 / 클로버 O2-4.0</p>
                            <table className="productb">
                            <tbody>
                                <tr>
                                <th>월 12,000원</th>
                                <td data-label="월 12,000원">
                                    · 처방전 발급시<br />
                                    · 차상위1,2종/의료급여1,2종은 국가에서 100% 지원
                                </td>
                                </tr>
                                <tr>
                                <th>최대소음</th>
                                <td data-label="최대소음">34.7dB</td>
                                </tr>
                                <tr>
                                <th>사이즈</th>
                                <td data-label="사이즈">600 * 290 * 400mm</td>
                                </tr>
                                <tr>
                                <th>무게</th>
                                <td data-label="무게">15Kg</td>
                                </tr>
                                <tr>
                                <th>먼지필터</th>
                                <td data-label="먼지필터">1차 / 2차</td>
                                </tr>
                                <tr>
                                <th>유량</th>
                                <td data-label="유량">· 0.5~5 LPM</td>
                                </tr>
                                <tr>
                                <th>사용온도</th>
                                <td data-label="사용온도">
                                    <span className="impct">10~40℃</span>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>

                        <div className="btbx">
                        <button className="btn_mid">임대절차</button>
                        </div>

                    </div>
                    </div>

    );
}

export default OxygenGenerator;