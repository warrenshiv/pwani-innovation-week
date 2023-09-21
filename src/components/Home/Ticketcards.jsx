import React from 'react'
// import '../../assets/scss/theme.scss'
// import '../../assets/css/theme.css'
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import Groups2Icon from '@mui/icons-material/Groups2'

const Card = ({ ticketName, price, desc }) => {
  return (
    <div className='col-12 col-md-3 p-2 p-lg-4'>
      <div className='card rounded-0 border-0'>
        <div className='card-body p-0'>
          <div className='heading text-center p-3'>
            <h4 className='text-white mb-0'>{ticketName}</h4>
          </div>
          <div className='info p-3'>
            <div className='price-figure text-center mb-3'>
              <span className='currency'>KES </span>
              <span className='number'>{price}</span>
            </div>
            <div className='desc px-3'>{desc}</div>
          </div>
        </div>
        <div className='card-footer text-center'>
          <a
            href='https://afritickets.events/2270-pwani-innovation-week'
            className='btn btn-primary'
          >
            BUY NOW
          </a>
        </div>
      </div>
    </div>
  )
}

const Ticketcards = () => {
  return (
    <>
      {/* <!-- tickets --> */}
      <section
        id='tickets-section'
        className='tickets-section section theme-bg-light'
      >
        <div className='container'>
          <h3 className='section-heading text-center mb-3'>Tickets</h3>
          <div className='section-intro single-col-max mx-auto text-center mb-4'>
            Select a Package that suits you or your Organization
            <br />
            Having troubles Or need help? Contact our{' '}
            <a className='theme-link' href='mailto:jackie@swahilipothub.co.ke'>
              admin
            </a>{' '}
            or{' '}
            <a className='theme-link' href='mailto:dev@swahilipothub.co.ke'>
              developers
            </a>
          </div>

          <div className='row pricing mb-5'>
            <Card
              ticketName='Delegates: Week Pass'
              price={25000}
              desc='This ticket gives all access to the whole event'
            />
            <Card
              ticketName='Delegates: Day Pass'
              price={5000}
              desc='This ticket gives all access to the whole event for 1 day'
            />
            <Card
              ticketName='Students: Week Pass'
              price={2500}
              desc='This ticket gives all access to the whole event'
            />
            <Card
              ticketName='Students: 1 Day Pass'
              price={500}
              desc='This ticket gives all access to the whole event for 1 day'
            />
          </div>
          <div className='offers text-center bg-white p-4 p-lg-5'>
            <h4 className='mb-3'>What's included?</h4>
            <ul className='offers-list list-unstyled d-inline-block mx-auto text-start'>
              <li>
                <span className='icon-holder me-2'>
                  <PortraitOutlinedIcon />
                </span>
                60+ talks from industry-leading speakers
              </li>
              <li>
                <span className='icon-holder me-2'>
                  <Groups2Icon />
                </span>
                Access to 40+ workshops
              </li>
              <li>
                <span className='icon-holder me-2'>
                  <RestaurantIcon />
                </span>
                FREE drinks, refreshments and lunch
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ticketcards
