import React from 'react';
import '../styles/sections.css'; // Імпортуємо стилі для секцій

function WhyChooseUsSection() {
    const reasons = [
        {
            title: "Якісні матеріали",
            description: "Ми надаємо актуальні та структуровані матеріали, які допоможуть вам швидко опанувати нові навички.",
        },
        {
            title: "Досвідчені викладачі",
            description: "Наші викладачі - це професіонали з багаторічним досвідом у своїх галузях.",
        },
        {
            title: "Гнучкий графік",
            description: "Ви можете навчатися у зручний для вас час, адже наші курси доступні онлайн.",
        },
    ];

    return (
        <section className="section-about">
            <div className="container">
                <h2>Чому обирають нас?</h2>
                <div className="about-grid">
                    {reasons.map((reason, index) => (
                        <div className="about-card" key={index}>
                            <h3>{reason.title}</h3>
                            <p>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUsSection;