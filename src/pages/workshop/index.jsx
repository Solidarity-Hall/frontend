import styled from "styled-components";

import Header from "./localComponents/Header";
import Orange from "./localComponents/Orange";
import Wisdom from "./localComponents/Wisdom";
import World from "./localComponents/World";
import Hands from "./localComponents/Hands";
import Spirituality from "./localComponents/Spirituality";
import Steering from "./localComponents/Steering";
import Faq from "./localComponents/Faq";
import Partners from "./localComponents/Partners";
import Donate from "./localComponents/Donate";

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
            <Faq/>
            <Partners/>
            <Donate/>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
`