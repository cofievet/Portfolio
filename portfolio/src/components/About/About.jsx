import "./About.scss";

export default function About() {
    return (
        <div id="about" className="container">
            <div className="title">A propos de moi</div>
            <div className="about">
                <div className="citation">
                    <div>“Je crois que l’on apprend et que l’on progresse sans arrêt. Nous sommes sans cesse mis à l’épreuve." Ayrton Senna</div>
                </div>

                <div className="about-paragraph">
                    Depuis maintenant plusieurs années, j'ai eu la chance de travailler sur plusieurs projets dans des secteurs variés.
                    Axon Câble avec la santé au travail, Orange avec le commerce et maintenant CDiscount avec le secteur du E-commerce et un site grand public.
                    Qu'elles soit professionnelles ou personnelles, j'essaie toujours de tirer le maximum des expériences afin de comprendre et d'apprendre de ces opportunités.
                </div>

                <div className="about-paragraph">
                    Ce que j'ai pu apprendre de mes différentes expériences, l'équipe prime avant tout. Ensemble nous allons plus loin.
                    Que ce soit humainement ou techniquement, si l'ambiance et la cohésion sont présentes alors les projets iront de mieux.
                    L'entraide permet d'avancer.
                </div>

                <div className="about-paragraph">
                    Le challenge est l'un des éléments que je recherche en priorité. Il permet de me surpasser.
                    Les nouveaux défis sont pour moi une source de motivation.
                </div>

                <div>Grâce à ces différentes expériences, j'ai pu développer des compétences techniques et fonctionnelles :
                    <div className="about-skills-container">
                        <div className="about-skills-list">
                            <div className="about-skill">Développement backend</div>
                            <div className="about-skill">Développement web</div>
                            <div className="about-skill">Tests</div>
                            <div className="about-skill">Infrastructures</div>
                        </div>
                        <div className="about-skills-list">
                            <div className="about-skill">Méthodologie SCRUM</div>
                            <div className="about-skill">Contraintes de projets</div>
                        </div>
                    </div>
                </div>

                <div className="about-paragraph">
                    Travailler dans différentes équipes m'a permis d'apprendre la méthodologie agile, les contraintes d'un projet et la relation avec les métiers.
                    Je suis également passionné de nouvelles technologies et de sport automobile.
                </div>
            </div>
        </div>
    )
}