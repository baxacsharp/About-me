import { Container, Row, Col, Image } from "react-bootstrap"
import 'aos/dist/aos.css'
import styled, { keyframes } from "styled-components"
import Aos from 'aos'
import { useEffect } from "react"
import { bounceInLeft, bounceInUp, fadeInLeft, fadeInRight } from "react-animations"
import aos from 'aos'
const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <StyledDiv id='aboutMe' >
            <Row>
                <Col xs={6}>
                    <StyledImage src="/image/PngItem_5017607.png" roundedCircle />
                </Col>
                <Col xs={6}>
                    <Row>
                        <Col xs={12} >

                            <h2 data-aos='fade-right' >About Me</h2>
                            <p>Hello, My name is Bakhtiyor Abdivaitov,<span> FULL-STACK DEVELOPER</span> living in a web development environment,currently studying in <span>IT department</span> in the University</p>
                            <p>My job is to build fully functional and amazing websites that can inspire clients who are visiting the website</p>
                            <StyledSkills className='box'>
                                <h2>Skills</h2>
                                <p>Javascript, HTML5, CSS3, ES6, REST API, Socket, Jest Test, Typescript,React Js,Node JS, Express, MongoDB, MYSQL, REDUX, SASS, SENDGRID, Streams, Authorization/Authentication, OAuth. </p>
                            </StyledSkills>
                        </Col>

                        <StyledCol xs={6} id='whyMe'>
                            <h2>Why Me</h2>

                            <div className='d-flex '>
                                <img src='/image/correction.png' />
                                <p>Passionate for Coding</p>
                            </div>
                            <div className='d-flex'>
                                <img src='/image/correction.png' />
                                <p>Problem Solver</p>
                            </div>
                            <div className='d-flex'>
                                <img src='/image/correction.png' />
                                <p>Ability to work in a team</p>
                            </div>
                            <div className='d-flex'>
                                <img src='/image/correction.png' />
                                <p>Willingnes to learn</p>
                            </div>
                            <div className='d-flex'>
                                <img src='/image/correction.png' />
                                <p>Coming up with ideas</p>
                            </div>

                        </StyledCol>
                    </Row>
                </Col>
            </Row>
        </StyledDiv>

    )
}
export default About

const bounceAnimationH2 = keyframes`${bounceInLeft}`
const bounceAnimateH2 = keyframes`${bounceInUp}`
const animatedImage = keyframes`${fadeInLeft}`
const animatedPTag = keyframes`${fadeInRight}`

const StyledSkills = styled.div`
   & h2{border-bottom: 1px solid green;}

    
`

const StyledDiv = styled(Container)`
margin-top: 20px;
    & p{
        color: white;
    }
    & h2{
        animation: 2s ${bounceAnimationH2};
        font-weight: bold;
        color: #7ed957;
    }
    & span{
        font-weight:50px;
        color: #3182b5;
    }
`
const StyledImage = styled(Image)`
width: 400px;
height:400px
`
const StyledCol = styled(Col)`
    & h2 {
        animation: 2s ${bounceAnimateH2};
    }
    & img{
        animation: 2s ${animatedImage} !important;
        margin-right:15px;
    }
    & p {
        animation: 2s ${animatedPTag};
        margin-bottom: 5px;
    }
`