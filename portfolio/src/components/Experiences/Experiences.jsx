import "./Experiences.scss";

export default function Experiences() {
    return (
        <div id="experiences" className="container">
            <div className="title">
                Experiences
            </div>

            <div className="timeline-container">
                <div className="timelines">
                    <div className="timeline">
                        <div className="timeline-number">1</div>
                        <div className="timeline-info">
                            <p className="timeline-title">Ingénieur d’études Développeur backend .Net (C#)</p>
                            <p className="timeline-company">CDiscount - CDI - Bordeaux</p>
                            <p className="timeline-duration">Avril 2019 - Aujourd'hui</p>
                            <p className="timeline-text">
                                Intégration à l'équipe de développement en tant que développeur Backend dans l'équipe OPECO.<br />
                                L'équipe permet le mise en place des opérations commerciales et la gestion des soldes et black friday<br />
                                Les différents éléments de travail peuvent aller :
                                <ul>
                                    <li>Mise en place de nouvelles fonctionnalités (exemple : création de nouvelles opérations commerciales)</li>
                                    <li>Correction de bugs sur les assets existants</li>
                                    <li>Chantier technique (exemple : suppression de code legacy)</li>
                                    <li>Mise en place de tests (exemple : création de tests unitaires / fonctionnels)</li>
                                    <li>Déploiements des assets</li>
                                    <li>Réunions agiles (sprint planning, sprint review etc.)</li>
                                </ul>
                            </p>

                        </div>
                    </div>
                    <div className="timeline">
                        <div className="timeline-number">2</div>
                        <div className="timeline-info">
                            <p className="timeline-title">Ingénieur d’études Développeur Fullstack .Net (C#) & VueJs</p>
                            <p className="timeline-company">ALTEN - CDI - Sophia Antipolis</p>
                            <p className="timeline-duration">Août 2019 - Mars 2021</p>
                            <p className="timeline-text">
                                Intégration à l'équipe de développement en tant que développeur FullStack sur le projet ABACUS.<br />
                                Projet permettant le suivi des ventes de produits, de la réalisation de devis jusque la mise en production.<br />
                                Développement de nouvelles fonctionnalités, corrections de bugs, chantiers techniques, mise en place des tests, réunions agiles.<br />
                            </p>
                        </div>
                    </div>
                    <div className="timeline">
                        <div className="timeline-number">3</div>
                        <div className="timeline-info">
                            <p className="timeline-title">Développeur informatique Développeur Fullstack .Net (C#) & Razor MVC</p>
                            <p className="timeline-company">Axon Câble - CDD temps partiel - Reims</p>
                            <p className="timeline-duration">Avril 2019 - Aujourd'hui</p>
                            <p className="timeline-text">
                                Intégration à l'équipe de développement en tant que développeur web sur le projet AXOCARE.<br />
                                Projet permettant le suivi des patients des centres en médecine au travail.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}