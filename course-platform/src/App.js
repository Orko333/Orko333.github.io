import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage'; // Імпортуємо AboutPage
import SchedulePage from './pages/SchedulePage';
import AccountPage from './pages/AccountPage';
import './styles/base.css'; // Основні стилі
import './styles/header.css'; // Стилі для хедера
import './styles/footer.css'; // Стилі для футера

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/schedule" element={<SchedulePage />} />
                    <Route path="/account" element={<AccountPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;