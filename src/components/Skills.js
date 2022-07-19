const Skills = () => {
    const skills =
        [
            {
                title: "HTML5",
                img: "/images/skills/html5.svg",
            },
            {
                title: "CSS3",
                img: "/images/skills/css3.svg",
            },
            {
                title: "SASS",
                img: "/images/skills/sass.svg",
            },
            {
                title: "JavaScript",
                img: "/images/skills/javascript.svg",
            },
            {
                title: "React",
                img: "/images/skills/react.svg",
            },
            {
                title: "Node.JS",
                img: "/images/skills/node.svg",
            },
            {
                title: "Git",
                img: "/images/skills/git.svg",
            },
            {
                title: "PhotoShop",
                img: "/images/skills/photoshop.svg",
            },
            {
                title: "Adobe XD",
                img: "/images/skills/adobeXD.svg",
            },
            {
                title: "Figma",
                img: "/images/skills/figma.svg",
            }
        ]


    return (
        <section className="skills">
            <h2>Skills</h2>
            <div className="skills__container">
                {skills.map(skill => {
                    return (
                        <div className="skills__container--skill">
                            <h3>{skill.title}</h3>
                            <img src={skill.img} alt={skill.title} />
                        </div>
                    )
                }
                )}
            </div>

        </section>
    )
}

export default Skills