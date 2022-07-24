import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.scss'


export default function Contact() {

    const age = () => {
        let today = new Date();
        let birthDate = new Date('02/03/1996');
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }


    return (
        <div id="contact" className='container contact-container'>
            <div className="title-container">
                <div className="title-logo" >
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </div>
                <span className="title">Contact</span>
            </div>
            <div className='contact-informations'>
                <span>Corentin Fiévet - 02/03/1996 - {age()} ans</span>
                <span>Permis A et B, véhiculés</span>
            </div>

            <div className="contact-links">
                <div className='contact-link'>
                    <FontAwesomeIcon className='contact-logo' icon={faAt}></FontAwesomeIcon>
                    <div className='contact-link-text'>
                        <span>:</span>
                        <a className='contact-link-text-a' href='mailto:cofievet@gmail.com'>cofievet@gmail.com</a></div>
                </div>
                <div className='contact-link'>
                    <FontAwesomeIcon className='contact-logo' icon={faLinkedin}></FontAwesomeIcon>
                    <div className='contact-link-text'>
                        <span>:</span>
                        <a className='contact-link-text-a' href='https://www.linkedin.com/in/corentin-fievet/' target="_blank" rel="noreferrer">linkedin/corentin-fievet</a></div>
                </div>
                <div className='contact-link'>
                    <FontAwesomeIcon className='contact-logo' icon={faGithub}></FontAwesomeIcon>
                    <div className='contact-link-text'>
                        <span>:</span>
                        <a className='contact-link-text-a' href='https://github.com/cofievet/' target="_blank" rel="noreferrer">github/corentin-fievet</a></div>
                </div>
            </div>
        </div>
    );
}