/* eslint-disable react/jsx-no-target-blank */
import '../../assets/scss/theme.scss'
import '../../assets/css/custom.css'
import '../../assets/css/theme.css'
import PreviousPIW from './PreviousPIW'
import AboutSection from './AboutSection'
// import countdownTime from '../../assets/js/main.js'
// import timer from "../../assets/js/main.js"
// import "../../assets/js/main.js"

const About = () => {
  return (
    <section
      id='about-section'
      className='about-section section theme-bg-light'
    >
      <AboutSection />
      <PreviousPIW />
    </section>
  )
}

export default About
