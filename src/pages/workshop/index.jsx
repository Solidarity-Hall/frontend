import styled from "styled-components";

import Header from "./localComponents/Header";
import Orange from "./localComponents/Orange";
import Wisdom from "./localComponents/Wisdom";
import World from "./localComponents/World";
import Hands from "./localComponents/Hands";
import Spirituality from "./localComponents/Spirituality";
import Steering from "./localComponents/Steering";

export default function Workshop(){
    return(
        <Container>
            <Header/>
            <Orange/>
            <World/>
            <Wisdom/>
            <Hands/>
            <Spirituality/>
            <Steering/>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
`