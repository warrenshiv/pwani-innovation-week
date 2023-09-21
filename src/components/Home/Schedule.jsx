import { Link } from 'react-router-dom'

const Schedule = () => {
  return (
    <>
      <div className='container mt-5 mb-5'>
        <div className='card'>
          <div className='card-body text-center'>
            {' '}
            {/* Added text-center class */}
            <h5 className='card-title'>Pwani Innovation Week 2023</h5>
            <p className='card-text'>October 2nd - 6th</p>
            <Link to='/schedule' className='btn btn-primary'>
              Get the Whole Program Here
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Schedule
