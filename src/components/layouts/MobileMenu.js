const MobileMenu = ({ toggleState }) => {

    function handleClick() {
        if (document.getElementById('mobileMenu').classList.contains('show')) {
            document.getElementById('mobileMenu').classList.toggle('show');
        }
        toggleState();
    }

    return (
        <section className="mobileMenu" id="mobileMenu">
            <div className="mobileMenu__nav">
                <a href="/#aboutMe" onClick={handleClick} oncli>ABOUT ME</a>
                <a href="/#skills" onClick={handleClick}>SKILLS</a>
                <a href="/#portfolio"onClick={handleClick}>PORTFOLIO</a>
            </div>
            <div className="mobileMenu__social">
                <a href="https://github.com/MarcosLabra" target="_blank" rel="noreferrer">
                    <img src="/images/social/gitCat.svg" alt="GitHub logo" />
                </a>
                <a href="https://www.linkedin.com/in/marcoslabra/" target="_blank" rel="noreferrer">
                    <img src="/images/social/linkedIn.svg" alt="LinkedIn Logo" />
                </a>
            </div>
        </section>
    )
}

export default MobileMenu