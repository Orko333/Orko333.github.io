import React from 'react';
import '../styles/sections.css'; // Імпортуємо стилі для секцій

function HeroSection() {
    return (
        <section className="section-hero">
            <div className="container">
                <h2>Ласкаво просимо на нашу платформу!</h2>
                <p>
                    Навчайтеся з нами та отримуйте нові знання у сфері програмування, веб-розробки, Data Science та багато іншого.
                    Оберіть курс, який вас цікавить, та розпочніть свою подорож у світ IT разом із нами.
                </p>
                <a href="/courses" className="cta-button">Переглянути всі курси</a>
            </div>
        </section>
    );
}

export default HeroSection;