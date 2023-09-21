import React from 'react'
import { Link } from 'react-router-dom'
// import '../../assets/scss/theme.scss';
// import '../../assets/css/theme.css';
import { speakers } from '../../data/constants'

const SpeakerItem = ({ name, organization }) => {
  return (
    <div className='col-6 col-lg-3 mb-4'>
      <div className='card rounded-0'>
        <a
          href='#modal-speaker-1'
          data-bs-toggle='modal'
          data-bs-target='#modal-speaker-1'
        >
          {/* <img
            src='assets/images/speakers/speaker-2.jpg'
            className='card-img-top rounded-0'
            alt=''
          /> */}
        </a>
        <div className='card-body'>
          <h5 className='card-title mb-2'>{name}</h5>
          <div className='card-text mb-3'>
            <div className='meta'>{organization}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Speakers = () => {
  return (
    <>
      {/* <!-- Speakers Images --> */}
      <section id='speakers-section' className='speakers-section section'>
        <div className='container'>
          <h3 className='section-heading text-center mb-3'>Speakers</h3>
          <div className='section-intro text-center single-col-max mx-auto mb-5'>
            Our Curated list of Speakers for the Pwani Innovation Week 2023
          </div>
          <div className='row'>
            {speakers.length > 0 ? (
              speakers
                .slice(0, 12)
                .map((speaker) => (
                  <SpeakerItem
                    key={speaker.id}
                    name={speaker.name}
                    organization={speaker.organization}
                  />
                ))
            ) : (
              <h4 className='text-center py-5 text-muted'>
                Our Speaker List is getting Ready, we will update soon!
              </h4>
            )}
          </div>
          {/* <!--//row--> */}
          <div className='speakers-cta text-center py-3'>
            <Link to='/speakers' className='btn btn-primary btn-lg'>
              View All Speakers
            </Link>
          </div>
        </div>
      </section>
      <div className='container'>
        <hr />
      </div>
    </>
  )
}

export default Speakers
