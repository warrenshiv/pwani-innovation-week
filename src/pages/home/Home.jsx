import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Masthead from '../../components/Masthead/Masthead'
import Statsblock from '../../components/Statsblock/Statsblock'
import About from '../../components/About/About'
import Speakers from '../../components/Speakers/Speakers'
import Schedule from '../../components/Schedule/Schedule'
import Ticketcards from '../../components/Ticketcards/Ticketcards'
import Infosec from '../../components/Infosect/Infosec'
import Footer from '../../components/Footer/Footer'
// import "../../assets/js/main.js"


const Home = () => {
  return (
    <>
        <Navbar/>
        <Masthead />
        <Statsblock />
        <About />
        <Speakers />
        <Schedule />
        <Ticketcards />
        <Infosec />
        <Footer />
    </>
  )
}

export default Home;