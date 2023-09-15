import React, { useEffect, useState } from 'react'
import "../../assets/scss/theme.scss"
import "../../assets/css/custom.css"
import "../../assets/css/theme.css"
// import countdownTime from '../../assets/js/main.js'
// import timer from "../../assets/js/main.js"
// import "../../assets/js/main.js"


const About = () => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2023-10-2').getTime(); // Replace with your target date
    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const secondsLeft = (targetDate - currentDate) / 1000;

      const daysCount = Math.floor(secondsLeft / 86400);
      const hoursCount = Math.floor((secondsLeft % 86400) / 3600);
      const minutesCount = Math.floor((secondsLeft % 3600) / 60);
      const secondsCount = Math.floor(secondsLeft % 60);

      setDays(daysCount);
      setHours(hoursCount);
      setMinutes(minutesCount);
      setSeconds(secondsCount);
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
   <>
    {/* <!-- About Sesion --> */}
    <section id="about-section" className="about-section section theme-bg-light">
      <div className="container">
        <h3 className="section-heading text-center mb-3">
          About Pwani Innovation Week
        </h3>
        <div className="section-intro single-col-max mx-auto mb-4">
          Pwani Innovation Week is a consolidated effort by
          <a href="https://www.swahilipothub.co.ke/" target="_blank"
            >Swahilipot Hub Foundation</a
          >
          and its partners to help create a widespread culture of innovation and
          stimulate the innovation ecosystem in the coastal (pwani)region of
          eastern Africa.

          <br />
          <br />
          <strong>
            Swahilipot Hub Foundation (SPH) is dedicated to supporting youth in
            overcoming challenges and thriving.
          </strong>

          Through strategic partnerships with communities, government entities,
          SOs, and local leaders, the foundation leverages the strengths and
          diversity of individuals from all backgrounds to empower young people
          and enhance their quality of life. With a strong commitment to
          inclusivity, cooperation, self-reliance, and respect for diversity,
          the foundation allows young individuals to take charge of their
          journey, while making long-term investments, forging partnerships, and
          fostering a vibrant culture of youth engagement in all aspects of
          development.
        </div>

        {/* <!--//benefits-list--> */}
        <div className="event-countdown text-center mb-3">
          <h4 className="countdown-intro mb-2 text-center mb-3">
            Pwani Innovation Week 2023 Starts In:
          </h4>  
          <div id="countdown-box" class="countdown-box" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <div className="countdown-item" style={{margin:"5px 20px"}}>
              <span className="number">{days}</span>
              <br/>
              <span className="unit">Days</span>
            </div>
            <div className="countdown-item"style={{margin:"5px 20px"}}>
              <span className="number">{hours}</span>
              <br/>
              <span className="unit">Hrs</span>
            </div>
            <div className="countdown-item"style={{margin:"5px 20px"}}>
              <span className="number">{minutes}</span>
              <br/>
              <span className="unit">Mins</span>
            </div>
            <div className="countdown-item"style={{margin:"5px 20px"}}>
              <span className="number">{seconds}</span>
              <br/>
              <span className="unit">Secs</span>
            </div>
          </div>
        </div>
        {/* <!--//event-countdown--> */}
        <div className="about-cta text-center mb-5">
          <a
            className="btn btn-secondary btn-lg mb-5"
            href="https://afritickets.events/2270-pwani-innovation-week"
            target="_blank"
            >Get Your Ticket Today</a
          >
        </div>
      </div>
      {/* <!--//container--> */}

      <div className="media-block theme-bg-primary py-5">
        <div NameclassName="container">
            <h4 class="text-white text-center mb-3">Previously</h4>
          <div
            class="section-intro text-center single-col-max mx-auto text-white mb-5"
          >
            Have a look at our previous Pwani Innovation Week Videos and Snaps
          </div>
          <div className="row gx-md-5">
            <div className="col-12 col-md-6 mb-3">
            <div class="ratio ratio-16x9">
                <iframe
                  title='pre'
                  src="https://www.youtube.com/embed/vZkYJ5IZlJM?si=CwvlSL62DiR7-TDO"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              {/* <!--//embed-responsive --> */}
            </div>
            {/* <!--//col--> */}
            <div className="col-12 col-md-6 mb-md-5">
              <div className="ratio ratio-16x9">
                <iframe
                  title='pre'
                  // width={"30px"}
                  src="https://www.youtube.com/embed/BFcBapJeS5M?si=ERles6T64GgbvB3B"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              {/* <!--//embed-responsive --> */}
            </div>
            {/* <!--//col--> */}
          </div>
          {/* <!--//row--> */}
        </div>
        {/* <!--//container--> */}
      </div>
      {/* <!--//media-block--> */}
    </section>
    {/* <!--//about-section--> */}
   </>
  )
}

export default About