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
            Tools: 'Frontend: React JS, Redux, Styled-Components, React-Bootstrap,SASS, axios,Reactstrap, Backend:Express, Node JS, Mongo DB, Authentication/Authorization, SendGrid for sending emails, Cloudinary for saving Images ',
            GithubFrontend: 'https://github.com/baxacsharp/baxshop-frontend',
            GithubBackend: 'https://github.com/baxacsharp/baxshop-backend'

        },
        {
            imageUrl: '/image/Screenshot (109).png',
            Link: 'https://weather-app-typescript-rouge.vercel.app/',
            Title: 'Bax-Weather-App-Typescript',
            Description: "Fully functional Weather app using typescript and Rest API from OpenWeather.",
            Tools: 'React JS, Typescript, Rest Api, Styled-Components , React-Bootstrap',
            GithubFrontend: 'https://github.com/baxacsharp/weather-app-Typescript'
        },
        {
            imageUrl: '/image/Screenshot (113).png',
            Link: "https://whatsapp-frontend-omega.vercel.app/",
            Title: 'Whatsapp-Clone',
            Description: 'Whatsapp-Clone By using  SocketIo. Real-chat Application.',
            Tools: 'Frontend: SocketIo, React Js, Redux, React-Bootstrap, Styled-Components, Axios, simple-peer,  Backend: Express, Node JS, Mongo DB, SocketIO, Authentication/Authorization',
            GithubFrontend: 'https://github.com/baxacsharp/Whatsapp-frontend',
            GithubBackend: 'https://github.com/baxacsharp/Whatsapp-backend'
        },
        {
            imageUrl: 'https://d33wubrfki0l68.cloudfront.net/615ad4590e0b48ccb3be4a6f/screenshot_2021-10-04-10-15-59-0000.png',
            Link: 'https://bax-music.netlify.app',
            Title: 'Bax-Music',
            Description: 'Bax-Music, Musical-application where you can search for the music or album, and Listen for some of the songs that has in our database. ',
            Tools: 'Html 5, CSS 3, Javascript, Rest API',
            GithubFrontend: 'https://github.com/baxacsharp/Spotify-Html'

        }]
    return (
        <div id='projects' data-aos='fade-up'>
            <StyledH2 >A little piece from my work</StyledH2>
            <Row style={{ marginTop: '10px', maxWidth: '1020px' }} xs={1} md={2} className="g-4">
                {Projects.map((project) => (
                    <Col>

                        <StyledCard className='card' >
                            <Card.Body style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <div style={{ height: '425px' }} >
                                    <Card.Img variant="top" src={project.imageUrl} />

                                    <StyledTitle>{project.Title}</StyledTitle>
                                    <Card.Text style={{ color: 'white' }}>
                                        {project.Description}

                                    </Card.Text>
                                    <StyledCardText >
                                        Tools Used:  {project.Tools}

                                    </StyledCardText>
                                </div>

                                <a href={project.GithubFrontend}><StyledButton variant='outline-primary'>
                                    {project.GithubBackend ? 'Github Frontend' : 'Frontend'}
                                </StyledButton> </a>
                                {project.GithubBackend && (
                                    <a href={project.GithubBackend}>
                                        <StyledButton variant='outline-primary'>
                                            Github Backend
                                        </StyledButton>
                                    </a>
                                )}
                                <a href={project.Link}> <StyledButton variant='outline-primary'>
                                    Website
                                </StyledButton>
                                </a>

                            </Card.Body>
                        </StyledCard>

                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default Projects

const animatedH2 = keyframes`${flip}`
const styledCard = keyframes`${zoomInUp}`
const styledButton = keyframes`${bounce}`

const StyledCard = styled(Card)`
display: flex;
margin-left: 10px;
height: 500px;
width: 450px !important;
border: 1px solid #7ed957;
background-color: black;
:hover{
        box-shadow: 0 0 10px white, 0 0 40px white, 0 0 10px white !important;
        fill-opacity:#7ed957;
        background-color:#7ed957 !important;
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
margin-bottom:10px !important;
animation: 2s ${styledButton};
margin-right: 5px;
  :hover{
        background:  #52d42a !important;
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