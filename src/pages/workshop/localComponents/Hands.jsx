import styled from "styled-components";

import image2 from "./../localAssets/hands.png"

export default function Hands(){
    return (
        <Container>
            <img src={image2} alt="hands praying"/>
        </Container>
    )
};

const Container = styled.div`
    img{
        width: 1280px;
    }
`