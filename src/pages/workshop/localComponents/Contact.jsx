import styled from "styled-components";

export default function Contact(){
    return(
        <Container>
            <div className="left">
                <h1>Would you like to learn more about the Solidarity Workshop?</h1>
                <h2>Contact Us!</h2>
            </div>
            <div className="right">
                <a href="mailto: elias@solidarityworkshop.com" target="_blank" rel="noreferrer">
                    <ion-icon name="mail-outline"></ion-icon>
                </a>    
                <a href="https://www.linkedin.com/company/solidarityhall/" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="https://twitter.com/SolidarityHall" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a>    
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    background-color: black;
    display: flex;
    height: 433px;
    justify-content: space-around;
    align-items: center;
    margin-top: -3px;
    h1{
        font-size: 45px;
        font-weight: 700;
        color: white;
        width: 612px;
    }
    h2{
        margin-top: 37px;
        font-size: 45px;
        font-weight: 700;
        color: #D85930;
    }
    .right{
        width: 418px;
        display: flex;
        justify-content: space-around;
    }
    ion-icon{
        color: white;
        font-size: 100px;
    }
`