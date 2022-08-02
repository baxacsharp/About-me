import { Image } from "react-bootstrap"
import styled from "styled-components"
const Card = () => {
    return (
        <StyledDiv id='home'>
            <Image src="/image/Hello, I am Bakhtiyor Abdivaitov (2).gif" fluid />
        </StyledDiv>
    )
}
export default Card
const StyledDiv = styled.div`
    margin-top:100px;
`