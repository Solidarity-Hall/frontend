import styled from "styled-components";

import image from "./../localAssets/back.png"

const comittee = [
    { name: "Pete Davis", role: "Democracy Policy Network"},
    { name: "Anthony Annett", role: "Sustainable Development Solutions Network"},
    { name: "Molly Burhans", role: "GoodLands"},
    { name: "Maddie Ulanow", role: "Arabella Advisors"},
    { name: "Teresa Mourad", role: "Ecological Society of America"},
    { name: "Nate Tinner-Williams", role: "Black Catholic Messenger"},
    { name: "Michael Centore", role: "Today’s American Catholic"},
    { name: "Elias Crim", role: "Solidarity Hall, Ownership Matters"},
    { name: "Gary Gardner", role: "author, The Earth Cries Out"},
    { name: "Sam Rocha", role: "University of British Columbia"},
    { name: "Grace Potts", role: "Solidarity Hall"},
    { name: "Jamie Kralovec", role: "Georgetown University"}
]

export default function Steering(){
    return(
        <Container>
            <h1>Steering Committee</h1>
            <main>
                <img src={image} alt="some lines"></img>
                <div className="names">
                    {
                        comittee.map(member => (
                            <h2 key={member.name}><span>{member.name}</span>, {member.role}</h2>
                        ))
                    }
                </div>
                <div className="line"></div>
            </main>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    background-color: white;
    padding-top: 70px;
    position: relative;
    h1{
        font-family: "Inter";
        font-size: 50px;
        font-weight: 700;
        text-align: center;
    }
    img{
        width: 1280px;
    }
    main{
        position: relative;
    }
    .line{
        height: 707px;
        width: 1px;
        background-color: white;
        position: absolute;
        top: 0;
    }
    .names{
        position: absolute;
        top: 63px;
        left: 37px;
    }
    h2{
        width: 862px;
        font-size: 35px;
        font-weight: 400;
        span{
            font-family: "Inter";
            font-size: 35px;
            font-weight: 700;
        }
    }
    @media (max-width: 1280px) {
        width: 100%;
        padding-bottom: 80px;
        img{
            display: none;
        }
        .names{
            position: relative;
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-top: -20px;
            h2{
                width: 90%;
                max-width: 100vw;
                margin-bottom: 10px;
                border-bottom: 1px solid black;
                font-size: 25px;
                span{
                    font-size: 25px;
                }
            }
        }
    }
`