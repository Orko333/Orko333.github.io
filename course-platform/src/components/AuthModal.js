// AuthModal.js
import React, { useState } from 'react';
import { auth } from './firebase';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTimes,
    faUser,
    faLock,
    faEnvelope,
    faSignInAlt,
    faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import '../styles/authModal.css';

function AuthModal({ show, onClose, onAuthSuccess }) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
            }
            onAuthSuccess();
            onClose();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (!show) return null;

    return (
        <div className="auth-modal-overlay">
            <div className="auth-modal">
                <div className="auth-modal-header">
                    <h2>
                        <FontAwesomeIcon
                            icon={isLogin ? faSignInAlt : faUserPlus}
                            className="auth-modal-title-icon"
                        />
                        {isLogin ? 'Увійти до акаунта' : 'Створити акаунт'}
                    </h2>
                    <button className="auth-modal-close" onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <div className="auth-modal-content">
                    {error && (
                        <div className="auth-error">
                            <div className="auth-error-icon">!</div>
                            <div>{error}</div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="auth-input-group">
                            <div className="auth-input-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <input
                                type="email"
                                placeholder="Ваш email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <div className="auth-input-underline"></div>
                        </div>

                        <div className="auth-input-group">
                            <div className="auth-input-icon">
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <input
                                type="password"
                                placeholder="Ваш пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength="6"
                            />
                            <div className="auth-input-underline"></div>
                        </div>

                        <button
                            type="submit"
                            className="auth-submit-button"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="auth-loading">Завантаження...</span>
                            ) : (
                                <>
                                    <FontAwesomeIcon
                                        icon={isLogin ? faSignInAlt : faUserPlus}
                                        className="auth-submit-icon"
                                    />
                                    {isLogin ? 'Увійти' : 'Зареєструватися'}
                                </>
                            )}
                        </button>
                    </form>

                    <div className="auth-switch-mode">
                        {isLogin ? (
                            <p>
                                Ще немає акаунта?{' '}
                                <button
                                    onClick={() => setIsLogin(false)}
                                    className="auth-mode-switch-button"
                                >
                                    Зареєструватися
                                </button>
                            </p>
                        ) : (
                            <p>
                                Вже є акаунт?{' '}
                                <button
                                    onClick={() => setIsLogin(true)}
                                    className="auth-mode-switch-button"
                                >
                                    Увійти
                                </button>
                            </p>
                        )}
                    </div>
                </div>

                <div className="auth-modal-particles"></div>
                <div className="auth-modal-light"></div>
            </div>
        </div>
    );
}

export default AuthModal;