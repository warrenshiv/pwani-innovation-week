import React from 'react'
// import "./Masthead.scss"
// import "../../assets/scss/theme.scss"
import "../../assets/css/custom.css"
import "../../assets/css/theme.css"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Masthead = () => {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center">  
          <div className="col-12 text-center">
            <h1 className="fw-dark">Pwani Innovation Week 2023</h1>
            <p class="lead">
              <CalendarMonthOutlinedIcon className='mx-2'/>2 - 6 Oct
              <LocationOnIcon className='mx-2'/>Mombasa, Kenya
            </p>
            <p classNam="lead">
              Sailing Beyond Borders: Empowering Youth in the Digital Economy
              for a Sustainable Future
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Masthead