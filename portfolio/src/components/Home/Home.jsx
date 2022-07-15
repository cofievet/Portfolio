import './Home.scss'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {

    return (
        <div className='container home-container' id='home'>
            <div className='home-presentation'>
                <div className='home-title'>
                    <div>Corentin Fiévet</div>
                    <div>Ingénieur d'études Développeur .Net</div>
                    <div className='home-company'>CDiscount</div>
                    <div className='logos-container'>
                        <a href='mailto:cofievet@gmail.com' className='home-logo-link' >
                            <FontAwesomeIcon icon={faAt} className="home-logo" />
                        </a>
                        <a href='https://www.linkedin.com/in/corentin-fievet/' target="_blank" rel="noreferrer" className='home-logo-link' >
                            <FontAwesomeIcon icon={faLinkedin} className="home-logo" />
                        </a>
                        <a href='https://github.com/cofievet' target="_blank" rel="noreferrer" className='home-logo-link' >
                            <FontAwesomeIcon icon={faGithub} className="home-logo" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}