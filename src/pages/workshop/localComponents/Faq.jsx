import styled from "styled-components";

import image from "./../localAssets/faq.png";

const faq = [
    {question:"What is the Solidarity Workshop?", answer: "We are a non-profit public forum and a community of practice—thus the word “workshop” in our name. We are both virtual and local (to Washington D.C., where we’re based)."},
    {question:"What’s your mission?", answer: "To help build the infrastructure of the alternative solidarity-based economy which is finally becoming visible in the U.S. This means we will convene practitioners, publish best practices, and share wisdom, including spiritual wisdom."},
    {question:"Is the Solidarity Workshop a thinktank?", answer: "Our primary focus is not on policy. Instead we concentrate on the social and economic practices that create solidarity-based enterprises and the spiritualities around those practices."},
    {question:"Why the interest in spirituality? Is the Solidarity Workshop a religious project?", answer: "We take inspiration both from the rise of the solidarity movement globally as well as from public figures like Pope Francis, Vandana Shiva, Rev. William Barber, and others. Our approach is ecumenical and open."},
    {question:"What kinds of programming will you be offering?", answer: "In addition to our podcast, Dorothy’s Place, and new publications from Solidarity Hall Press, we will be offering a diverse mix of webinars, workshops, and local in-person events (mainly in Washington D.C.)."}
]

export default function Faq(){
    return (
        <Container>
            <img src={image} alt="FAQ"/>
            {
                faq.map(topic => (
                    <div className="topic" key={topic.question}>
                        <h1>{topic.question}</h1>
                        <h2>{topic.answer}</h2>
                    </div>
                ))
            }
        </Container>
    )
};

const Container = styled.div`
    background-color: #D85930;
    width: 1280px;
    position: relative;
    padding: 200px 37px 0 37px;
    img{
        position: absolute;
        height: 383px;
        width: 434px;
        right: 32px;
        top: -190px;
    }
    .topic{
        margin-bottom: 50px;
    }
    h1{
        color: white;
        font-size: 35px;
        font-weight: 700;
        text-align: left;
    }
    h2{
        color: white;
        font-weight: 400;
        font-size: 35px;
        font-weight: 400;
        text-align: left;
    }
    @media (max-width: 1280px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        img{
            height: auto;
            max-width: 80vw;
            position: relative;
            top: 0;
            margin-bottom: 20px;
        }
        .topic{
            margin-bottom: 30px;
            h1{
                font-size: 30px;
            }
            h2{
                font-size: 25px;
            }
        }
    }
`