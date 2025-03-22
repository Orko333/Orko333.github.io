import React from 'react';
import '../styles/sections.css'; // Імпортуємо стилі для секцій
import '../styles/course-card.css'; // Імпортуємо стилі для карток курсів

function PopularCoursesSection() {
    const courses = [
        {
            title: "Основи програмування",
            level: "Початковий",
            duration: "4 тижні",
            instructor: "Іван Петренко",
        },
        {
            title: "Веб-розробка",
            level: "Середній",
            duration: "6 тижнів",
            instructor: "Олена Сидорова",
        },
        {
            title: "Data Science",
            level: "Просунутий",
            duration: "8 тижнів",
            instructor: "Андрій Іванов",
        },
    ];

    return (
        <section className="section-popular-courses">
            <div className="container">
                <h2>Популярні курси</h2>
                <div className="course-grid">
                    {courses.map((course, index) => (
                        <div className="course-card" key={index}>
                            <h3>{course.title}</h3>
                            <p><strong>Рівень:</strong> {course.level}</p>
                            <p><strong>Тривалість:</strong> {course.duration}</p>
                            <p><strong>Викладач:</strong> {course.instructor}</p>
                            <a href="/courses" className="cta-button">Детальніше</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PopularCoursesSection;