const Footer = () => {

  function handleClick() {
    document.querySelector('#mail').classList.toggle('show');
  }
  
  return (
    <footer>
      <div className="credits">
        <p>dev by</p>
        <h4>Marcos <span>LABRA</span></h4>
      </div>
      <div className="social">
        <div className="social__mail">
          <p id="mail">mlabra.dev@gmail.com</p>
          <img src="/images/mail.svg" alt="" onClick={handleClick}/>
        </div>
        <a href="https://github.com/MarcosLabra" target="_blank" rel="noreferrer">
          <img src="/images/social/gitCat.svg" alt="GitHub logo" />
        </a>
        <a href="https://www.linkedin.com/in/marcoslabra/" target="_blank" rel="noreferrer">
          <img src="/images/social/linkedIn.svg" alt="LinkedIn Logo" />
        </a>
      </div>
    </footer>
  )
}

export default Footer