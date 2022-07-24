const Portfolio = () => {

    const freelance = [
        {
            title: "SantiagoDelEstero.Net",
            logo: "/images/portfolio/logos/sgoLogo.png",
            background: "/images/portfolio/backgrounds/santiago.png",
            url: "https://santiagodelestero-net.vercel.app/"
        },
        {
            title: "Thalamus centro de alto rendimiento",
            logo: "/images/portfolio/logos/ThalamusLogo.svg",
            background: "/images/portfolio/backgrounds/thalamus.png",
            url: "https://thalamusaltorendimiento.com/"
        },
        {
            title: "Coquere cocina",
            logo: "/images/portfolio/logos/coquereLogo.svg",
            background: "/images/portfolio/backgrounds/coquere.png",
            url: "http://cocinacoquere.com/"
        }
    ]

    const student = [
        {
            title: "El hombre illustrado",
            logo: "/images/portfolio/logos/elHombreIlustradoLogo.png",
            background: "/images/portfolio/backgrounds/elHombreIlustrado.png",
            url: "https://trabajo-final-dw.netlify.app/"
        },
        {
            title: "Corina Piercer",
            logo: "/images/portfolio/logos/corinalogo.png",
            background: "/images/portfolio/backgrounds/corina.png",
            url: "https://trabajofinal-js.netlify.app/"
        },
        {
            title: "Corina Piercer (react)",
            logo: "/images/portfolio/logos/corinaLogoReact.png",
            background: "/images/portfolio/backgrounds/corinaReact.png",
            url: "https://final-react-coder.netlify.app/"
        }
    ]

    return (
        <section id="portfolio" className="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio__container">
                <h3>Freelance Proyects</h3>
                <div className="portfolio__container--wrap">
                    {freelance.map(freelance => (
                        <div className="portfolio__container--proyect">
                            <img className="portfolio__container--proyect--img" src={freelance.background} alt={freelance.title} />
                            <div className="portfolio__container--proyect--description" >
                                <a href={freelance.url} target="_blank" rel="noreferrer">
                                    <img src={freelance.logo} alt={freelance.title} />
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
                <h3>Student Proyects</h3>
                <div className="portfolio__container--wrap">
                    {student.map(student => (
                        <div className="portfolio__container--proyect">
                            <img className="portfolio__container--proyect--img" src={student.background} alt={student.title} />
                            <div className="portfolio__container--proyect--description" >
                                <a href={student.url} target="_blank" rel="noreferrer">
                                    <img src={student.logo} alt={student.title} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Portfolio