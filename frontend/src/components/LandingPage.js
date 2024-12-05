import React from 'react';
import './LandingPage.css';
import Inicio from './sections/Inicio';
import Beneficios from './sections/Beneficios';
import Sesiones from './sections/Sesiones';
import Testimonios from './sections/Testimonios';
import Contacto from './sections/Contacto';

function LandingPage() {
  return (
    <div className="landing-container">
      <Inicio />
      <Beneficios />
      <Sesiones />
      <Testimonios />
      <Contacto />
    </div>
  );
}

export default LandingPage;