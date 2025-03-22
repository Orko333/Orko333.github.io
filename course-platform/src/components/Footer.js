import React from 'react';
import '../styles/footer.css'; // Імпортуємо стилі для футера

function Footer() {
    return (
        <footer>
            <div className="container">
                <p>&copy; 2025 Платформа для навчальних курсів</p>
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
        </footer>
    );
}

export default Footer;