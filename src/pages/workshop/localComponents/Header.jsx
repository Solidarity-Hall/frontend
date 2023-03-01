import styled from "styled-components";

import image from "./../localAssets/sw.png"

export default function Header(){
    return(
        <Container>
            <img src={image} alt="S and W"/>
            <div className="content">
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
    img{
        width: 570px;
    }
    .content{
        display: flex;
    }
    .right{
        width: 360px;
        h2{

        }
        h3{
            font-family: "Inter";
            font-weight: 400;
            font-size: 35px;
        }
        span{
            font-style: italic;
        }
    }
`