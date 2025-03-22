import React, { useEffect, useState } from 'react';
import '../styles/AccountPage.css'; // Імпортуємо стилі

const AccountPage = () => {
    const [inProgressCourses, setInProgressCourses] = useState([]);
    const [completedCourses, setCompletedCourses] = useState([]);

    // Функція для отримання даних з localStorage
    const getFromLocalStorage = (key) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    };

    // Функція для оновлення прогресу
    const updateProgress = () => {
        const totalCourses = 8; // Загальна кількість курсів
        const progress = (completedCourses.length / totalCourses) * 100;
        return progress;
    };

    // Функція для скидання даних
    const resetData = () => {
        localStorage.removeItem('inProgressCourses');
        localStorage.removeItem('completedCourses');
        setInProgressCourses([]);
        setCompletedCourses([]);
        alert('Всі дані скинуті!');
    };

    // Завантаження даних при першому рендері
    useEffect(() => {
        const savedInProgress = getFromLocalStorage('inProgressCourses');
        const savedCompleted = getFromLocalStorage('completedCourses');
        setInProgressCourses(savedInProgress);
        setCompletedCourses(savedCompleted);
    }, []);

    return (
        <section className="section-account">
            <div className="container">
                <div className="account-info">
                    <h3>Розпочаті курси</h3>
                    <ul id="in-progress-courses">
                        {inProgressCourses.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>

                    <h3>Пройдені курси</h3>
                    <ul id="completed-courses">
                        {completedCourses.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>

                    <h3>Поточний прогрес</h3>
                    <div className="progress-bar">
                        <div className="progress" id="progress-bar-fill" style={{ width: `${updateProgress()}%` }}></div>
                    </div>

                    <h3>Сертифікати</h3>
                    <ul id="certificates">
                        {completedCourses.map((course, index) => (
                            <li key={index}>Сертифікат за курс "{course}"</li>
                        ))}
                    </ul>

                    {/* Кнопка для скидання даних */}
                    <button id="reset-data" onClick={resetData}>Скинути дані</button>
                </div>
            </div>
        </section>
    );
};

export default AccountPage;