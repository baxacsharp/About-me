import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
const Footer = () => {
    return (
        <StyledContainer fluid>
            <Row>
                <Col md={6}>

                    <a href='https://www.linkedin.com/in/baxtiyor-abduvoitov/'> <img src='/image/linkedin (1).png' /></a>
                    <a href='https://github.com/baxacsharp'><img src='/image/github.png' /></a>

                    <a href='mailto: baxtiyor.abduvoitov.2000@gmail.com'> <img src='/image/email.png' /></a>


                </Col>
                <Col md={6}>
                    <h4>2022 @All rights reserved || <span>Bakhtiyor Abdivaitov</span></h4>
                </Col>
            </Row>
        </StyledContainer>
    )
}
export default Footer

const StyledContainer = styled(Container)`
background-color: #1a1818;
margin-top: 20px;
@media only screen and (min-width:700px){
height: 150px;
}

    & img{
        margin-top: 50px;
        margin-left: 30px;
        width: 40px !important;
        :hover{
            opacity: 2;
            background-color: #52d42a ;
        }
    }
    & h4{
        margin-top: 50px;
        color: #52d42a 
    }
    & span{
        color: white;
    }
`
