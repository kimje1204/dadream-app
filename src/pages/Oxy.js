import React from 'react';
import '../css/common.css';
import OxyTab from '../components/OxyTab';
import { Link } from 'react-router-dom';

function Oxy() {
    return(
    <div className="warp">
            <div className="topmu">
                <div className="inner">
                    <Link to="/">
                    <div className="logot">
                        <p>다드림 산소발생기</p>
                        <span>DADREAM MEDICARE</span>
                    </div>
                    </Link>

                    <a href="tel:1533-5921">
                    <div className="contnm">
                        상담문의 : 1533-5921
                    </div>
                    </a>
                </div>
            </div>

        <div className="contbox mini">
            <div className="inner ">

                {/*탭*/}
                <OxyTab />

            </div>
        </div>  
          
    </div>
    );
}

export default Oxy;