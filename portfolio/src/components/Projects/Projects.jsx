import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Projects.scss'

export default function Projects() {
    return (
        <div id="projects" className="container">
            <div className="title-container">
                <div className="title-logo" >
                    <FontAwesomeIcon icon={faDiagramProject}></FontAwesomeIcon>
                </div>
                <span className="title">Projets</span>
            </div>

            <div className="projects-container">
                <div className="projects">
                    <div className="project">
                        <div className='header-inline'>
                            <div className='project-subtitle subtitle-inline'>Web Application</div>
                            <div>/</div>
                            <div className="project-title title-inline">GForce Racing</div>
                        </div>
                        <div className="bubble-skills">
                            <div className="bubble-skill">C#</div>
                            <div className="bubble-skill">.Net6</div>
                            <div className="bubble-skill">MongoDb</div>
                            <div className="bubble-skill">SQL</div>
                            <div className="bubble-skill">Microservices</div>
                        </div>
                        <div className="project-description">
                            Isdem diebus Apollinaris Domitiani gener, paulo ante agens palatii Caesaris curam, ad Mesopotamiam missus a socero per militares numeros immodice scrutabatur, an quaedam altiora meditantis iam Galli secreta susceperint scripta, qui conpertis Antiochiae gestis per minorem Armeniam lapsus Constantinopolim petit exindeque per protectores retractus artissime tenebatur.
                        </div>
                        <div className='buttons-container'>
                            <a href='https://github.com/' target="_blank" rel="noreferrer" className='button project-button '>GitHub</a>
                            <a href='https://github.com/' target="_blank" rel="noreferrer" className='button project-button '>Web App</a>
                        </div>
                    </div>

                    <div className="project">
                        <div className='header-inline'>
                            <div className='project-subtitle subtitle-inline'>Chrome extension</div>
                            <div>/</div>
                            <div className="project-title title-inline">Tab Manager</div>
                        </div>
                        <div className="bubble-skills">
                            <div className="bubble-skill">Javascript</div>
                            <div className="bubble-skill">ReactJs</div>
                        </div>
                        <div className="project-description">
                            Isdem diebus Apollinaris Domitiani gener, paulo ante agens palatii Caesaris curam, ad Mesopotamiam missus a socero per militares numeros immodice scrutabatur, an quaedam altiora meditantis iam Galli secreta susceperint scripta, qui conpertis Antiochiae gestis per minorem Armeniam lapsus Constantinopolim petit exindeque per protectores retractus artissime tenebatur.
                        </div>
                        <div className='buttons-container'>
                            <a href='https://github.com/' target="_blank" rel="noreferrer" className='button project-button '>GitHub</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}