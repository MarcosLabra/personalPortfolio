import Hamburger from 'hamburger-react'
import NavBar from './NavBar'


const Header = () => {

    return (
        <header className='header'>
            <div className='header__brand'>
                <img src="/images/corazonHeader.svg" alt="" />
                <div className="header__brand--name">
                    <h1>Marcos <span>Labra</span></h1>
                    <h2>Front-End Developer</h2>
                </div>
            </div>
            {window.innerWidth > 768 ? <NavBar /> : <Hamburger color="#fff" size={25} />}
        </header>
    )
}

export default Header