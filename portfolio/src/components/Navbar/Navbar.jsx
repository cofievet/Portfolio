import { faBook, faBriefcase, faDiagramProject, faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.scss'
import { Link } from 'react-scroll'

export default function Navbar() {

    let offset = -100

    return (
        <div className='navbar'>
            <div className='navbar-header'>
                <span className='navbar-name'>Corentin Fiévet</span>
                <span className='navbar-job'>Développeur Fullstak / .Net</span>
            </div>
            <div className="navbar-links-text">
                <Link activeClass='active' to="experiences" spy={true} smooth={true} offset={offset} isDynamic={true} className={'navbar-link'}>
                    <FontAwesomeIcon icon={faBriefcase} className="navbar-logo"></FontAwesomeIcon>
                    <span className='navbar-link-text'>CV</span>
                </Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={offset} isDynamic={true} className={'navbar-link'}>
                    <FontAwesomeIcon icon={faBook} className="navbar-logo"></FontAwesomeIcon>
                    <span className='navbar-link-text'>Compétences</span>
                </Link>
                <Link activeClass='active' to="studies" spy={true} smooth={true} offset={offset} isDynamic={true} className={'navbar-link'}>
                    <FontAwesomeIcon icon={faGraduationCap} className="navbar-logo"></FontAwesomeIcon>
                    <span className='navbar-link-text'>Etudes</span>
                </Link>
                <Link activeClass='active' to="projects" spy={true} smooth={true} offset={offset} isDynamic={true} className={'navbar-link'}>
                    <FontAwesomeIcon icon={faDiagramProject} className="navbar-logo"></FontAwesomeIcon>
                    <span className='navbar-link-text'>Projets</span>
                </Link>
                <Link activeClass='active' to="contact" spy={true} smooth={true} offset={offset} isDynamic={true} className={'navbar-link'}>
                    <FontAwesomeIcon icon={faEnvelope} className="navbar-logo"></FontAwesomeIcon>
                    <span className='navbar-link-text'>Contact</span>
                </Link>
            </div>
        </div >
    )

}