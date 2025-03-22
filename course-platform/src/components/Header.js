import React from 'react';
import '../styles/header.css'; // Імпортуємо стилі для хедера

function Header() {
    return (
        <header>
            <div className="container">
                <h1>Платформа для навчальних курсів</h1>
                <nav>
                    <ul>
                        <li><a href="/">Головна</a></li>
                        <li><a href="/courses">Курси</a></li>
                        <li><a href="/schedule">Розклад занять</a></li>
                        <li><a href="/account">Мій кабінет</a></li>
                        <li><a href="/about">Про Нас</a></li>
                    </ul>
                </nav>
                <div className="social-icons">
                    <a className="social-link1" href="https://www.instagram.com/tipa_orko_/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/icons/instagram.png" alt="Instagram" />
                    </a>
                    <a className="social-link2" href="https://www.facebook.com/zelenskyy.official/?locale=uk_UA" target="_blank" rel="noopener noreferrer">
                        <img src="/images/icons/facebook.png" alt="Facebook" />
                    </a>
                    <a className="social-link3" href="https://vm.tiktok.com/ZMBrTN3Gg/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/icons/tiktok.png" alt="TikTok" />
                    </a>
                    <a className="social-link4" href="https://t.me/Orko223" target="_blank" rel="noopener noreferrer">
                        <img src="/images/icons/telegram.png" alt="Telegram" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;