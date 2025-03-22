import React from 'react';
import HeroSection from '../components/HeroSection';
import PopularCoursesSection from '../components/PopularCoursesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import '../styles/sections.css'; // Імпортуємо стилі для секцій
import '../styles/course-card.css'; // Імпортуємо стилі для карток курсів

function HomePage() {
    return (
        <div>
            <HeroSection />
            <PopularCoursesSection />
            <WhyChooseUsSection />
        </div>
    );
}

export default HomePage;