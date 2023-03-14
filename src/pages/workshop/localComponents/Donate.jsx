import styled from "styled-components";

import donate from "./../localAssets/donate.png";
import background from  "./../localAssets/backdots.png";

export default function Donate(){
    return(
        <Container>
            <img src={background} alt="dots and lines" />
            <a href="https://www.paypal.com/donate?hosted_button_id=53VVQWZALKL3N" target="_blank" rel="noreferrer">
                <img className="donate" src={donate} alt="donate here"/>
            </a>     
        </Container>
    )
};

const Container = styled.div`
    position: relative ;
    img{
        width: 1280px;
    }
    .donate{
        height: 212px;
        width: 389px;
        border-radius: 0px;
        position: absolute;
        top: 35px;
        left: 451px;
    }
    @media (max-width: 1280px) {
        width: 100%;
        img{
            width: 100%;
        }
        .donate{
            height: 100px;
            width: auto;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0; 
            margin: auto;
        }
    }
`