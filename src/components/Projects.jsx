import { Row, Col, Card, Button } from "react-bootstrap"
import 'aos/dist/aos.css'
import styled, { keyframes } from 'styled-components'
import Aos from 'aos'
import { bounce, flip, zoomInUp } from "react-animations"
import { useEffect } from "react"
const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const Projects = [
        {
            imageUrl: '/image/Screenshot (111).png',
            Link: 'https://ecom-frontend-nu.vercel.app/',
            Title: 'BaxShop',
            Description: "Baxshop, E-commerce website dedicated to sport items which you can sell or buy products based on your Role.",
            Tools: 'Front-End: React JS, Redux, Styled-Components, React-Bootstrap, SASS, Axios, Reactstrap, Back-End: Express, Node JS, MongoDB, Authentication/Authorization, SendGrid for sending emails, Cloudinary for saving images.',
            GithubFrontend: 'https://github.com/baxacsharp/baxshop-frontend',
            GithubBackend: 'https://github.com/baxacsharp/baxshop-backend'

        },
        {
            imageUrl: '/image/Screenshot (109).png',
            Link: 'https://weather-app-typescript-rouge.vercel.app/',
            Title: 'Bax-Weather-App-Typescript',
            Description: "Fully functional Weather app using TypeScript and Rest API from OpenWeather.",
            Tools: 'React JS, TypeScript, Rest Api, Styled-Components , React-Bootstrap',
            GithubFrontend: 'https://github.com/baxacsharp/weather-app-Typescript'
        },
        {
            imageUrl: '/image/Screenshot (113).png',
            Link: "https://whatsapp-frontend-omega.vercel.app/",
            Title: 'WhatsApp-Clone',
            Description: 'WhatsApp-Clone By using  SocketIO Real-chat Application.',
            Tools: 'Front-End: SocketIO, React JS, Redux, React-Bootstrap, Styled-Components, Axios, Simple-peer,  Back-End: Express, Node JS, MongoDB, SocketIO, Authentication/Authorization',
            GithubFrontend: 'https://github.com/baxacsharp/Whatsapp-frontend',
            GithubBackend: 'https://github.com/baxacsharp/Whatsapp-backend'
        },
        {
            imageUrl: 'https://d33wubrfki0l68.cloudfront.net/615ad4590e0b48ccb3be4a6f/screenshot_2021-10-04-10-15-59-0000.png',
            Link: 'https://bax-music.netlify.app',
            Title: 'Bax-Music',
            Description: 'Bax-Music, Musical-application where you can search for your favourite albums and songs, and listen to songs that has in our database. ',
            Tools: 'HTML 5, CSS 3, Javascript, Rest API',
            GithubFrontend: 'https://github.com/baxacsharp/Spotify-Html'

        }]
    return (
        <div id='projects' data-aos='fade-up'>
            <StyledH2 >A little piece from my work</StyledH2>
            <StyledRow style={{ marginTop: '10px' }} xs={1} md={1} lg={2} >
                {Projects.map((project) => (
                    <Col>

                        <StyledCard className='card' >
                            <Card.Body >
                                <div>
                                    <StyledCardImg variant="top" src={project.imageUrl} />

                                    <StyledTitle>{project.Title}</StyledTitle>
                                    <Card.Text style={{ color: 'white' }}>
                                        {project.Description}

                                    </Card.Text>
                                    <StyledCardText >
                                        Tools Used:  {project.Tools}

                                    </StyledCardText>
                                </div>
                                <StyledDiv>
                                    <a href={project.GithubFrontend}><StyledButton >
                                        {project.GithubBackend ? 'Front-End' : 'Front-End'}
                                    </StyledButton> </a>
                                    {project.GithubBackend && (
                                        <a href={project.GithubBackend}>
                                            <StyledButton >
                                                Back-End
                                            </StyledButton>
                                        </a>
                                    )}
                                    <a href={project.Link}> <StyledButton >
                                        Website
                                    </StyledButton>
                                    </a>
                                </StyledDiv>
                            </Card.Body>
                        </StyledCard>

                    </Col>
                ))}
            </StyledRow>
        </div>
    )
}
export default Projects

const animatedH2 = keyframes`${flip}`
const styledCard = keyframes`${zoomInUp}`
const styledButton = keyframes`${bounce}`
const StyledRow = styled(Row)`
--bs-gutter-x:0px;
`
const StyledCardImg = styled(Card.Img)`
    height:360px;
    @media only screen and (max-width:530px){
        height:auto;
    }
`
const StyledDiv = styled.div`
position:absolute;
bottom:0;
display:flex;
align-items:space-between;
`
const StyledCard = styled(Card)`
height:630px ;
margin-bottom:10px;
margin-left:10px;
border: 1px solid #7ed957;
background-color: black;


    & Card.Img{
        @media only screen and (max-width:530px){
            height:auto;
        }
    }
:hover{
        box-shadow: 0 0 10px white, 0 0 40px white, 0 0 10px white !important;
        fill-opacity:#7ed957;
        
    }
  
`
const StyledTitle = styled(Card.Title)`
color: white;
`
const StyledCardText = styled(Card.Text)`
color: #2196f3;
font-weight:bolder;
`

const StyledButton = styled(Button)`
color:white;
border: 2px solid #52d42a;
background-color:black;
animation: 2s ${styledButton};
margin-right: 5px;
  :hover{
        background-color:black;
        box-shadow: 0 0 10px #2196f3, 0 0 40px #4ec23f, 0 0 10px #0bd397 !important;

    }
`
const StyledH2 = styled.h2`
/* animation: 2s ${animatedH2}; */
margin-top: 15px;
display: flex;
justify-content: center;
color: #7ed957;
`