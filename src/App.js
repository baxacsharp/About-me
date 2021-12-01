import NavBar from "./components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Card from "./components/Card"
import AboutMe from "./components/AbotMe"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import styled from "styled-components"
function App() {
  const isMobile = window.screen.width < 600
  return (
    <StyledDiv>
      <NavBar />
      {!isMobile && <Card />}
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </StyledDiv>
  )
}

export default App

const StyledDiv = styled.div`
  background-color: black;
`
const StyledCard = styled(Card)`
  @media only screen and (max-width: 700px) {
    display: none !important;
  }
`
