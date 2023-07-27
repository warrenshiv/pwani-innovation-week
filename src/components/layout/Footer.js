const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='text-center text-capitalize'>
            next.js starter &copy; {year}
        </footer>
    )
}

export default Footer
