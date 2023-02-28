import styled from "styled-components";

import image from "./../localAssets/sw.png"

export default function Header(){
    return(
        <Container>
            <img src={image} alt="S and W"/>
            <div className="content">
                
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;
    padding-top: 27px;
    img{
        width: 570px;
    }
`