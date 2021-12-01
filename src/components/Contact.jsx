import { useState, useEffect } from "react"
import 'aos/dist/aos.css'
import Aos from 'aos'
import allActions from "../actions/index.js"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { slideInLeft, slideInRight, wobble } from "react-animations"
import styled, { keyframes } from "styled-components"
function Contact() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const contact = useSelector((store) => store.contact.contact)
    const dispatch = useDispatch()
    const [email, setEmail] = useState(contact.email)
    const [name, setName] = useState(contact.name)
    const [message, setMessage] = useState(contact.message)
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(allActions.ContactAction.contactUs({ email, name, message }))
    }
    return (
        <StyledContainer id='contact'>
            <Row>
                <h2>Contact Me</h2>

                <StyledCol>
                    <StyledForm data-Aos='flip-right' onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <StyledLabel>Email address</StyledLabel>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <StyledLabel>Your Name</StyledLabel>
                            <Form.Control type="text" placeholder="Enter your name or Company name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="text">
                            <StyledLabel>Message</StyledLabel>
                            <Form.Control as="textarea" rows={3} type="text" placeholder="Text me" value={message} onChange={(e) => setMessage(e.target.value)} />
                        </Form.Group>
                        <StyledButton variant="outline-primary" type="submit" size="lg">
                            Submit
                        </StyledButton>
                    </StyledForm>
                </StyledCol>
            </Row>
        </StyledContainer>
    )
}
export default Contact
const animatedH2 = keyframes`${wobble}`

const StyledCol = styled(Col)`
@media only screen and (min-width:700px){
max-width: 700px !important;
justify-content: center !important;
margin-left: 180px;
}
`
const StyledButton = styled(Button)`
@media only screen and (min-width:700px){
margin-top: 30px;
    margin-left: 230px;
    justify-content: center !important;
    width: 200px;
}
    :hover{
        background:  #52d42a !important;
        box-shadow: 0 0 10px #2196f3, 0 0 40px #4ec23f, 0 0 10px #0bd397 !important;
      
    }
    :nth-child(1){
        top:0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg,transparent, #0ad9e0) !important;
    }
    :hover:nth-child(1){
        left: 100%;
        transition: 1s;
    }
`
const StyledContainer = styled(Container)`
    & h2{
        animation: 2s ${animatedH2};
        margin-top: 20px;
        display: flex;
        justify-content: center;
        font-weight: bold;
        color: #7ed957;
    }
 
`

const StyledLabel = styled(Form.Label)`
color: white;
`

const StyledForm = styled(Form)`
height: 400px;
background: linear-gradient(90deg,transparent, #070707);
box-shadow: 0 0 5px #2196f3, 0 0 20px #4ec23f, 0 0 5px #0bd397 !important;
:hover{
    box-shadow: 0 0 10px white, 0 0 40px white, 0 0 10px white !important;
}
`