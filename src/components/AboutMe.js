const AboutMe = () => {
    const cualities =
        [
            {
                title: "/*Creative*/",
                description: "With the music as my basal skill,I always strive to think  outside  the box,to find balance between beauty and performance"
            },
            {
                title: "<-FastLerner->",
                description: "Driven by curiosity, being acquainted with the feeling that there's always something to learn. after several carreers done, I'm confident to say that new knowledge is always welcomed"
            },
            {
                title: "//Team-worker",
                description: "since my early jobs, I always work as a team, either teaching, jamming, creating or assisting someone, two heads always thinks  better than one"
            },
            {
                title: "<Commited/>",
                description: "As and empathic being, I undertand that when endeavor is undertaken is crucial to go through all the process, for respect to each other, and to the project"
            }
        ]

    return (
        <section id="aboutMe" className="aboutMe">
            <h2>About Me</h2>
            <div className="aboutMe__container">
                {cualities.map((cuality) => {
                    return (
                        <div className="aboutMe__cuality">
                            <h3>{cuality.title}</h3>
                            <div className="aboutMe__cuality--description">
                                <p>{cuality.description}</p>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            <a download={"MLabra-CV"} href="https://drive.google.com/uc?id=1Xdamg2FcTNiZqvuqIm4kdi8DfJPue8p8&export=download&authuser=0">
                <img src="/images/download-solid.svg" alt="" />
                <p>Download CV</p>
            </a>
        </section>
    )
}

export default AboutMe