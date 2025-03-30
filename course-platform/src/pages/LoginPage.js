import React from 'react';
import AuthForm from '../components/AuthForm';

function LoginPage() {
    const handleLogin = (formData) => {
        // Тут буде логіка входу
        console.log('Login data:', formData);
    };

    return (
        <div className="page-container">
            <AuthForm type="login" onSubmit={handleLogin} />
        </div>
    );
}

export default LoginPage;