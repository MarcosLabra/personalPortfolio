const Footer = () => {
  return (
    <footer>
      <div className="credits">
        <p>dev by</p>
        <h4>Marcos <span>LABRA</span></h4>
      </div>
      <div className="social">
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