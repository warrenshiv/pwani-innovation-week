import { Link } from 'react-router-dom'

const Speakers = () => {
  return (
    <div>
      Speakers
      <Link to='/'>Home</Link> {' | '}
      <Link to='/speakers'>Speakers</Link> {' | '}
      <Link to='/schedule'>About</Link>
      <br />
    </div>
  )
}

export default Speakers
