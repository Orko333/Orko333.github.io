import React from 'react';
import '../styles/AboutPage.css'; // Імпортуємо стилі

const AboutPage = () => {
    return (
        <div>
            {/* Секція "Про Нас" */}
            <section className="section-about-us">
                <div className="container">
                    <h2>Хто ми?</h2>
                    <p>
                        Ми - провідна платформа для навчальних курсів у сфері IT. Наша місія - надати кожному можливість отримати якісну освіту, яка допоможе розкрити потенціал та досягти нових висот у кар'єрі.
                    </p>
                    <p>
                        Наші курси розроблені професіоналами з багаторічним досвідом, а навчальні матеріали постійно оновлюються, щоб забезпечити актуальність знань.
                    </p>
                </div>
            </section>

            {/* Секція "Наші найкращі учні" */}
            <section className="section-top-students">
                <div className="container">
                    <h2>Наші найкращі учні</h2>
                    <div className="student-grid">
                        {/* Картка студента 1 */}
                        <div className="student-card">
                            <div className="student-image">
                                <img src="/images/students/elon_musk.png" alt="Ілон Маск" />
                            </div>
                            <h3>Ілон Маск</h3>
                            <p>Засновник SpaceX, Tesla, Neuralink. Випускник курсу "Основи програмування".</p>
                            <div className="student-social">
                                <a className="social-link1" href="https://www.instagram.com/elonrmuskk/" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/icons/instagram.png" alt="Instagram" />
                                </a>
                                <a className="social-link2" href="https://www.facebook.com/zelenskyy.official/?locale=uk_UA" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/icons/facebook.png" alt="Facebook" />
                                </a>
                            </div>
                        </div>

                        {/* Картка студента 2 */}
                        <div className="student-card">
                            <div className="student-image">
                                <img src="/images/students/mark_zuckerberg.png" alt="Марк Цукерберг" />
                            </div>
                            <h3>Марк Цукерберг</h3>
                            <p>Засновник Facebook. Випускник курсу "Веб-розробка".</p>
                            <div className="student-social">
                                <a className="social-link1" href="https://www.instagram.com/zuck/" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/icons/instagram.png" alt="Instagram" />
                                </a>
                                <a className="social-link2" href="https://www.facebook.com/zelenskyy.official/?locale=uk_UA" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/icons/facebook.png" alt="Facebook" />
                                </a>
                            </div>
                        </div>

                        {/* Картка студента 3 */}
                        <div className="student-card">
                            <div className="student-image">
                                <img src="/images/students/albert_einstein.jpg" alt="Альберт Енштейн" />
                            </div>
                            <h3>Альберт Енштейн</h3>
                            <p>Теоретичний фізик, лауреат Нобелівської премії. Випускник курсу "Data Science".</p>
                            <div className="student-social">
                                <a className="social-link1" href="https://www.instagram.com/alberteinstein/" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/icons/instagram.png" alt="Instagram" />
                                </a>
                                <a className="social-link2" href="https://www.facebook.com/zelenskyy.official/?locale=uk_UA" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/icons/facebook.png" alt="Facebook" />
                                </a>
                            </div>
                        </div>

                        {/* Картка студента 4 */}
                        <div className="student-card">
                            <div className="student-image">
                                <img src="/images/students/jeff_bezos.png" alt="Джеф Безос" />
                            </div>
                            <h3>Джеф Безос</h3>
                            <p>Засновник Amazon. Випускник курсу "Ефективне управління проектами".</p>
                            <div className="student-social">
                                <a className="social-link1" href="https://www.instagram.com/jeffbezos/?locale=ru&hl=bg" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/icons/instagram.png" alt="Instagram" />
                                </a>
                                <a className="social-link2" href="https://www.facebook.com/zelenskyy.official/?locale=uk_UA" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/icons/facebook.png" alt="Facebook" />
                                </a>
                            </div>
                        </div>

                        {/* Картка студента 5 */}
                        <div className="student-card">
                            <div className="student-image">
                                <img src="/images/students/winston_churchill.png" alt="Вінстон Черчилль" />
                            </div>
                            <h3>Вінстон Черчилль</h3>
                            <p>Колишній прем'єр-міністр Великобританії. Випускник курсу "Лідерство та стратегії".</p>
                            <div className="student-social">
                                <a className="social-link1" href="https://www.instagram.com/world_record_egg/" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/icons/instagram.png" alt="Instagram" />
                                </a>
                                <a className="social-link2" href="https://www.facebook.com/zelenskyy.official/?locale=uk_UA" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/icons/facebook.png" alt="Facebook" />
                                </a>
                            </div>
                        </div>

                        {/* Картка студента 6 */}
                        <div className="student-card">
                            <div className="student-image">
                                <img src="/images/students/robert_oppenheimer.png" alt="Роберт Оппенгеймер" />
                            </div>
                            <h3>Роберт Оппенгеймер</h3>
                            <p>Фізик, науковий керівник Манхеттенського проекту. Випускник курсу "Ядерна фізика".</p>
                            <div className="student-social">
                                <a className="social-link1" href="https://www.instagram.com/cillianmurphyofficiall/" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/icons/instagram.png" alt="Instagram" />
                                </a>
                                <a className="social-link2" href="https://www.facebook.com/zelenskyy.official/?locale=uk_UA" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/icons/facebook.png" alt="Facebook" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;