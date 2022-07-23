const MobileMenu = ({ toggleState }) => {
    return (
        <section className="mobileMenu" id="mobileMenu">
            <div className="mobileMenu__nav">
                <h3>ABOUT ME</h3>
                <h3>SKILLS</h3>
                <h3>PORTFOLIO</h3>
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