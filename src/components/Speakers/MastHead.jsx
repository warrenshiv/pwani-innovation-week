import React from 'react'

const MastHead = () => {
  return (
    <header className='theme-bg-primary py-5'>
      <div className='container px-5'>
        <div className='row gx-5 align-items-center justify-content-center'>
          <div className='col-lg-8 col-xl-7 col-xxl-6'>
            <div className='my-5 text-center text-xl-start'>
              <h1 className='display-5 fw-bolder text-white mb-2'>
                Pwani Innovation Week 2023: Speakers
              </h1>
              <p className='lead fw-normal text-dark-50 mb-4'>
                Sailing Beyond Borders: Empowering Youth in the Digital Economy
                for a Sustainable Future
              </p>
              <div className='d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start'>
                <a
                  className='btn btn-dark btn-lg px-4 me-sm-3'
                  href='https://afritickets.events/2280-pwani-gat-talent'
                  target='_blank'
                  rel='noreferrer'
                >
                  Get Tickets
                </a>
              </div>
            </div>
          </div>
          <div className='col-xl-5 col-xxl-6 d-none d-xl-block text-center'>
            <img
              className='img-fluid rounded-3 my-5'
              src='https://dummyimage.com/600x400/343a40/6c757d'
              alt='...'
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MastHead
