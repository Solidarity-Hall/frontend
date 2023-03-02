import styled from "styled-components";

import image from "./../localAssets/world.png"

export default function World(){
    return(
        <Container>
            <img src={image} alt="World with many cooperative principles"/>
        </Container>
    )
};

const Container = styled.div`
    img{
        width: 1280px;
    }
`