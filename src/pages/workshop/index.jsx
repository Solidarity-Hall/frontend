import styled from "styled-components";

import Header from "./localComponents/Header";
import Orange from "./localComponents/Orange";
import World from "./localComponents/World";

export default function Workshop(){
    return(
        <Container>
            <Header/>
            <Orange/>
            <World/>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
`