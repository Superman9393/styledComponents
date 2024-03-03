import Home from "./Pages/Home"
import styled from "styled-components"
import Navbar from "./components/Navbar"
import {About} from "./Pages/About.jsx";
import {Contact} from "./Pages/Contact.jsx";

const Conatiner = styled.div`
height:100vh;
scroll-behavior: smooth;
scroll-snap-type: y mandatory;
overflow-y: auto;

scrollbar-width: none;
&::-webkit-scrollbar{
    display: none;
}
background: blue;
`

function App() {


  return (
    <>
    <Conatiner>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
    </Conatiner>
    </>
  )
}

export default App
