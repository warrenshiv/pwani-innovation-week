import { sponsors } from '../../data/constants'

const SponsorImages = ({ imageURL, sponsorName }) => {
  return (
    <div className='logo-item col-6 col-md-4 col-lg-2'>
      <img src={imageURL} alt={sponsorName} />
    </div>
  )
}

const SponsorSection = () => {
  return (
    <section id='sponsors-section' className='sponsors-section section'>
      <div className='container'>
        <h3 className='section-heading text-center mb-3'>
          Sponsors &amp; Partners
        </h3>
        <div className='section-intro text-center single-col-max mx-auto mb-5'>
          Our Supporters for the Pwani Innovation Week 2023
        </div>
        <div className='row logos justify-content-center'>
          <div className='logo-item col-6 col-md-4 col-lg-2'>
            {sponsors.map((sponsor) => (
              <SponsorImages
                key={sponsor.id}
                imageURL={sponsor.imageURL}
                sponsorName={sponsor.sponsor_name}
              />
            ))}
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
    </section>
  )
}

export default SponsorSection
