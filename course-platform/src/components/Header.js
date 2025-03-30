// Header.js
import React, { useState, useEffect } from 'react';
import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGraduationCap as faGraduationCapSolid,
    faCalendarAlt as faCalendarAltSolid,
    faUserCircle as faUserCircleSolid,
    faInfoCircle as faInfoCircleSolid,
    faSignInAlt
} from '@fortawesome/free-solid-svg-icons';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import AuthModal from './AuthModal';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeNav, setActiveNav] = useState(null);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Помилка при виході:', error);
        }
    };

    return (
        <>
            <header className={`glass-header ${scrolled ? 'scrolled' : ''}`}>
                <div className="header-container">
                    <div className="logo-title-wrapper">
                        <a href="/" className="logo-link">
                            <div className="logo-shine"></div>
                            <img src="/images/logo.png" alt="SkillHub" className="logo" />
                        </a>

                        <a href="/" className="site-title">
                            <h1>
                                <span className="title-gradient">Skill</span>
                                <span className="title-outline">Hub</span>
                            </h1>
                            <span className="title-subtext">Premium Learning</span>
                        </a>
                    </div>

                    <nav>
                        <ul>
                            {[
                                { icon: faGraduationCapSolid, text: 'Курси', link: '/courses' },
                                { icon: faCalendarAltSolid, text: 'Розклад', link: '/schedule' },
                                { icon: faUserCircleSolid, text: 'Кабінет', link: '/account' },
                                { icon: faInfoCircleSolid, text: 'Про нас', link: '/about' }
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        className={`nav-link ${activeNav === index ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveNav(index)}
                                        onMouseLeave={() => setActiveNav(null)}
                                    >
                                        <span className="nav-decorator"></span>
                                        <span className="nav-icon-wrapper">
                                            <FontAwesomeIcon icon={item.icon} />
                                        </span>
                                        <span className="nav-text">{item.text}</span>
                                    </a>
                                </li>
                            ))}

                            <li>
                                {user ? (
                                    <a
                                        href="#logout"
                                        className="nav-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLogout();
                                        }}
                                        onMouseEnter={() => setActiveNav(4)}
                                        onMouseLeave={() => setActiveNav(null)}
                                    >
                                        <span className="nav-decorator"></span>
                                        <span className="nav-icon-wrapper">
                                            <FontAwesomeIcon icon={faUserCircleSolid} />
                                        </span>
                                        <span className="nav-text">Вийти</span>
                                    </a>
                                ) : (
                                    <a
                                        href="#login"
                                        className={`nav-link ${activeNav === 4 ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShowAuthModal(true);
                                        }}
                                        onMouseEnter={() => setActiveNav(4)}
                                        onMouseLeave={() => setActiveNav(null)}
                                    >
                                        <span className="nav-decorator"></span>
                                        <span className="nav-icon-wrapper">
                                            <FontAwesomeIcon icon={faSignInAlt} />
                                        </span>
                                        <span className="nav-text">Увійти</span>
                                    </a>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="header-light"></div>
                <div className="header-particles"></div>
            </header>
            <div className="header-spacer"></div>

            <AuthModal
                show={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                onAuthSuccess={() => setShowAuthModal(false)}
            />
        </>
    );
}

export default Header;