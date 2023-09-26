import React from 'react'
// import '../../assets/scss/theme.scss'
import one from '../../assets/images/venue/1.JPG'
import two from '../../assets/images/venue/2.jpg'
import three from '../../assets/images/venue/3.jpg'
import four from '../../assets/images/venue/4.jpg'
import BM from '../../assets/images/sponsors/4BM-Logo-1.png'
import CR from '../../assets/images/sponsors/Charlene Ruto.png'
import CA from '../../assets/images/sponsors/Communications-Authority-Of-Kenya-Logo.png'
import FA from '../../assets/images/sponsors/French ambassador.png'
import GDI from '../../assets/images/sponsors/GDI.png'
import GOYN from '../../assets/images/sponsors/GOYN-MOMBASA_.png'
import Huawei from '../../assets/images/sponsors/Huawei.png'
import ICTA from '../../assets/images/sponsors/ICT authoruty.png'
import JYP from '../../assets/images/sponsors/Jumuiya ya Pwani.png'
import Kenivest from '../../assets/images/sponsors/Kenivest-Logo.png'
import Konza from '../../assets/images/sponsors/Konza.png'
import LT from '../../assets/images/sponsors/LIQUID technologies.png'
import MIK from '../../assets/images/sponsors/Ministry of ict kenya.png'
import MCL from '../../assets/images/sponsors/Mombasa county logo.png'
import Ppearl from '../../assets/images/sponsors/Pure pearl.png'
// import Tprimary from  "../../assets/images/sponsors/Tactive-Primary-.png"
import CL from '../../assets/images/sponsors/cisco-logo.png'
import CTG from '../../assets/images/sponsors/closethegap_.png'
import innovus from '../../assets/images/sponsors/innovus.png'
import keniaLogo from '../../assets/images/sponsors/kenia-Logo.png'
import redcross from '../../assets/images/sponsors/redcross.png'
import swahilipot from '../../assets/images/sponsors/swahilipot.png'
import tactive from '../../assets/images/sponsors/tactive.png'
// import TUL from  "../../assets/images/sponsors/taifa unga logo.png"
import taifa from '../../assets/images/sponsors/taifa.png'
import kcic from "../../assets/images/sponsors/KCIC_Logo.png"
import techkidz from "../../assets/images/sponsors/TechKidzAfrica_Logo.png"
import TwitterTimeline from '../x-plugin/tweet_embed'
// import "../../assets/scss/theme.scss"
// import '../../assets/css/theme.css'

const Infosec = () => {
  //     const sponsorsImages = [
  //         BM,CR,CA,FA,GDI,
  // GOYN,Huawei,ICTA,JYP,Kenivest,Konza,LT,MIK,MCL,Ppearl,Tprimary,CL,CTG,innovus,keniaLogo,redcross,swahilipot,
  // tactive,TUL,taifa,
  //     ]
  return (
    <>
      {/* <!-- venue --> */}
      <section
        id='venue-section'
        className='venue-section section theme-bg-primary text-white'
      >
        <div className='container'>
          <h3 className='section-heading text-center mb-2 text-white'>Venue</h3>
          <h5 className='text-center mb-5 text-white'>
            Swahilipot Hub Foundation
          </h5>
          <div className='row gx-5 py-lg-5'>
            <div className='col-12 col-lg-7 h-100'>
              <div className='desc'>
                <h4 className='text-white mb-3'>How To Get Here</h4>
                <p>
                  Traveling to Mombasa, Kenya, can be done by air, road, or
                  rail/bus. For air travel, book a flight to Moi International
                  Airport, ensuring your passport and visa (if required) are
                  valid. Prepare your luggage and clear immigration and customs
                  upon arrival. If traveling by road, plan your route, ensure
                  your vehicle and documents are in order, and pack essentials.
                  For rail/bus travel, purchase tickets, check timetables, and
                  pack your belongings.
                </p>

                <div className='card'>
                  <iframe
                    title='vdeo'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7893833802714!2d39.67731977508095!3d-4.063306044967721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840131ba0153b67%3A0x75a36ee817c3f38b!2sSwahilipot%20Hub!5e0!3m2!1sen!2ske!4v1694372016736!5m2!1sen!2ske'
                    height='450'
                    style={{ border: 0 }}
                    allowfullscreen=''
                    loading='lazy'
                    referrerpolicy='no-referrer-when-downgrade'
                  ></iframe>
                </div>
                {/* <!--//row--> */}
                <h4 className='text-white mb-4 mt-3 mt-lg-5'>
                  Facilities &amp; Accommodations
                </h4>
                <p>
                  Mombasa offers a wide range of facilities and accommodations
                  to cater to the needs and preferences of its visitors. Along
                  its stunning coastline, you'll find a plethora of beachfront
                  resorts and hotels, each offering luxurious amenities,
                  breathtaking views, and direct access to pristine beaches. For
                  those seeking a more budget-friendly option, there are
                  numerous guesthouses, hostels, and vacation rentals in and
                  around the city center, providing comfortable and affordable
                  stays
                </p>
                <a className='btn btn-ghost' href='#a'>
                  Get Assistance
                </a>
              </div>
              {/* <!--//desc--> */}
            </div>
            {/* <!--//col--> */}
            <div className='col-12 col-xl-3 col-lg-4 offset-lg-1 position-relative h-100 mt-5 mt-lg-0'>
              <div className='figures-holder'>
                <div className='figure figure-1'>
                  <img className='shadow' src={one} alt='' />
                </div>
                <div className='figure figure-2'>
                  <img className='shadow' src={two} alt='' />
                </div>
                <div className='figure figure-3'>
                  <img className='shadow' src={three} alt='' />
                </div>
                <div className='figure figure-4'>
                  <img className='shadow' src={four} alt='' />
                </div>
              </div>
              {/* <!--//figures-holder--> */}
            </div>
            {/* <!--//col--> */}
          </div>
          {/* <!--//row--> */}
        </div>
        {/* <!--//container--> */}
      </section>
      {/* <!--//venue-section--> */}

      {/* <!--//sponsors-section--> */}
      <section id='sponsors-section' className='sponsors-section section'>
        <div className='container'>
          <h3 className='section-heading text-center mb-3'>
            Sponsors &amp; Partners
          </h3>
          <div className='section-intro text-center single-col-max mx-auto mb-5'>
            Our Supporters for the Pwani Innovation Week 2023
          </div>
          <div className='row logos justify-content-center'>
            {/* {
            sponsorsImages.map((item,i)=>(
                <div class="logo-item col-6 col-md-4 col-lg-2" key={i}>
                    <img src={item} alt="" />
                </div>
            ))
        } */}
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={swahilipot} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={BM} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={CR} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={CL} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={CTG} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={CA} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={FA} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={GDI} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={GOYN} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={Huawei} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={ICTA} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={innovus} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={JYP} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={keniaLogo} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={Kenivest} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={Konza} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={LT} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={MIK} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={MCL} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={Ppearl} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={redcross} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={tactive} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={taifa} height='100' width='100' alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={kcic} alt='' />
            </div>
            <div className='logo-item col-6 col-md-4 col-lg-2'>
              <img src={techkidz} alt='' />
            </div>
          </div>
          {/* <!--//row--> */}
          <div className='sponsors-cta text-center pt-5'>
            <a className='btn-primary btn btn-lg' href='#a'>
              Become A Sponsor
            </a>
          </div>
        </div>
        {/* <!--//container--> */}
        
        {/* Twitter Embed Section */}
        <TwitterTimeline/>
      </section>
    </>
  )
}

export default Infosec
