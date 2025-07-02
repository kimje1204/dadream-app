import React from 'react';
import '../css/common.css';
import ScrollTopButton from '../components/ScrollTopButton';
import miki1 from '../assets/images/miki-mirage7b.png';
import miki2 from '../assets/images/miki-pb.png';
import miki3 from '../assets/images/na-101.png';
import miki4 from '../assets/images/miki-hal48.png';

function Teun() {

      const products = [
    {
      id: 'M18030043014',
      img: miki1,
      title: 'MIRAGE7(22D)-B',
      price: '월 대여료 : 30,000원',
      badges: ['제조사 직배송', '오후 3시 마감'],
      meta: '재질: 알루미늄, 통(PU) 타이어\n사이즈: 63.5 x 108 x 89cm\n중량: 15.5kg'
    },
    {
      id: 'M18030111514',
      img: miki2,
      title: 'MiKi-PB',
      price: '33,100원',
      badges: ['제조사 직배송', '오후 3시 마감'],
      meta: '재질: 알루미늄, 통(PU) 타이어\n사이즈: 62 × 101 × 89cm\n중량: 16.2kg'
    },
    {
      id: 'M18031134102',
      img: miki3,
      title: 'NA-101',
      price: '25,300원',
      badges: ['품절지연', '제조사 직배송', '오후 3시 마감'],
      meta: '재질: 알루미늄, 통(PU) 타이어\n사이즈: 63 × 100 × 87cm\n중량: 12.6kg'
    },
    {
      id: 'M18030043002',
      img: miki4,
      title: 'HAL48(22D)',
      price: '월 대여료 : 30,000원',
      badges: ['품절지연', '제조사 직배송', '오후 3시 마감'],
      meta: '재질: 알루미늄, 통(PU) 타이어\n사이즈: 65(넓이) x 120(길이) x 132(높이)cmm\n중량: 17.5kg'
    },
  ];

    return(
    <div className="warp">
        <div className="topmu">
            <div className="inner">
                <div className="logot tune">
                    <p>일반휠체어 대여</p>
                    <span>TEUN-TEUN welfare equipment</span>
                </div>
                <div className="contnm">상담문의 : 1533-5921</div>
            </div>
        </div>

      <div className="contbox mini">
        <div className="inner">
          <div className="tuncont">
                <div className="subti">
                <p>일반 휠체어 임대료</p>
                </div>

            <div className="rentpri">
              <div className="prcard caone">
                <div className="datebx">1~15일 대여료</div>
                <div className="pribx">
                  <p>20,000원 <span>/ 월</span></p>
                  <span className="dely">배송비 : 지역별 차등적용</span>
                </div>
              </div>

              <div className="prcard tw">
                <div className="datebx">16~30일 대여료</div>
                <div className="pribx">
                  <p>30,000원 <span>/ 월</span></p>
                  <span className="dely">배송비 : 무료</span>
                </div>
              </div>
            </div>
          </div>

          <div className="tuncont">
            <div className="subti">
              <p>수동 휠체어</p>
            </div>

            <div className="product-grid">
              {products.map((item) => (
                <a
                  key={item.id}
                  href={`https://bc1592.gagaon.com/indi/item.php?it_id=${item.id}`}
                  className="product-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="imgbx">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="product-content">
                    <div className="product-title">{item.title}</div>
                    <div className="product-price">{item.price}</div>
                    {item.badges.map((badge, i) => (
                      <div
                        key={i}
                        className={`badge ${badge === '품절지연' ? 'pink' : badge === '제조사 직배송' ? 'purple' : 'gray'}`}
                      >
                        {badge}
                      </div>
                    ))}
                    <div className="product-meta">{item.meta}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

        <ScrollTopButton />
    </div>

    );
}

export default Teun;