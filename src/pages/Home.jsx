import Masthead from '../components/Masthead/Masthead'
import Statsblock from '../components/Statsblock/Statsblock'
import About from '../components/About/About'
import Speakers from '../components/Speakers/Speakers'
import Schedule from '../components/Schedule/Schedule'
import Ticketcards from '../components/Ticketcards/Ticketcards'
import Infosec from '../components/Infosect/Infosec'
// import SponsorSection from '../../components/sponsor/SponsorSection'
// import "../../assets/js/main.js"

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
      {/* <SponsorSection /> */}
    </>
  )
}

export default Home
