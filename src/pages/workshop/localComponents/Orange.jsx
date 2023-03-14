import styled from "styled-components";

export default function Orange(){
    return (
        <Container>
            <h1>What is the Solidarity Economy? </h1>
        </Container>
    )
}

const Container = styled.div`
    background-color: #D85930;
    width: 1280px;
    height: 256px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-size: 50px;
        font-weight: 400;
        width: 1000px;
        text-align: center;
    }
    @media (max-width: 1280px) {
        width: 100%;
        height: 150px;
        h1{
            font-size: 35px;
            width: 100%;
        }
    }
`