import styled from "styled-components";

import image from "./../localAssets/sw.png"

export default function Header(){
    return(
        <Container>
            <img src={image} alt="S and W"/>
            <div className="content">
                <h1>The Solidarity Workshop</h1>
                <div className="right">
                    <h2>Sacred geometry: The polyhedron in the context of globalization</h2>
                    <h3><span>I like to imagine humanity as a polyhedron, in which the multiple forms, in expressing themselves, constitute the elements that compose the one human family in a plurality. And this is true globalization.</span><br/>  
                    —Pope Francis</h3>
                </div>
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
    padding-bottom: 100px;
    img{
        width: 570px;
    }
    .content{
        margin-top: 50px;
        display: flex;
        width: 1280px;
        justify-content: space-around;
        h1{
            font-size: 75px;
            color: #D85930;
            width: 380px;
        }
    }
    .right{
        width: 776px;
        h2{
            font-weight: 700;
            font-size: 45px;
            margin-bottom: 25px;
        }
        h3{
            font-weight: 400;
            font-size: 35px;
        }
        span{
            font-style: italic;
        }
    }
`