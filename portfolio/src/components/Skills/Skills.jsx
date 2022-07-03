import { faConfluence, faCss3, faGit, faHtml5, faJira, faJs, faReact, faSass, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Skills.scss'

export default function Skills() {
    return (
        <div id="skills" className="container">
            <div className="title">Skills</div>
            <div className="skills-container">
                <div className="skill">
                    <div className="skill-logo-container">
                        <FontAwesomeIcon className="skill-logo" icon={faHtml5} style={{ color: "#de6e3c" }}></FontAwesomeIcon>
                    </div>
                    <div className="skill-title">C#</div>
                </div>
                <div className="skill">
                    <div className="skill-logo-container">
                        <FontAwesomeIcon className="skill-logo" icon={faDatabase} style={{ color: "#de6e3c" }}></FontAwesomeIcon>
                    </div>
                    <div className="skill-title">SQL</div>
                </div>
                <div className="skill">
                    <div className="skill-logo-container">
                        <FontAwesomeIcon className="skill-logo" icon={faDatabase} style={{ color: "#de6e3c" }}></FontAwesomeIcon>
                    </div>
                    <div className="skill-title">MongoDb</div>
                </div>
            </div>
            <div className="skills-container">
                <div className="skill">
                    <div className="skill-logo-container">
                        <FontAwesomeIcon className="skill-logo" icon={faVuejs} style={{ color: "#64b687" }}></FontAwesomeIcon>
                        <FontAwesomeIcon className="skill-logo" icon={faReact} style={{ color: "#62d4fa" }}></FontAwesomeIcon>
                    </div>
                    <div className="skill-title">VueJS & ReactJs</div>
                </div>
                <div className="skill">
                    <div className="skill-logo-container">
                        <FontAwesomeIcon className="skill-logo" icon={faJs} style={{ color: "#f1de4f" }}></FontAwesomeIcon>
                    </div>
                    <div className="skill-title">Javascript</div>
                </div>
                <div className="skill">
                    <div className="skill-logo-container">
                        <FontAwesomeIcon className="skill-logo" icon={faHtml5} style={{ color: "#de6e3c" }}></FontAwesomeIcon>
                        <FontAwesomeIcon className="skill-logo" icon={faCss3} style={{ color: "#53a7dc" }}></FontAwesomeIcon>
                    </div>
                    <div className="skill-title">Html & Css</div>
                </div>
                <div className="skill">
                    <div className="skill-logo-container">
                        <FontAwesomeIcon className="skill-logo" icon={faSass} style={{ color: "#bf6b97" }}></FontAwesomeIcon>
                    </div>
                    <div className="skill-title">Sass</div>
                </div>
            </div>
            <div className="skills-container">
                <div className="skill">
                    <div className="skill-logo-container">
                        <FontAwesomeIcon className="skill-logo" icon={faJira} style={{ color: "#0065ff" }}></FontAwesomeIcon>
                        <FontAwesomeIcon className="skill-logo" icon={faConfluence} style={{ color: "#0065ff" }}></FontAwesomeIcon>
                    </div>
                    <div className="skill-title">Jira & Confluence</div>
                </div>
                <div className="skill">
                    <div className="skill-logo-container">
                        <FontAwesomeIcon className="skill-logo" icon={faGit}></FontAwesomeIcon>
                    </div>
                    <div className="skill-title">Git</div>
                </div>
            </div>
        </div >
    )
}