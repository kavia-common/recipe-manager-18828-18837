import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.css';
import './styles/common.css';
import './styles/sign-in-11-235.css';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';

// Simple placeholder pages for future extension
function Dashboard() {
  return (
    <div className="page" style={{ padding: 24 }}>
      <div className="artboard" aria-label="Dashboard">
        <div className="screen-content">
          <h1>Recipes Dashboard</h1>
          <p>Placeholder screen. After login, navigate here.</p>
          <Link className="btn primary-btn" to="/">
            <span className="label">Back to Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
function AddRecipe() {
  return (
    <div className="page" style={{ padding: 24 }}>
      <div className="artboard" aria-label="Add Recipe">
        <div className="screen-content">
          <h1>Add Recipe</h1>
          <p>Placeholder for add recipe form.</p>
          <Link className="btn primary-btn" to="/home">
            <span className="label">Go to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** App entry: Router with Sign In as landing screen */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recipes/add" element={<AddRecipe />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
