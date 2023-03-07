import styled from "styled-components";

import donate from "./../localAssets/donate.png";
import background from  "./../localAssets/backdots.png";

export default function Donate(){
    return(
        <Container>
            <img src={background} alt="dots and lines"/>
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
`