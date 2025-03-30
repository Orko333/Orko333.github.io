import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
    const reasons = [
        {
            title: "Якісні матеріали",
            description: "Ми надаємо актуальні та структуровані матеріали, які допоможуть вам швидко опанувати нові навички.",
            icon: "📚"
        },
        {
            title: "Досвідчені викладачі",
            description: "Наші викладачі - це професіонали з багаторічним досвідом у своїх галузях.",
            icon: "👨‍🏫"
        },
        {
            title: "Гнучкий графік",
            description: "Ви можете навчатися у зручний для вас час, адже наші курси доступні онлайн.",
            icon: "⏱️"
        },
    ];
    const courses = [
        {
            title: "Основи програмування",
            level: "Початковий",
            duration: "4 тижні",
            instructor: "Алан Тьюринг",
            description: "Цей курс навчить вас основам програмування на Python. Ви дізнаєтеся про змінні, цикли, умовні оператори та функції.",
            icon: "🐍"
        },
        {
            title: "Веб-розробка",
            level: "Середній",
            duration: "6 тижнів",
            instructor: "Тім Бернерс-Лі",
            description: "Цей курс охоплює основи веб-розробки, включаючи HTML, CSS та JavaScript. Ви створите свій перший веб-сайт.",
            icon: "🌐"
        },
        {
            title: "Data Science",
            level: "Просунутий",
            duration: "8 тижнів",
            instructor: "Джон Сноу",
            description: "Цей курс навчить вас основам Data Science, включаючи роботу з даними, аналіз та візуалізацію за допомогою Python.",
            icon: "📊"
        },
    ];
    return (
        <div className="home-page">
            <section className="section-hero">
                <div className="container">
                    <h2>Ласкаво просимо на нашу платформу!</h2>
                    <p>
                        Навчайтеся з нами та отримуйте нові знання у сфері програмування,
                        веб-розробки, Data Science та багато іншого. Оберіть курс, який вас
                        цікавить, та розпочніть свою подорож у світ IT разом із нами.
                    </p>
                    <div className="cta-wrapper">
                        <a href="/courses" className="cta-button cta-primary">Переглянути всі курси</a>
                        <a href="/about" className="cta-button cta-secondary">Дізнатися більше</a>
                    </div>
                </div>
            </section>
            <section className="section-popular-courses">
                <div className="container">
                    <h2 className="section-title">Популярні курси</h2>
                    <div className="course-grid">
                        {courses.map((course, index) => (
                            <div className="course-card" key={index}>
                                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{course.icon}</div>
                                <h3>{course.title}</h3>
                                <p><strong>Рівень:</strong> {course.level}</p>
                                <p><strong>Тривалість:</strong> {course.duration}</p>
                                <p><strong>Викладач:</strong> {course.instructor}</p>
                                <p>{course.description}</p>
                                <a href="/courses" className="cta-button cta-primary">Детальніше</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section-about">
                <div className="container">
                    <h2 className="section-title">Чому обирають нас?</h2>
                    <div className="about-grid">
                        {reasons.map((reason, index) => (
                            <div className="about-card" key={index}>
                                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{reason.icon}</div>
                                <h3>{reason.title}</h3>
                                <p>{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;