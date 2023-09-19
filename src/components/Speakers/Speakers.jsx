import React from 'react'
import '../../assets/scss/theme.scss'
import '../../assets/css/theme.css'
import { speakers } from '../../data/constants'

function SpeakerList(){
  return (
      <div className="row">
          <ul>
              {speakers.map((speakers) => (
                  <li key={speakers.id}>{speakers.name}{/*- {speakers.organization}*/}</li>
              ))}
          </ul>
      </div>
  );
}

const Speakers = () => {
  return (
    <>
      {/* <!-- Speakers Images --> */}
      <section id='speakers-section' className='speakers-section section'>
        <div class='container'>
          <h3 className='section-heading text-center mb-3'>Speakers</h3>
          <div className='section-intro text-center single-col-max mx-auto mb-5'>
            Our Curated list of Speakers for the Pwani Innovation Week 2023
          </div>
          <div className='row row-cols-3'>
            {speakers.length > 0 ? (
              <SpeakerList/>
            ) : (
              <h4 className='text-center py-5 text-muted'>
                Our Speaker List is getting Ready, we will update soon!
              </h4>
            )}
          </div>
          {/* <!--//row--> */}
          <div className='speakers-cta text-center py-3'>
            <a
              className='btn btn-primary btn-lg'
              href='https://afritickets.events/2270-pwani-innovation-week'
            >
              Get Tickets
            </a>
          </div>
        </div>
        {/* <!--//container--> */}
      </section>
      {/* <!--//speakers-section--> */}

      <div className='container'>
        <hr />
      </div>
    </>
  )
}

export default Speakers;
