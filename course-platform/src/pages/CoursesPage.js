import React, { useState, useEffect } from 'react';
import '../styles/sections.css'; // Імпортуємо стилі для секцій
import '../styles/course-card.css'; // Імпортуємо стилі для карток курсів
import '../styles/modal.css'; // Імпортуємо стилі для модального вікна

function CoursesPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [inProgressCourses, setInProgressCourses] = useState([]);
    const [completedCourses, setCompletedCourses] = useState([]);

    // Дані про курси
    const courses = [
        {
            title: "Основи програмування",
            level: "Початковий",
            duration: "4 тижні",
            instructor: "Алан Тьюринг",
            description: "Цей курс навчить вас основам програмування на Python. Ви дізнаєтеся про змінні, цикли, умовні оператори та функції.",
            syllabus: ["Введення в Python", "Змінні та типи даних", "Умовні оператори", "Цикли", "Функції"],
        },
        {
            title: "Веб-розробка",
            level: "Середній",
            duration: "6 тижнів",
            instructor: "Тім Бернерс-Лі",
            description: "Цей курс охоплює основи веб-розробки, включаючи HTML, CSS та JavaScript. Ви створите свій перший веб-сайт.",
            syllabus: ["Введення в HTML", "Основи CSS", "JavaScript для початківців", "Створення адаптивних сайтів"],
        },
        {
            title: "Data Science",
            level: "Просунутий",
            duration: "8 тижнів",
            instructor: "Джон Сноу",
            description: "Цей курс навчить вас основам Data Science, включаючи роботу з даними, аналіз та візуалізацію за допомогою Python.",
            syllabus: ["Введення в Data Science", "Робота з Pandas", "Візуалізація даних", "Машинне навчання"],
        },
        {
            title: "Машинне навчання",
            level: "Просунутий",
            duration: "10 тижнів",
            instructor: "Термінатор (T-800)",
            description: "Цей курс охоплює основи машинного навчання, включаючи алгоритми, моделі та їх застосування в реальних проектах.",
            syllabus: ["Введення в ML", "Класифікація", "Регресія", "Глибоке навчання"],
        },
        {
            title: "Frontend розробка",
            level: "Середній",
            duration: "6 тижнів",
            instructor: "Тоні Старк (Залізна Людина)",
            description: "Цей курс навчить вас створювати сучасні веб-інтерфейси за допомогою HTML, CSS та JavaScript, а також використовувати фреймворки, такі як React.",
            syllabus: ["Основи HTML/CSS", "JavaScript для Frontend", "React для початківців", "Робота з API"],
        },
        {
            title: "Backend розробка",
            level: "Середній",
            duration: "8 тижнів",
            instructor: "Нікола Тесла",
            description: "Цей курс навчить вас створювати серверну частину веб-додатків за допомогою Node.js та Express, а також працювати з базами даних.",
            syllabus: ["Введення в Node.js", "Робота з Express", "Бази даних (SQL/NoSQL)", "Розгортання додатків"],
        },
        {
            title: "Мобільна розробка",
            level: "Середній",
            duration: "8 тижнів",
            instructor: "Стів Джобс",
            description: "Цей курс навчить вас створювати мобільні додатки для Android та iOS за допомогою Flutter.",
            syllabus: ["Введення в Flutter", "Інтерфейси в Flutter", "Робота з API", "Публікація додатків"],
        },
        {
            title: "Кібербезпека",
            level: "Просунутий",
            duration: "12 тижнів",
            instructor: "Ніо (з 'Матриці')",
            description: "Цей курс охоплює основи кібербезпеки, включаючи захист мереж, шифрування та аналіз загроз.",
            syllabus: ["Введення в кібербезпеку", "Захист мереж", "Шифрування даних", "Аналіз загроз"],
        },
        {
            title: "Ефективне управління проектами",
            level: "Середній",
            duration: "6 тижнів",
            instructor: "Авраам Лінкольн",
            description: "Цей курс навчить вас ефективно керувати проектами, використовуючи сучасні методики, такі як Agile та Scrum.",
            syllabus: ["Введення в управління проектами", "Методологія Agile", "Scrum-практики", "Управління ризиками"],
        },
        {
            title: "Лідерство та стратегії",
            level: "Просунутий",
            duration: "8 тижнів",
            instructor: "Наполеон Бонапарт",
            description: "Цей курс навчить вас стратегічному мисленню та лідерським навичкам, необхідним для керівництва великими командами та організаціями.",
            syllabus: ["Основи лідерства", "Стратегічне планування", "Управління командами", "Розв'язання конфліктів"],
        },
        {
            title: "Ядерна фізика",
            level: "Просунутий",
            duration: "10 тижнів",
            instructor: "Роберт Оппенгеймер",
            description: "Цей курс охоплює основи ядерної фізики, включаючи ядерні реакції, радіоактивність та застосування ядерної енергії.",
            syllabus: ["Введення в ядерну фізику", "Ядерні реакції", "Радіоактивність", "Застосування ядерної енергії"],
        },
    ];


    // Завантаження стану курсів з localStorage при завантаженні сторінки
    useEffect(() => {
        const savedInProgress = JSON.parse(localStorage.getItem('inProgressCourses')) || [];
        const savedCompleted = JSON.parse(localStorage.getItem('completedCourses')) || [];

        console.log('Завантаження з localStorage:', { savedInProgress, savedCompleted }); // Логування

        // Перевірка, чи дані є масивами
        if (Array.isArray(savedInProgress)) {
            setInProgressCourses(savedInProgress);
        } else {
            console.error('Дані inProgressCourses не є масивом:', savedInProgress);
        }

        if (Array.isArray(savedCompleted)) {
            setCompletedCourses(savedCompleted);
        } else {
            console.error('Дані completedCourses не є масивом:', savedCompleted);
        }
    }, []);

    // Збереження стану курсів у localStorage при зміні
    useEffect(() => {
        if (inProgressCourses.length > 0 || completedCourses.length > 0) {
            console.log('Збереження в localStorage:', { inProgressCourses, completedCourses }); // Логування
            localStorage.setItem('inProgressCourses', JSON.stringify(inProgressCourses));
            localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
        }
    }, [inProgressCourses, completedCourses]);

    // Функція для початку курсу
    const handleStartCourse = (courseTitle) => {
        if (!inProgressCourses.includes(courseTitle) && !completedCourses.includes(courseTitle)) {
            const updatedInProgress = [courseTitle, ...inProgressCourses]; // Додаємо курс на початок списку
            console.log('Розпочато курс:', courseTitle); // Логування
            setInProgressCourses(updatedInProgress);
            alert(`Курс "${courseTitle}" розпочато!`);
        } else {
            alert(`Курс "${courseTitle}" вже розпочато або завершено.`);
        }
    };

    // Функція для завершення курсу
    const handleCompleteCourse = (courseTitle) => {
        if (inProgressCourses.includes(courseTitle)) {
            const updatedInProgress = inProgressCourses.filter((course) => course !== courseTitle);
            const updatedCompleted = [courseTitle, ...completedCourses]; // Додаємо курс на початок списку
            console.log('Завершено курс:', courseTitle); // Логування
            setInProgressCourses(updatedInProgress);
            setCompletedCourses(updatedCompleted);
            alert(`Курс "${courseTitle}" завершено!`);
        } else {
            alert(`Спочатку розпочніть курс "${courseTitle}".`);
        }
    };

    // Функція для відкриття модального вікна
    const openModal = (course) => {
        setSelectedCourse(course);
        setModalOpen(true);
    };

    // Функція для закриття модального вікна
    const closeModal = () => {
        setModalOpen(false);
    };

    // Сортування курсів: спочатку курси, які розпочато або завершено
    const sortedCourses = [...courses].sort((a, b) => {
        const aInProgress = inProgressCourses.includes(a.title);
        const bInProgress = inProgressCourses.includes(b.title);
        const aCompleted = completedCourses.includes(a.title);
        const bCompleted = completedCourses.includes(b.title);

        if (aInProgress || aCompleted) return -1;
        if (bInProgress || bCompleted) return 1;
        return 0;
    });

    return (
        <section className="section-courses">
            <div className="course-grid">
                {sortedCourses.map((course, index) => {
                    const isInProgress = inProgressCourses.includes(course.title);
                    const isCompleted = completedCourses.includes(course.title);

                    return (
                        <div
                            className={`course-card ${isInProgress ? 'in-progress' : ''} ${isCompleted ? 'completed' : ''}`}
                            key={index}
                        >
                            <h3>{course.title}</h3>
                            <p><strong>Рівень:</strong> {course.level}</p>
                            <p><strong>Тривалість:</strong> {course.duration}</p>
                            <p><strong>Викладач:</strong> {course.instructor}</p>
                            <button
                                className="start-course"
                                onClick={() => handleStartCourse(course.title)}
                                disabled={isInProgress || isCompleted}
                            >
                                Розпочати курс
                            </button>
                            <button
                                className="complete-course"
                                onClick={() => handleCompleteCourse(course.title)}
                                disabled={!isInProgress || isCompleted}
                            >
                                Курс завершено
                            </button>
                            <button
                                className="details-button"
                                onClick={() => openModal(course)}
                            >
                                Детальніше
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Модальне вікно для деталей курсу */}
            {modalOpen && (
                <div className="modal" style={{ display: 'flex' }}>
                    <div className="modal-content">
                        <span className="close-modal" onClick={closeModal}>&times;</span>
                        <h3>{selectedCourse.title}</h3>
                        <p>{selectedCourse.description}</p>
                        <p><strong>Рівень:</strong> {selectedCourse.level}</p>
                        <p><strong>Тривалість:</strong> {selectedCourse.duration}</p>
                        <p><strong>Викладач:</strong> {selectedCourse.instructor}</p>
                        <p><strong>Програма курсу:</strong></p>
                        <ul>
                            {selectedCourse.syllabus.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}

export default CoursesPage;