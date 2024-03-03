import styled from "styled-components"
import {Avatar} from "@mui/material";
import {MenuOpen} from "@mui/icons-material";
import {Logout} from "@mui/icons-material";


import {useState} from "react";
import {Alert} from "@mui/material";
import anime from "../assets/anime.jpg"

const Container = styled.div`
    width: 100dvw;
    max-height: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: inherit;
    padding: 10px;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-size: 24px;
    font-weight: 500;
    
`
const Left = styled.div`
    display: flex;
    flex: .25;
    width: 100%;
    padding-left: 10px;
`
const Middle = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    font-family: Monaco;
    font-weight: 500;
    font-size: xx-large;
    justify-content: center;
`
const Right = styled.div`
    display: flex;
    flex:.25;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    padding-right:10px;
`

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const handleClick = (e)=>{
       e.preventDefault();
       setClicked((preValue)=>!preValue)
    }
    return (
    <Container>
        <Left>NMS</Left>
        <Middle>ZPRINTSLLC</Middle>
        <Right>
            {clicked?(<><Alert>you cliked me</Alert><MenuOpen/><Logout/></>):(<><MenuOpen onClick={handleClick}/> <Avatar/> <Logout/></>)}


        </Right>
    </Container>
  )
}

export default Navbar