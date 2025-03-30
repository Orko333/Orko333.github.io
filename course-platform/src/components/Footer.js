import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebook,
    faTiktok,
    faTelegram
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/images/logo.png" alt="SkillHub Logo" className="logo" />
                        <h3>SkillHub</h3>
                        <p>Преміальні навчальні курси з IT-технологій для вашого професійного розвитку</p>
                    </div>

                    <div className="footer-links">
                        <h4>Навігація</h4>
                        <ul>
                            <li><a href="/courses">Курси</a></li>
                            <li><a href="/schedule">Розклад</a></li>
                            <li><a href="/account">Кабінет</a></li>
                            <li><a href="/about">Про нас</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Контакти</h4>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>info@skillhub.com</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} />
                                <span>+380 12 345 6789</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Соціальні мережі</h4>
                        <div className="social-icons">
                            <a className="social-link1" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a className="social-link2" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a className="social-link3" href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                            <a className="social-link4" href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTelegram} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} SkillHub. Всі права захищені.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;