import React, { useState, useEffect } from 'react';
import '../styles/course-card.css';

function CoursesPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [inProgressCourses, setInProgressCourses] = useState([]);
    const [completedCourses, setCompletedCourses] = useState([]);
    const [sortOption, setSortOption] = useState('default');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedLevel, setSelectedLevel] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isInitialized, setIsInitialized] = useState(false);

    // Дані про курси
    const courses = [
        {
            title: "Основи програмування",
            level: "Початковий",
            duration: "4 тижні",
            instructor: "Алан Тьюринг",
            description: "Цей курс навчить вас основам програмування на Python. Ви дізнаєтеся про змінні, цикли, умовні оператори та функції.",
            syllabus: ["Введення в Python", "Змінні та типи даних", "Умовні оператори", "Цикли", "Функції"],
            category: "Програмування",
        },
        {
            title: "Веб-розробка",
            level: "Середній",
            duration: "6 тижнів",
            instructor: "Тім Бернерс-Лі",
            description: "Цей курс охоплює основи веб-розробки, включаючи HTML, CSS та JavaScript. Ви створите свій перший веб-сайт.",
            syllabus: ["Введення в HTML", "Основи CSS", "JavaScript для початківців", "Створення адаптивних сайтів"],
            category: "Веб-розробка",
        },
        {
            title: "Data Science",
            level: "Просунутий",
            duration: "8 тижнів",
            instructor: "Джон Сноу",
            description: "Цей курс навчить вас основам Data Science, включаючи роботу з даними, аналіз та візуалізацію за допомогою Python.",
            syllabus: ["Введення в Data Science", "Робота з Pandas", "Візуалізація даних", "Машинне навчання"],
            category: "Data Science",
        },
        {
            title: "Машинне навчання",
            level: "Просунутий",
            duration: "10 тижнів",
            instructor: "Термінатор (T-800)",
            description: "Цей курс охоплює основи машинного навчання, включаючи алгоритми, моделі та їх застосування в реальних проектах.",
            syllabus: ["Введення в ML", "Класифікація", "Регресія", "Глибоке навчання"],
            category: "Машинне навчання",
        },
        {
            title: "Frontend розробка",
            level: "Середній",
            duration: "6 тижнів",
            instructor: "Тоні Старк (Залізна Людина)",
            description: "Цей курс навчить вас створювати сучасні веб-інтерфейси за допомогою HTML, CSS та JavaScript, а також використовувати фреймворки, такі як React.",
            syllabus: ["Основи HTML/CSS", "JavaScript для Frontend", "React для початківців", "Робота з API"],
            category: "Веб-розробка",
        },
        {
            title: "Backend розробка",
            level: "Середній",
            duration: "8 тижнів",
            instructor: "Нікола Тесла",
            description: "Цей курс навчить вас створювати серверну частину веб-додатків за допомогою Node.js та Express, а також працювати з базами даних.",
            syllabus: ["Введення в Node.js", "Робота з Express", "Бази даних (SQL/NoSQL)", "Розгортання додатків"],
            category: "Веб-розробка",
        },
        {
            title: "Мобільна розробка",
            level: "Середній",
            duration: "8 тижнів",
            instructor: "Стів Джобс",
            description: "Цей курс навчить вас створювати мобільні додатки для Android та iOS за допомогою Flutter.",
            syllabus: ["Введення в Flutter", "Інтерфейси в Flutter", "Робота з API", "Публікація додатків"],
            category: "Мобільна розробка",
        },
        {
            title: "Кібербезпека",
            level: "Просунутий",
            duration: "12 тижнів",
            instructor: "Ніо (з 'Матриці')",
            description: "Цей курс охоплює основи кібербезпеки, включаючи захист мереж, шифрування та аналіз загроз.",
            syllabus: ["Введення в кібербезпеку", "Захист мереж", "Шифрування даних", "Аналіз загроз"],
            category: "Кібербезпека",
        },
        {
            title: "Ефективне управління проектами",
            level: "Середній",
            duration: "6 тижнів",
            instructor: "Авраам Лінкольн",
            description: "Цей курс навчить вас ефективно керувати проектами, використовуючи сучасні методики, такі як Agile та Scrum.",
            syllabus: ["Введення в управління проектами", "Методологія Agile", "Scrum-практики", "Управління ризиками"],
            category: "Управління",
        },
        {
            title: "Лідерство та стратегії",
            level: "Просунутий",
            duration: "8 тижнів",
            instructor: "Наполеон Бонапарт",
            description: "Цей курс навчить вас стратегічному мисленню та лідерським навичкам, необхідним для керівництва великими командами та організаціями.",
            syllabus: ["Основи лідерства", "Стратегічне планування", "Управління командами", "Розв'язання конфліктів"],
            category: "Управління",
        },
    ];

    // Завантаження даних з localStorage при першому рендері
    useEffect(() => {
        console.log('Завантаження даних з localStorage...');

        try {
            const savedInProgress = localStorage.getItem('inProgressCourses_v2');
            const savedCompleted = localStorage.getItem('completedCourses_v2');

            console.log('Отримані дані:', { savedInProgress, savedCompleted });

            if (savedInProgress) {
                const parsed = JSON.parse(savedInProgress);
                if (Array.isArray(parsed)) {
                    setInProgressCourses(parsed);
                }
            }

            if (savedCompleted) {
                const parsed = JSON.parse(savedCompleted);
                if (Array.isArray(parsed)) {
                    setCompletedCourses(parsed);
                }
            }
        } catch (error) {
            console.error('Помилка при завантаженні даних:', error);
        } finally {
            setIsInitialized(true);
        }
    }, []);

    // Збереження даних в localStorage при зміні станів
    useEffect(() => {
        if (!isInitialized) return;

        console.log('Збереження даних:', { inProgressCourses, completedCourses });

        try {
            localStorage.setItem('inProgressCourses_v2', JSON.stringify(inProgressCourses));
            localStorage.setItem('completedCourses_v2', JSON.stringify(completedCourses));
        } catch (error) {
            console.error('Помилка при збереженні даних:', error);
        }
    }, [inProgressCourses, completedCourses, isInitialized]);

    const handleStartCourse = (courseTitle) => {
        if (!inProgressCourses.includes(courseTitle) && !completedCourses.includes(courseTitle)) {
            const updatedInProgress = [courseTitle, ...inProgressCourses];
            setInProgressCourses(updatedInProgress);
            alert(`Курс "${courseTitle}" розпочато!`);
        } else {
            alert(`Курс "${courseTitle}" вже розпочато або завершено.`);
        }
    };

    const handleCompleteCourse = (courseTitle) => {
        if (inProgressCourses.includes(courseTitle)) {
            const updatedInProgress = inProgressCourses.filter((course) => course !== courseTitle);
            const updatedCompleted = [courseTitle, ...completedCourses];
            setInProgressCourses(updatedInProgress);
            setCompletedCourses(updatedCompleted);
            alert(`Курс "${courseTitle}" завершено!`);
        } else {
            alert(`Спочатку розпочніть курс "${courseTitle}".`);
        }
    };

    const openModal = (course) => {
        setSelectedCourse(course);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const categories = ['all', ...new Set(courses.map(course => course.category))];
    const levels = ['all', ...new Set(courses.map(course => course.level))];

    const filterCourses = (courses) => {
        return courses.filter(course => {
            const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
            const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesLevel && matchesSearch;
        });
    };

    const sortCourses = (courses) => {
        return [...courses].sort((a, b) => {
            const aInProgress = inProgressCourses.includes(a.title);
            const bInProgress = inProgressCourses.includes(b.title);
            const aCompleted = completedCourses.includes(a.title);
            const bCompleted = completedCourses.includes(b.title);

            if (sortOption === 'default') {
                if (aInProgress && !bInProgress) return -1;
                if (!aInProgress && bInProgress) return 1;
                if (aCompleted && !bCompleted) return -1;
                if (!aCompleted && bCompleted) return 1;
                return 0;
            }

            const durationA = parseInt(a.duration);
            const durationB = parseInt(b.duration);

            switch(sortOption) {
                case 'longest':
                    return durationB - durationA;
                case 'shortest':
                    return durationA - durationB;
                case 'medium':
                    const aIsMedium = durationA >= 6 && durationA <= 8;
                    const bIsMedium = durationB >= 6 && durationB <= 8;
                    if (aIsMedium && !bIsMedium) return -1;
                    if (!aIsMedium && bIsMedium) return 1;
                    return durationA - durationB;
                default:
                    return 0;
            }
        });
    };

    const filteredAndSortedCourses = sortCourses(filterCourses(courses));

    return (
        <section className="section-courses">
            <div className="filters-container">
                <div className="search-filter">
                    <div className="search-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Пошук курсів..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div className="filter-group">
                    <div className="select-wrapper">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="filter-select"
                        >
                            <option value="all">Всі категорії</option>
                            {categories.filter(c => c !== 'all').map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                        <div className="select-arrow"></div>
                    </div>
                </div>

                <div className="filter-group">
                    <div className="select-wrapper">
                        <select
                            value={selectedLevel}
                            onChange={(e) => setSelectedLevel(e.target.value)}
                            className="filter-select"
                        >
                            <option value="all">Всі рівні</option>
                            {levels.filter(l => l !== 'all').map((level, index) => (
                                <option key={index} value={level}>{level}</option>
                            ))}
                        </select>
                        <div className="select-arrow"></div>
                    </div>
                </div>

                <div className="filter-group">
                    <div className="select-wrapper">
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="filter-select"
                        >
                            <option value="default">За статусом</option>
                            <option value="longest">Тривалість (довші)</option>
                            <option value="shortest">Тривалість (коротші)</option>
                            <option value="medium">Тривалість (середні)</option>
                        </select>
                        <div className="select-arrow"></div>
                    </div>
                </div>

                <div className="results-counter">
                    <span>{filteredAndSortedCourses.length}</span> курсів знайдено
                </div>
            </div>

            <div className="course-grid">
                {filteredAndSortedCourses.map((course, index) => {
                    const isInProgress = inProgressCourses.includes(course.title);
                    const isCompleted = completedCourses.includes(course.title);

                    return (
                        <div
                            className={`course-card ${isInProgress ? 'in-progress' : ''} ${isCompleted ? 'completed' : ''}`}
                            key={index}
                            data-status={isInProgress ? "В процесі" : isCompleted ? "Завершено" : ""}
                        >
                            <div className="course-card-content">
                                <div className="course-card-header">
                                    <h3>{course.title}</h3>
                                    <span className="course-level-badge">{course.level}</span>
                                </div>
                                <div className="course-meta">
                                    <span className="meta-item">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                        {course.duration}
                                    </span>
                                    <span className="meta-item">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        {course.instructor}
                                    </span>
                                </div>
                                <p className="course-description">{course.description}</p>

                                <div className="course-actions">
                                    <button
                                        className={`action-button ${isInProgress ? 'in-progress-btn' : isCompleted ? 'completed-btn' : 'start-btn'}`}
                                        onClick={() => handleStartCourse(course.title)}
                                        disabled={isInProgress || isCompleted}
                                    >
                                        {isInProgress ? (
                                            <>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                </svg>
                                                В процесі
                                            </>
                                        ) : isCompleted ? (
                                            <>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                                Завершено
                                            </>
                                        ) : (
                                            <>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polyline points="12 6 12 12 16 14"></polyline>
                                                </svg>
                                                Розпочати
                                            </>
                                        )}
                                    </button>
                                    <button
                                        className="details-button"
                                        onClick={() => openModal(course)}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                        Деталі
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {modalOpen && selectedCourse && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="modal-header">
                            <h3>{selectedCourse.title}</h3>
                            <div className="modal-meta">
                                <span className="meta-badge">{selectedCourse.category}</span>
                                <span className="meta-badge level">{selectedCourse.level}</span>
                                <span className="meta-badge duration">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    {selectedCourse.duration}
                                </span>
                            </div>
                        </div>

                        <div className="modal-body">
                            <p><strong>Викладач:</strong> {selectedCourse.instructor}</p>
                            <p className="modal-description">{selectedCourse.description}</p>

                            <div className="syllabus-section">
                                <h4>Програма курсу:</h4>
                                <ul>
                                    {selectedCourse.syllabus.map((item, index) => (
                                        <li key={index}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="modal-actions">
                            {!inProgressCourses.includes(selectedCourse.title) && !completedCourses.includes(selectedCourse.title) && (
                                <button
                                    className="start-course"
                                    onClick={() => {
                                        handleStartCourse(selectedCourse.title);
                                        closeModal();
                                    }}
                                >
                                    Розпочати курс
                                </button>
                            )}
                            {inProgressCourses.includes(selectedCourse.title) && !completedCourses.includes(selectedCourse.title) && (
                                <button
                                    className="complete-course"
                                    onClick={() => {
                                        handleCompleteCourse(selectedCourse.title);
                                        closeModal();
                                    }}
                                >
                                    Завершити курс
                                </button>
                            )}
                            <button className="close-button" onClick={closeModal}>Закрити</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default CoursesPage;