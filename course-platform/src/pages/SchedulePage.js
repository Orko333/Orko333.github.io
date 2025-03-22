import React, { useState, useEffect } from 'react';
import '../styles/SchedulePage.css'; // Імпортуємо стилі

const SchedulePage = () => {
    const [schedule, setSchedule] = useState([]);

    // Дані про курси
    const courses = [
        { name: "Основи програмування", day: 1, time: "18:00" }, // Понеділок (1)
        { name: "Веб-розробка", day: 3, time: "18:00" },        // Середа (3)
        { name: "Data Science", day: 5, time: "18:00" },        // П'ятниця (5)
        { name: "Машинне навчання", day: 2, time: "18:00" },    // Вівторок (2)
        { name: "Frontend розробка", day: 4, time: "18:00" },   // Четвер (4)
        { name: "Backend розробка", day: 5, time: "16:00" },    // П'ятниця (5)
        { name: "Кібербезпека", day: 2, time: "12:00" },        // Вівторок (2)
        { name: "Мобільна розробка", day: 3, time: "10:00" },   // Середа (3)
    ];

    // Функція для оновлення розкладу
    const updateSchedule = () => {
        const now = new Date();
        const currentDay = now.getDay(); // День тижня (0 - неділя, 1 - понеділок, ..., 6 - субота)
        const currentTime = now.getHours() * 60 + now.getMinutes(); // Поточний час у хвилинах

        // Функція для перетворення дня тижня в назву
        const getDayName = (day) => {
            const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
            return days[day];
        };

        // Функція для фільтрації та сортування занять
        const getNextLessons = (courses, currentDay, currentTime) => {
            const nextLessons = [];

            // Додати заняття на сьогодні та наступні дні
            for (let i = 0; i < 7; i++) { // Перевіряємо наступні 7 днів
                const day = (currentDay + i) % 7; // День тижня (0-6)
                const dayName = getDayName(day);

                // Фільтруємо заняття для поточного дня
                const lessonsForDay = courses
                    .filter(course => course.day === day)
                    .map(course => {
                        const [hours, minutes] = course.time.split(':');
                        const lessonTime = parseInt(hours) * 60 + parseInt(minutes); // Час заняття у хвилинах
                        return { ...course, dayName, lessonTime };
                    })
                    .filter(course => {
                        // Якщо це сьогодні, відфільтрувати заняття, які ще не почалися
                        if (i === 0) {
                            return course.lessonTime >= currentTime;
                        }
                        return true; // Для наступних днів додаємо всі заняття
                    })
                    .sort((a, b) => a.lessonTime - b.lessonTime); // Сортуємо за часом

                nextLessons.push(...lessonsForDay);

                // Зупинитися, якщо знайдено достатньо занять
                if (nextLessons.length >= 5) break;
            }

            // Повернути перші 5 занять
            return nextLessons.slice(0, 5);
        };

        // Отримати наступні 5 занять
        const nextLessons = getNextLessons(courses, currentDay, currentTime);
        setSchedule(nextLessons);
    };

    // Оновлення розкладу при завантаженні сторінки
    useEffect(() => {
        updateSchedule();
        const interval = setInterval(updateSchedule, 60000); // Оновлювати розклад кожну хвилину
        return () => clearInterval(interval); // Очистити інтервал при видаленні компонента
    }, []);

    return (
        <section className="section-schedule">
            <div className="container">
                <ul className="schedule-list">
                    {schedule.map((lesson, index) => (
                        <li key={index}>
                            <strong>{lesson.name}:</strong> {lesson.dayName}, {lesson.time}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SchedulePage;