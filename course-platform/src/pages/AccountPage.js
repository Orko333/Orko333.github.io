import React, { useEffect, useState } from 'react';
import '../styles/AccountPage.css';
import { FaBook, FaGraduationCap, FaCertificate, FaTrash, FaArrowRight } from 'react-icons/fa';

const AccountPage = () => {
    const [inProgressCourses, setInProgressCourses] = useState([]);
    const [completedCourses, setCompletedCourses] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Використовуємо ті самі ключі, що й у CoursesPage
    const STORAGE_KEYS = {
        IN_PROGRESS: 'inProgressCourses_v2',
        COMPLETED: 'completedCourses_v2'
    };

    const getFromLocalStorage = (key) => {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error(`Помилка при читанні ${key} з localStorage:`, error);
            return [];
        }
    };

    const updateProgress = () => {
        const totalCourses = 8; // Це значення має бути синхронізоване з CoursesPage
        const progress = (completedCourses.length / totalCourses) * 100;
        return Math.round(progress);
    };

    const resetData = () => {
        try {
            localStorage.removeItem(STORAGE_KEYS.IN_PROGRESS);
            localStorage.removeItem(STORAGE_KEYS.COMPLETED);
            setInProgressCourses([]);
            setCompletedCourses([]);
            alert('Дані успішно скинуті!');
        } catch (error) {
            console.error('Помилка при скиданні даних:', error);
            alert('Не вдалося скинути дані');
        }
    };

    useEffect(() => {
        const savedInProgress = getFromLocalStorage(STORAGE_KEYS.IN_PROGRESS);
        const savedCompleted = getFromLocalStorage(STORAGE_KEYS.COMPLETED);

        console.log('Завантаження даних:', { savedInProgress, savedCompleted });

        setInProgressCourses(savedInProgress);
        setCompletedCourses(savedCompleted);
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (!isInitialized) return;

        console.log('Збереження даних:', { inProgressCourses, completedCourses });

        try {
            localStorage.setItem(STORAGE_KEYS.IN_PROGRESS, JSON.stringify(inProgressCourses));
            localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(completedCourses));
        } catch (error) {
            console.error('Помилка при збереженні даних:', error);
        }
    }, [inProgressCourses, completedCourses, isInitialized]);

    return (
        <section className="section-account">
            <div className="account-background"></div>
            <div className="container">
                <div className="account-header">
                    <h1 className="account-title">Мій кабінет</h1>
                    <p className="account-subtitle">Ваш прогрес та досягнення в навчанні</p>
                </div>

                <div className="account-grid">
                    <div className="account-card">
                        <div className="wave-effect"></div>
                        <h3 className="card-title">Розпочаті курси</h3>
                        <ul className="course-list">
                            {inProgressCourses.length > 0 ? (
                                inProgressCourses.map((course, index) => (
                                    <li className="course-item" key={index}>
                                        <span className="course-icon"><FaBook /></span>
                                        <span className="course-name">{course}</span>
                                        <FaArrowRight className="course-icon" />
                                    </li>
                                ))
                            ) : (
                                <li className="course-item">
                                    <span className="course-name">Немає активних курсів</span>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="account-card">
                        <div className="wave-effect"></div>
                        <h3 className="card-title">Пройдені курси</h3>
                        <ul className="course-list">
                            {completedCourses.length > 0 ? (
                                completedCourses.map((course, index) => (
                                    <li className="course-item" key={index}>
                                        <span className="course-icon"><FaGraduationCap /></span>
                                        <span className="course-name">{course}</span>
                                    </li>
                                ))
                            ) : (
                                <li className="course-item">
                                    <span className="course-name">Ще не завершено жодного курсу</span>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="account-card">
                        <div className="wave-effect"></div>
                        <h3 className="card-title">Прогрес навчання</h3>
                        <div className="progress-container">
                            <div className="progress-info">
                                <span>Загальний прогрес</span>
                                <span>{updateProgress()}%</span>
                            </div>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${updateProgress()}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="account-card">
                        <div className="wave-effect"></div>
                        <h3 className="card-title">Сертифікати</h3>
                        <ul className="course-list">
                            {completedCourses.length > 0 ? (
                                completedCourses.map((course, index) => (
                                    <li className="certificate-item" key={index}>
                                        <span className="certificate-icon"><FaCertificate /></span>
                                        <span className="course-name">Сертифікат за курс "{course}"</span>
                                    </li>
                                ))
                            ) : (
                                <li className="certificate-item">
                                    <span className="course-name">Немає доступних сертифікатів</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <button className="reset-btn" onClick={resetData}>
                    <FaTrash /> Скинути всі дані
                </button>
            </div>
        </section>
    );
};

export default AccountPage;