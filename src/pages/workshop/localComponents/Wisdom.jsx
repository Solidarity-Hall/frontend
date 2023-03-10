import styled from "styled-components";

export default function Wisdom(){
    return(
        <Container>
            <div className="text">
                <h1>WISDOM EXCHANGE </h1>
                <div className="right">
                    <h2>For the builders of the next economy, the Solidarity Workshop is a showcase for best practices from the global ecosystem.</h2>
                    <h2>With two major workstreams (Spirituality and Practice), we are a community of practice for wisdom exchange at the intersection of cooperativism, community wealth-building, integral ecology, and greater racial equity. While ecumenical in nature, we take particular inspiration from the social vision of Pope Francis and other spiritual leaders.</h2>
                </div>
            </div>
            <div className="text">
                <h1>NEED FOR CHANGE </h1>
                <div className="right">
                    <h2>Even amidst an enduring climate of neoliberal, extractive capitalism, somehow alternative businesses and mission-driven projects manage to thrive (better than conventional ventures, in fact!) but still in relatively small numbers. We need to replace an old, damaging story—the magical thinking around “free markets”—with a new, integral story about mutualism and an economy of care.</h2>
                    <h2>Despite numerous inspiring examples, an important missing element in taking these business models to scale is <span>social and financial infrastructure</span>, as well as financing in the form of patient capital.</h2>
                    <h2>The Solidarity Workshop is also about the spiritual foundations of this work, found in several traditions globally as well as embedded in manifestations of what has been called “the pluriverse.”</h2>
                </div>
            </div>
        </Container>
    )
};

const Container = styled.div`
    background-color: white;
    width: 1280px;
    margin-top: -3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 49px 0 19px 0;
    .text{
        display: flex;
        width: 1280px;
        justify-content: space-around;
    }
    h1{
        color: #D85930;
        font-weight: 700;
        font-size: 45px;
        width: 262px;
    }
    h2{
        font-size: 30px;
        font-weight: 400;
        width: 849px;
        margin-bottom: 30px;
        span{
            font-weight: 700;
            font-family: "Inter";
        }
    }
    @media (max-width: 1280px) {
        width: 360px;
        .text{
            width: 360px;
            flex-direction: column;
        }
        h2{
            width: 360px;
        }
    }
`