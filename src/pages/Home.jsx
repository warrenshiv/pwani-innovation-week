import Masthead from '../components/Home/Masthead'
import Statsblock from '../components/Home/Statsblock'
import About from '../components/Home/About'
import Speakers from '../components/Home/Speakers'
import Schedule from '../components/Home/Schedule'
import Ticketcards from '../components/Home/Ticketcards'
import Infosec from '../components/Home/Infosec'

const Home = () => {
  return (
    <>
      <Masthead />
      <Statsblock />
      <About />
      <Speakers />
      <Schedule />
      <Ticketcards />
      <Infosec />
    </>
  )
}

export default Home
