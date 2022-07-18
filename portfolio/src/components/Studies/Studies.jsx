import { faCalendarDays, faGraduationCap, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Studies.scss"

export default function Studies() {
    return (<div id="studies" className="container">
        <div className="title-container">
            <div className="title-logo" >
                <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
            </div>
            <span className="title">Etudes</span>
        </div>

        <div className="timeline-container">
            <div className="timelines">
                <div className="timeline">
                    <div className="timeline-number"></div>
                    <div className="timeline-info">
                        <p className="timeline-title">Master Sécurité des Systèmes d'Information (SSI), Informatique</p>
                        <div className="timeline-company">
                            <FontAwesomeIcon icon={faLocationDot} className="location-logo"></FontAwesomeIcon>
                            <span>Université Technologique de Troyes (UTT)</span>
                        </div>
                        <div className="timeline-duration">
                            <FontAwesomeIcon icon={faCalendarDays} className="location-logo"></FontAwesomeIcon>
                            <span>Septembre 2019 - Septembre 2021</span>
                        </div>
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
                            <FontAwesomeIcon icon={faLocationDot} className="location-logo"></FontAwesomeIcon>
                            <span>Université de Lens (IUT)</span>
                        </div>
                        <div className="timeline-duration">
                            <FontAwesomeIcon icon={faCalendarDays} className="location-logo"></FontAwesomeIcon>
                            <span>Septembre 2019 - Septembre 2021</span>
                        </div>
                    </div>
                </div>
                <div className="timeline">
                    <div className="timeline-number"></div>
                    <div className="timeline-info">
                        <p className="timeline-title">DUT Informatique</p><div className="timeline-company">
                            <FontAwesomeIcon icon={faLocationDot} className="location-logo"></FontAwesomeIcon>
                            <span>Université de Reims Champagne-Ardenne (URCA)</span>
                        </div>
                        <div className="timeline-duration">
                            <FontAwesomeIcon icon={faCalendarDays} className="location-logo"></FontAwesomeIcon>
                            <span>Septembre 2019 - Septembre 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}