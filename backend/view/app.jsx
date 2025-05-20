import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm/RegisterForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Mon Application</h1>
        </header>
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<div>Page de connexion à venir</div>} />
            <Route path="*" element={<div>Page non trouvée</div>} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} - Mon Application</p>
        </footer>
      </div>
    </Router>
  );
}

// Composant simple pour la page d'accueil
function Home() {
  return (
    <div className="home-container">
      <h2>Bienvenue sur Mon Application</h2>
      <p>Cette application vous permet de créer un compte et de vous connecter.</p>
      <div className="home-links">
        <a href="/register" className="home-button">S'inscrire</a>
        <a href="/login" className="home-button">Se connecter</a>
      </div>
    </div>
  );
}

export default App;