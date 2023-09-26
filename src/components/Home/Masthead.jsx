// import "../../assets/css/custom.css"
// import "../../assets/css/theme.css"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { EmailRounded } from '@mui/icons-material'
import { PhoneAndroid } from '@mui/icons-material'

const Masthead = () => {
  return (
    <header className='masthead'>
      <div className='container h-100'>
        <div className='row h-100 align-items-center'>
          <div className='col-12 text-center'>
            <h1 className='fw-dark'>Pwani Innovation Week 2023</h1>
            <p class='lead'>
              <CalendarMonthOutlinedIcon className='mx-2' />2 - 6 Oct
              <LocationOnIcon className='mx-2' />
              Mombasa, Kenya
            </p>
            <p className='lead'>
              Sailing Beyond Borders: Empowering Youth in the Digital Economy
              for a Sustainable Future
            </p>
            <p class='lead'>
              <EmailRounded className='mx-2' />
              info@swahilipothub.co.ke
            </p>
            <p className='lead'>
              <PhoneAndroid className='mx-2' />+254 715 752 908
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Masthead
