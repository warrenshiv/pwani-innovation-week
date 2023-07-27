import Link from 'next/link'

const NavBar = () => {
    return (
        <div className='container'>
            <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
                <Link href='/' legacyBehavior>
                    <a className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'>
                        <span className='fs-4'>Next.Js Starter</span>
                    </a>
                </Link>
                <ul className='nav nav-pills'>
                    <li className='nav-item'>
                        <Link href='/' legacyBehavior>
                            <a className='nav-link active' aria-current='page'>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/about' legacyBehavior>
                            <a className='nav-link'>About</a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <a
                            href='https://github.com/achingachris/nextjs-starter'
                            className='nav-link'
                            target='_blank'
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default NavBar
