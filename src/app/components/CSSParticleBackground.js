'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/CSSParticleBackground.module.css';

export default function CSSParticleBackground() {
  const [particles, setParticles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Generate particles
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    setParticles(newParticles);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={styles.particleContainer}>
      {/* Animated gradient background */}
      <div className={styles.gradientBg}></div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={styles.particle}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
}
