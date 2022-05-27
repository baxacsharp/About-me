import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from "react-scroll"
import { saveAs } from 'file-saver'
import styled from "styled-components"
const NavBar = () => {
    const saveFile = () => {
        saveAs(process.env.REACT_APP_BACKEND_URL + "/Bakhtiyor_Abdivaitov_CV.pdf", 'Bakhtiyor_Abdivaitov_CV.pdf')
    }
    return (
        <StyledNavbar fixed="top" variant="dark">
            <StyledContainer style={{ position: 'relative' }}>
                <Navbar.Brand ></Navbar.Brand>
                <Nav className='me-auto' >
                    <Link activeClass='active'
                        to='home'
                        spy={true}
                        smooth={true}
                        duration={500}
                    ><StyledNav href="#home">Home</StyledNav></Link>
                    <Link activeClass='active'
                        to='aboutMe'
                        spy={true}
                        smooth={true}
                        duration={500}
                    ><StyledNav href="#features">About</StyledNav></Link>
                    <Link activeClass='active'
                        to='projects'
                        spy={true}
                        smooth={true}
                        duration={500}
                    ><StyledNav href="#pricing">Projects</StyledNav></Link>
                    <Link activeClass='active'
                        to='contact'
                        spy={true}
                        smooth={true}
                        duration={500}
                    ><StyledNav href="#pricing">Contact</StyledNav></Link>
                </Nav>
                <Nav>
                    <StyledNav href="/Bakhtiyor_Abdivaitov_CV.pdf">
                        <StyledButton variant="outline-primary" type='submit' >Resume</StyledButton>

                    </StyledNav>

                </Nav>
            </StyledContainer>
        </StyledNavbar >
    )
}
export default NavBar

const StyledContainer = styled(Container)`
margin-left: 0px;
margin-right:0px;
position: relative;
`
const StyledNavbar = styled(Navbar)`
background-color: black;
`
const StyledButton = styled(Button)`
@media only screen and (max-width:600px){
    :hover{
        background:  #52d42a !important;
        box-shadow: 0 0 10px #2196f3, 0 0 40px #4ec23f, 0 0 10px #0bd397 !important;
      
    }
}
`

const StyledNav = styled(Nav.Link)`
color: white !important;
font-weight: bolder;
display: flex !important;
justify-content: center !important;
:hover{
    background: #7ed957;
    transform: translate(0.8em, -0.8em);
    --webkit-transform: translate(0.8em , -0.8em);
    transition: all 0.5s linear;
    box-shadow: -2em 2em 0 white;
}
:hover::before, :hover::after{
    transition: all 0.5s linear;
}
:hover::before{
    background: #7ed957;;
    width: 0.5em;
    top: 0.5em;
    left: -1em;
}
:hover::after{
    background: #7ed957;;
    width: 0.5em;
    bottom:-2.5em;
    left: 1em;
    height: 4em;
}
::before, ::after{
    content: '';
    position: absolute;
    transition: all 0.5s linear;
    width:0.5em;
}
::after{
    height: 4em;
    background: #5f5f5f81;
    bottom: 2.25em;
    left:1.5em;
    transform: rotate(90deg) skew(0,45deg);
    --webkit-transform:rotate(90deg) skew(0,45deg);
}
::before{
    height: 2.5em;
    background: #08080881;
    top: 0.25em;
    left:-0.5em;
    transform: skewY(-45deg);
    --webkit-transform:skewY(-45deg)
}

`
