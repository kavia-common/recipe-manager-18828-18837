import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * SignInScreen
 * A Figma-fidelity sign in screen built from provided HTML/CSS assets.
 * Includes:
 * - Email/password inputs
 * - Primary Sign In button
 * - Divider "Or Sign in With"
 * - Google button with official "G" SVG, Facebook placeholder
 * - Bottom home indicator and artboard container
 * Behavior:
 * - On submit, prevents default and navigates to /dashboard (placeholder for future auth)
 * - "Forgot Password" shows a demo alert
 * - Social buttons show demo alerts
 */
function SignInScreen() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with backend auth; for now just navigate
    // Keep this console for dev visibility
    // eslint-disable-next-line no-console
    console.log('Sign In submit', form);
    navigate('/home');
  };

  const onForgot = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert('Forgot Password (demo)');
  };

  const onSocial = (provider) => {
    // eslint-disable-next-line no-alert
    alert(`Social Sign In with ${provider} (demo)`);
  };

  return (
    <div className="page sign-in-screen" data-screen="sign-in">
      <div className="artboard" role="main" aria-label="Sign In screen">
        {/* Status Bar placeholder (Design fidelity) */}
        <div className="status-bar" aria-hidden="true" />

        <div className="screen-content">
          <div className="content-flex">
            {/* Title group */}
            <div className="title-group" style={{ width: 315 }}>
              <h1 className="hello">Hello,</h1>
              <p className="welcome">Welcome Back!</p>
            </div>

            {/* Form */}
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="input-wrapper">
                <label className="input-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input-field"
                  placeholder="Enter Email"
                  aria-label="Email"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="input-wrapper">
                <label className="input-label" htmlFor="password">Enter Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="input-field"
                  placeholder="Enter Password"
                  aria-label="Password"
                  value={form.password}
                  onChange={onChange}
                  required
                />
              </div>

              <button className="forgot-password" onClick={onForgot}>
                Forgot Password?
              </button>

              <div className="actions">
                <button type="submit" className="btn primary-btn" aria-label="Sign In">
                  <span className="label">Sign In</span>
                  {/* 20x20 arrow-right icon */}
                  <svg className="icon-arrow-right" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M3 10h11" stroke="#000" strokeWidth="1.3" strokeLinecap="round" />
                    <path d="M11 5l5 5-5 5" stroke="#000" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Divider */}
              <div className="auth-divider divider" role="separator" aria-label="Or Sign in With">
                <div className="line" />
                <div className="label">Or Sign in With</div>
                <div className="line" />
              </div>

              {/* Social buttons */}
              <div className="social-row" aria-label="Social sign in options">
                <button
                  type="button"
                  className="btn icon-square"
                  aria-label="Sign in with Google"
                  onClick={() => onSocial('Google')}
                >
                  <span className="icon-google" aria-hidden="true">
                    {/* Official Google "G" monogram */}
                    <svg className="google-g" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="Google logo">
                      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12S17.373 12 24 12c3.059 0 5.842 1.153 7.961 3.039l5.657-5.657C33.758 5.676 29.174 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"/>
                      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.818C14.406 16.041 18.86 12 24 12c3.059 0 5.842 1.153 7.961 3.039l5.657-5.657C33.758 5.676 29.174 4 24 4c-7.86 0-14.562 4.593-17.694 10.691z"/>
                      <path fill="#4CAF50" d="M24 44c5.166 0 9.787-1.986 13.304-5.217l-6.147-5.203C29.107 35.918 26.698 37 24 37c-5.202 0-9.616-3.317-11.277-7.946l-6.54 5.04C9.283 39.342 16.085 44 24 44z"/>
                      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303A12.01 12.01 0 0 1 24 37c-5.202 0-9.616-3.317-11.277-7.946l-6.54 5.04C9.283 39.342 16.085 44 24 44c11.045 0 20-8.955 20-20 0-1.341-.138-2.651-.389-3.917z"/>
                    </svg>
                  </span>
                </button>

                <button
                  type="button"
                  className="btn icon-square"
                  aria-label="Sign in with Facebook"
                  onClick={() => onSocial('Facebook')}
                >
                  <span className="icon-facebook" aria-hidden="true" />
                </button>
              </div>

              <p className="sign-up-hint">
                Don’t have an account?{' '}
                <a href="#signup" aria-label="Sign up" onClick={(e) => e.preventDefault()}>
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Bottom area anchored to bottom */}
        <div className="bottom-area" aria-hidden="true">
          <div className="home-indicator">
            <div className="pill" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInScreen;
