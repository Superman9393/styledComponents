import styled from "styled-components"
import reactLogo from "../assets/react.svg"

const Container = styled.section`
  display:flex;
  height:100vh;
  scroll-snap-align: start;

`
const ContentSection = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;

`
const Left = styled.div`
display: flex;
flex: 1;
width: 100%;
flex-direction: column;
padding-left: 20px;
    
`
const Right = styled.div`
display: flex;
flex:1;
width: 100%;
height: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
    margin: 0;
    padding: 0%;
    font-size: 100px;
    font-weight: 700;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 2px;
    transition: all .5s ease-in;
 
`
const SubHeadingContent = styled.p`
    letter-spacing: 1px;
    line-height: 1.2rem;
    font-size: larger;
    font-weight: 500;
    color: white;
    font-family: monospace;
`
const Button = styled.button`
    border: 1px solid white;
    background-color: inherit;
    border-radius: 5px;
    color: white;
    transition: all .5s ease-in;
    @keyframes rumble{
      0%{-webkit-transform: rotate(0deg)}
      20%{-webkit-transform: translate(2px, 0px) rotate(-1deg);}
      40%{-webkit-transform: translate() rotate(1deg);}
      60%{-webkit-transform: translate() rotate(0deg);}
      80%{-webkit-transform: translate() rotate(1deg);}
      100%{-webkit-transform: translate() rotate(-1deg);}
    }
    &:hover{
        animation: rumble .02s infinite linear;
        color: lightblue;
        background-color: white;
    }
`

const Image = styled.img`
    width: 90%;
    height: 90%;
    border-radius: 5px;
    background-position: center;
    background-repeat: no-repeat;
    transition: all .5s ease-in;
    cursor: pointer;
    @keyframes rotation{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
    &:hover{
        animation: rotation 4s linear infinite;
    }
`
function Home() {
  return (
    <>
    <Container>
   
        <ContentSection>
            <Left>
                <Title>
                NEW MONARCHY STUDIOS
                </Title>
                <SubHeadingContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laudantium repellat dolor necessitatibus voluptatem earum nesciunt voluptatum fugit 
                    laboriosam soluta molestiae consequatur suscipit quas aperiam deleniti ullam recusandae, cum maiores nihil.
                </SubHeadingContent>
                <Button>Learn More</Button>
            </Left>
            <Right>
                <Image src={reactLogo} alt="raact"/>
    
            </Right>
        </ContentSection>
    </Container>
    </>
  )
}

export default Home