import styled from "styled-components"
import {Button} from "@mui/material"
import native from "../assets/NativeAmerican.jpg"
const Section = styled.div`
  display:flex;
  height:100vh;
  width: 100dvw;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  scroll-snap-align: center;
`
const Container = styled.div`
  height: 100vh;
  width: 100dvw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
`
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
`
const Title = styled.h1`
  font-size: 100px;
  font-family: Monaco;
  font-weight: 600;
  letter-spacing: 2px;
  margin: 0;
  padding-top: 20px;
`
const Middle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const MiddleContent = styled.p`
  letter-spacing: 2px;
  line-height: 1.25rem;
  font-family: Monaco;
  font-weight: 400;
  
`
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const About = () => {
    return (
        <>
        <Section nativeBg={native}>
            <Container>
                <Top>
                    <Title>
                    NM STUDIOS
                    </Title>
                </Top>
                <Middle>
                    <MiddleContent>
                        Welcome to New Monarch Studios, where creativity reigns supreme.
                        Our studio is a sanctuary for artists, dreamers, and visionaries, providing a dynamic space where imagination takes flight.
                        Unleash your potential in a state-of-the-art environment crafted to elevate your artistic endeavors.
                        Whether you're a musician, filmmaker, or designer, our cutting-edge facilities and supportive community are designed to empower your creative journey.
                        Join us at New Monarch Studios, where innovation meets inspiration, and together, we'll shape the future of artistic excellence.
                    </MiddleContent>
                </Middle>
                <Bottom>
                    <Button>Learn More</Button>
                </Bottom>
            </Container>

        </Section>
        </>
    )
}