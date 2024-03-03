import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import styled from 'styled-components'
const Section = styled.div`
  display:flex;
  height:100vh;
  flex-direction: column;
  background-image: linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% );;
  scroll-snap-align: center;
  justify-content: center;
  text-align: center;
`
const SocialMediaSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;

`
const Title = styled.h1`
    font-size: 100px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 500;
    letter-spacing: 2px;
`
const SubHeading = styled.p`
    font-size: 24px;
    font-family: monospace;
    letter-spacing: 1px;
    font-weight: 400;
`
export const Contact = () => {
    return (
        <>
            <Section>
                <Title>Contact Us</Title>
               <SocialMediaSection>
                <Facebook style={{fontSize:150, cursor:'pointer'}}/>
                <Instagram style={{fontSize:150, cursor:'pointer'}}/>
                <Twitter style={{fontSize:150, cursor:'pointer'}}/>
               </SocialMediaSection>
               <SubHeading>Reach Out To Let Us Know How We Are Doing On The Following Platforms</SubHeading>
            </Section>
        </>
    )
}