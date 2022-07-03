import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


import './Navbar.scss'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar-links-text">
                <a href='#home' className='navbar-link navbar-link-text'>Corentin Fiévet</a>
                <a href='#experiences' className='navbar-link navbar-link-text'>Experiences</a>
                <a href='#skills' className='navbar-link navbar-link-text'>Compétences</a>
                <a href='#studies' className='navbar-link navbar-link-text'>Etudes</a>
                <a href='#projects' className='navbar-link navbar-link-text'>Projets</a>
            </div>
            <div className='navbar-links-logo'>
                <FontAwesomeIcon className='navbar-link navbar-link-logo' icon={faAt} />
                <FontAwesomeIcon className='navbar-link navbar-link-logo' icon={faLinkedin} />
                <FontAwesomeIcon className='navbar-link navbar-link-logo' icon={faGithub} />
            </div>
        </div>
    )

}