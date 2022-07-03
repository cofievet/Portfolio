import './Home.scss'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {

    return (
        <div className='container home-container' id='home'>
            <div className='home-title'>
                <div>Corentin Fiévet</div>
                <div>Ingénieur d'études Développeur .Net</div>
                <div>CDiscount</div>
            </div>

            <div>
                <FontAwesomeIcon className='navbar-link navbar-link-logo' icon={faAt} />
                <FontAwesomeIcon className='navbar-link navbar-link-logo' icon={faLinkedin} />
                <FontAwesomeIcon className='navbar-link navbar-link-logo' icon={faGithub} />
            </div>
        </div>
    )
}