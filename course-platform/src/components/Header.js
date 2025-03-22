import React from 'react';
import '../styles/header.css'; // Імпортуємо стилі для хедера

// Імпортуємо Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendarAlt, faUserCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <header>
            <div className="container">
                <a href="/" className="logo-link">
                    <img src="/images/logo.png" alt="Логотип" className="logo" />
                </a>
                <h1>SkillHub</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/courses">
                                <FontAwesomeIcon icon={faGraduationCap} className="nav-icon" /> {/* Іконка для курсів */}
                            </a>
                        </li>
                        <li>
                            <a href="/schedule">
                                <FontAwesomeIcon icon={faCalendarAlt} className="nav-icon" /> {/* Іконка для розкладу */}
                            </a>
                        </li>
                        <li>
                            <a href="/account">
                                <FontAwesomeIcon icon={faUserCircle} className="nav-icon" /> {/* Іконка для кабінету */}
                            </a>
                        </li>
                        <li>
                            <a href="/about">
                                <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" /> {/* Іконка для "Про нас" */}
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="social-icons">
                    <a className="social-link1" href="https://www.instagram.com/tipa_orko_/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="social-icon" /> {/* Іконка Instagram */}
                    </a>
                    <a className="social-link2" href="https://www.facebook.com/zelenskyy.official/?locale=uk_UA" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="social-icon" /> {/* Іконка Facebook */}
                    </a>
                    <a className="social-link3" href="https://vm.tiktok.com/ZMBrTN3Gg/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTiktok} className="social-icon" /> {/* Іконка TikTok */}
                    </a>
                    <a className="social-link4" href="https://t.me/Orko223" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTelegram} className="social-icon" /> {/* Іконка Telegram */}
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;