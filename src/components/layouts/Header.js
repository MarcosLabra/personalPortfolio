import Hamburger from 'hamburger-react'
import NavBar from './NavBar'
import MobileMenu from './MobileMenu';
import { useState } from 'react';


const Header = () => {

    const [isOpen, setOpen] = useState(false);

    function handleClickMenu(toggled) {
        if (toggled) {
            document.getElementById('mobileMenu').classList.add('show');
        } else {
            document.getElementById('mobileMenu').classList.remove('show');
        }
    }

    function toggleState() {
        setOpen(false);
    }

    return (
        <>
            <header className='header'>
                <a href="/#cover">
                    <div className='header__brand'>
                        <img src="/images/corazonHeader.svg" alt="" />
                        <div className="header__brand--name">
                            <h1>Marcos <span>Labra</span></h1>
                            <h2>Front-End Developer</h2>
                        </div>
                    </div>
                </a>
                {window.innerWidth > 767 ? <NavBar /> : <Hamburger size={25} color="#ffffff" onToggle={handleClickMenu} toggled={isOpen} toggle={setOpen} />}
            </header>
            <MobileMenu toggleState={toggleState} />
        </>
    )
}

export default Header