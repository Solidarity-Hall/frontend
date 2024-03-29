import styled from "styled-components";

export default function Spirituality(){
    return(
        <Container>
            <div className="top">
                <h1>SPIRITUALITY & PRACTICE</h1>
                <h2 className="web"> Our goals:</h2>
            </div>
            <div className="bottom">
                <h2>The Solidarity Workshop is a community of practitioners who are coming together in order to finally scale this work in the U.S. We recognize this as a moment of spiritual hunger, of longing for the kind of human connection which makes the energies of mutualism and cooperativism possible.</h2>
                <ul>
                    <li>Awareness building through public events, both virtual and live</li>
                    <li>Knowledge sharing through workshops, publications, and podcasts</li>
                    <li>Local projects in alternative economic development in the Washington DC area.</li>
                </ul>
            </div>
            <div className="circles">
                <h3>webinars publications</h3>
                <h3>local grassroots projects</h3>
                <h3>gatherings</h3>
            </div>
        </Container>
    )
};

const Container = styled.div`
    background-color: white;
    margin-top: -4px;
    width: 1280px;
    display: flex;
    flex-direction: column;
    .top{
        display: flex;
        align-items: flex-end;
        width: 1280px;
        h2{
            margin-left: 206px;
        }
    }
    .bottom{
        margin-top: 51px;
        display: flex;
        h2{
            margin-left: 40px;
        }
        ul{
            margin-left: 45px;
            li{
                font-size: 30px;
                font-weight: 700;
                width: 550px;
                font-family: "Inter";
                font-weight: 700;
            }
        }
    }
    h1{
        font-size: 60px;
        font-weight: 700;
        width: 440px;
        margin-top: 49px;
        margin-left: 40px;
    }
    h2{
        font-size: 30px;
        font-weight: 700;
        width: 606px;
    }
    .circles{
        display: flex;
        width: 1280x;
        justify-content: space-around;
        margin-top: 100px;
    }
    h3{
        background-color: #D85930;
        width: 368px;
        height: 332px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 50px;
        color: white;

    }
    @media (max-width: 1280px) {
        width: 100%;
        .web{
            display: none;
        }
        .bottom{
            flex-direction: column;
            align-items: center;
            width: 100%;
            h2{
                margin-left: 0;
                font-weight: 400;
            }
            ul{
                margin-left: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                li{
                    width: 70%;
                    font-size: 25px;
                    font-weight: 400;
                }
            }
        }
        .top{
            justify-content: center;
            width: 100%;
        }
        h1{
            width: 80vw;
            margin-top: 30px;
            margin-left: 0;
            font-size: 40px;
            text-align: center;
        }
        h2{
            width: 90vw;
            text-align: center;
            margin-bottom: 30px;
            font-size: 25px;
        }
        .circles{
            flex-direction: column;
            align-items: center;
            h3{
                margin-bottom: 8px;
                width: 300px;
                height: 300px;
                font-size: 40px;
            }
        }
    }
`
