import React, { useState, useEffect } from 'react';
import '../styles/SchedulePage.css';
import {
    FaClock,
    FaCalendarAlt,
    FaBook,
    FaLaptopCode,
    FaDatabase,
    FaShieldAlt,
    FaMobileAlt,
    FaBell,
    FaCalendarPlus
} from 'react-icons/fa';

const SchedulePage = () => {
    const [schedule, setSchedule] = useState([]);
    const [notification, setNotification] = useState(null);

    const courses = [
        { name: "Основи програмування", day: 1, time: "18:00", icon: <FaBook /> },
        { name: "Веб-розробка", day: 3, time: "18:00", icon: <FaLaptopCode /> },
        { name: "Data Science", day: 5, time: "18:00", icon: <FaDatabase /> },
        { name: "Машинне навчання", day: 2, time: "18:00", icon: <FaDatabase /> },
        { name: "Frontend розробка", day: 4, time: "18:00", icon: <FaLaptopCode /> },
        { name: "Backend розробка", day: 5, time: "16:00", icon: <FaLaptopCode /> },
        { name: "Кібербезпека", day: 2, time: "12:00", icon: <FaShieldAlt /> },
        { name: "Мобільна розробка", day: 3, time: "10:00", icon: <FaMobileAlt /> },
    ];

    const getDayName = (day) => {
        const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
        return days[day];
    };

    const addToCalendar = (lesson) => {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() + (lesson.day - startDate.getDay() + 7) % 7);
        const [hours, minutes] = lesson.time.split(':');
        startDate.setHours(hours, minutes, 0, 0);

        const endDate = new Date(startDate);
        endDate.setHours(startDate.getHours() + 2);

        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(lesson.name)}&dates=${formatDateForGoogle(startDate)}/${formatDateForGoogle(endDate)}&details=${encodeURIComponent(`Заняття: ${lesson.name}`)}&location=Online&sf=true&output=xml`;

        window.open(googleCalendarUrl, '_blank');
    };

    const formatDateForGoogle = (date) => {
        return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
    };

    const setReminder = (lesson) => {
        setNotification(`Нагадування про "${lesson.name}" у ${lesson.time} ${lesson.dayName} додано!`);
        setTimeout(() => setNotification(null), 3000);

        // Тут можна додати реальний код для нагадування через Email API
        console.log(`Reminder set for ${lesson.name} at ${lesson.time} on ${lesson.dayName}`);
    };

    const updateSchedule = () => {
        const now = new Date();
        const currentDay = now.getDay();
        const currentTime = now.getHours() * 60 + now.getMinutes();

        const getNextLessons = (courses, currentDay, currentTime) => {
            const nextLessons = [];

            for (let i = 0; i < 7; i++) {
                const day = (currentDay + i) % 7;
                const dayName = getDayName(day);

                const lessonsForDay = courses
                    .filter(course => course.day === day)
                    .map(course => {
                        const [hours, minutes] = course.time.split(':');
                        const lessonTime = parseInt(hours) * 60 + parseInt(minutes);
                        return { ...course, dayName, lessonTime };
                    })
                    .filter(course => {
                        if (i === 0) return course.lessonTime >= currentTime;
                        return true;
                    })
                    .sort((a, b) => a.lessonTime - b.lessonTime);

                nextLessons.push(...lessonsForDay);
                if (nextLessons.length >= 8) break;
            }

            return nextLessons.slice(0, 8);
        };

        const nextLessons = getNextLessons(courses, currentDay, currentTime);
        setSchedule(nextLessons);
    };

    useEffect(() => {
        updateSchedule();
        const interval = setInterval(updateSchedule, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section-schedule">
            <div className="schedule-background"></div>
            <div className="schedule-container">
                <div className="schedule-header">
                    <h1 className="schedule-title">Розклад занять</h1>
                    <p className="schedule-subtitle">
                        Найближчі заняття, що чекають на вас. Оберіть курс та приєднуйтесь до навчання!
                    </p>
                </div>

                {notification && (
                    <div className="notification-banner">
                        {notification}
                    </div>
                )}

                <div className="schedule-grid">
                    {schedule.map((lesson, index) => (
                        <div className="schedule-card" key={index}>
                            <div className="wave-effect"></div>
                            <div className="card-content">
                                <div className="card-header">
                                    <div className="card-icon">
                                        {lesson.icon}
                                    </div>
                                    <div>
                                        <h3 className="card-title">{lesson.name}</h3>
                                        <span className="card-day">{lesson.dayName}</span>
                                    </div>
                                </div>

                                <div className="card-time-wrapper">
                                    <div className="card-time">
                                        <div className="time-text">
                                            <FaClock style={{ marginRight: '10px' }} />
                                            {lesson.time}
                                        </div>
                                        <div className="card-actions">
                                            <div className="tooltip">
                                                <button
                                                    className="calendar-btn"
                                                    onClick={() => addToCalendar(lesson)}
                                                    aria-label="Додати до календаря"
                                                >
                                                    <FaCalendarPlus />
                                                </button>
                                                <span className="tooltiptext">Додати до календаря</span>
                                            </div>
                                            <div className="tooltip">
                                                <button
                                                    className="notification-btn"
                                                    onClick={() => setReminder(lesson)}
                                                    aria-label="Нагадування"
                                                >
                                                    <FaBell />
                                                </button>
                                                <span className="tooltiptext">Нагадування</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-decoration"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SchedulePage;