import { faCrosshairs } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Studies.scss"

export default function Studies() {
    return (<div id="studies" className="container">
        <div className="title">
            Etudes
        </div>

        <div className="timeline-container">
            <div className="timelines">
                <div className="timeline">
                    <div className="timeline-number"></div>
                    <div className="timeline-info">
                        <p className="timeline-title">Master Sécurité des Systèmes d'Information (SSI), Informatique</p>
                        <div className="timeline-company">
                            <FontAwesomeIcon icon={faCrosshairs} className="location-logo"></FontAwesomeIcon>
                            <span>Université Technologique de Troyes (UTT)</span>
                        </div>
                        <p className="timeline-duration">Septembre 2019 - Septembre 2021</p>
                    </div>
                </div>
                <div className="timeline">
                    <div className="timeline-number"></div>
                    <div className="timeline-info">
                        <p className="timeline-title">
                            Licence professionnelle<br />
                            Administration et Sécurité des Systèmes et des Réseaux<br />
                            Sécurité des Applications et des Réseaux Informatiques
                        </p>
                        <div className="timeline-company">
                            <FontAwesomeIcon icon={faCrosshairs} className="location-logo"></FontAwesomeIcon>
                            <span>Université de Lens (IUT)</span>
                        </div>
                        <p className="timeline-duration">Septemble 2018 - Septembre 2019</p>
                    </div>
                </div>
                <div className="timeline">
                    <div className="timeline-number"></div>
                    <div className="timeline-info">
                        <p className="timeline-title">DUT Informatique</p><div className="timeline-company">
                            <FontAwesomeIcon icon={faCrosshairs} className="location-logo"></FontAwesomeIcon>
                            <span>Université de Reims Champagne-Ardenne (URCA)</span>
                        </div>
                        <p className="timeline-duration">Septembre 2016 - Septembre 2018</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}