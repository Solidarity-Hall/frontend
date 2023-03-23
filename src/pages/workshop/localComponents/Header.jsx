import styled from "styled-components";

import image from "./../localAssets/sw.png"

export default function Header(){
    return(
        <Container>
            <img src={image} alt="S and W"/>
            <div className="content">
                <h1>The Solidarity Workshop</h1>
                <h2>Sacred geometry: The polyhedron in the context of globalization</h2>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: white;
    padding-top: 27px;
    flex-direction: column;
    padding-bottom: 50px;
    img{
        width: 570px;
    }
    .content{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        width: 1280px;
        align-items: center;
        h1{
            font-size: 75px;
            color: #D85930;
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
        }
        h2{
            font-weight: 700;
            font-size: 45px;
            margin-bottom: 25px;
            width: 70%;
            text-align: center;
        }
    }
    @media (max-width: 1280px) {
        width: 100%;
        padding-bottom: 50px;
        img{
            width: 300px;
        }
        .content{
            flex-direction: column;
            width: 100vw;
            display: flex;
            align-items: center;
            h1{
                font-size: 45px;
                width: 100vw;
                text-align: center;
            } 
            h2{
                font-size: 35px;
                width: 100vw;
                text-align: center;
            }
        }
        
    }
`