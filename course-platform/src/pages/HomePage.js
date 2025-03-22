import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PopularCoursesSection from '../components/PopularCoursesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import Footer from '../components/Footer';
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