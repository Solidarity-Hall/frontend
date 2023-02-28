import styled from "styled-components"
import Header from "./localComponents/Header"

export default function Workshop(){
    return(
        <Container>
            <Header/>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    display: flex;
    align-items: center;
`