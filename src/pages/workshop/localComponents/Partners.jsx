import styled from "styled-components";

import p1 from "./../localAssets/1.png";
import p2 from "./../localAssets/2.png";
import p3 from "./../localAssets/3.png";
import p4 from "./../localAssets/4.png";
import p5 from "./../localAssets/5.png";
import p6 from "./../localAssets/6.png";
import p7 from "./../localAssets/7.png";
import p8 from "./../localAssets/8.png";

export default function Partners(){
    return (
        <Container>
            <h1>Our Institutional Partners</h1>
            <div className="part">
                <a href="https://solidarityhall.org/" target="_blank" rel="noreferrer">
                    <img className="p1" src={p1} alt="solidarity hall"/>
                </a>
                <a href="https://www.shareable.net/" target="_blank" rel="noreferrer">
                    <img className="p2" src={p2} alt="shareable"/>
                </a>
                <a href="https://ownershipmatters.net/" target="_blank" rel="noreferrer">
                    <img className="p3" src={p3} alt="ownership matters"/>
                </a>
                <a href="https://zebrasunite.coop/" target="_blank" rel="noreferrer">
                    <img className="p4" src={p4} alt="zebras unite"/>
                </a>
                <a href="https://platform.coop/" target="_blank" rel="noreferrer">
                    <img className="p5" src={p5} alt="Platform Cooperativism Consortium"/>
                </a>
                <a href="https://www.todaysamericancatholic.org/" target="_blank" rel="noreferrer">
                    <img className="p6" src={p6} alt="todays american catholic"/>
                </a>
                <a href="https://www.start.coop/" target="_blank" rel="noreferrer">
                    <img className="p7" src={p7} alt="start.coop"/>
                </a>
                {/* <a> */}
                    <img className="p8" src={p8} alt="partner"/>
                {/* </a> */}
            </div>
            <h2>As a nonprofit organization, we rely entirely on community support. None of our efforts would be possible without the help of donors, volunteers, and supportive community members like you. Check out our donation page to contribute and get us one step closer to our mission! </h2>
        </Container>
    )
};

const Container = styled.div`
    background-color: white;
    width: 1280px;
    padding-top: 80px;
    h1{
        text-align: center;
        width: 1280px;
        font-size: 45px;
        font-weight: 700;
    }
    h2{
        margin-top: 50px;
        margin-left: 62px;
        width: 1168px;
        font-family: "Heebo";
        font-size: 35px;
        font-weight: 400;
        text-align: center;
    }
    .part{
        position: relative;
        width: 1280x;
        height: 830px;
    }
    img{
        position: absolute;
    }
    .p1{
        height: 116px;
        width: 449px;
        top: 52px;
        left: 78px;
    }
    .p2{
        height: 66px;
        width: 367px;
        top: 102px;
        right: 124px;
    }
    .p3{
        height: 205px;
        width: 204px;
        top: 230px;
        left: 215px;
    }
    .p4{
        height: 144px;
        width: 458px;
        top: 261px;
        right: 307px;
    }
    .p5{
        height: 127px;
        width: 364px;
        top: 498px;
        left: 99px;
    }
    .p6{
        height: 114px;
        width: 544px;
        top: 505px;
        right: 119px;
    }
    .p7{
        height: 137px;
        width: 235px;
        top: 702px;
        left: 214px;
    }
    .p8{
        height: 63px;
        width: 266px;
        top: 702px;
        right: 369px;
    }
`