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
                        <FontAwesomeIcon className='link-logo' icon={faAt} />
                        <FontAwesomeIcon className='link-logo' icon={faLinkedin} />
                        <FontAwesomeIcon className='link-logo' icon={faGithub} />
                    </div>
                </div>
            </div>

        </div>
    )
}