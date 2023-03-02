import styled from "styled-components";

export default function Orange(){
    return (
        <Container>
            <h1>How can we put our society back in control of the economy?</h1>
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
`