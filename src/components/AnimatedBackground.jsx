import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Mouse interaction
    const mouse = {
      x: undefined,
      y: undefined,
      radius: 100
    };

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    // Particle class
    class Particle {
      constructor() {
        // Position
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        // Original position for returning after interaction
        this.baseX = this.x;
        this.baseY = this.y;
        
        // Size
        this.size = Math.random() * 3 + 1;
        
        // Velocity
        this.vx = Math.random() * 0.2 - 0.1;
        this.vy = Math.random() * 0.2 - 0.1;
        
        // Color
        this.color = darkMode ? 
          `rgba(${Math.random() * 50 + 100}, ${Math.random() * 50 + 100}, ${Math.random() * 100 + 155}, ${Math.random() * 0.5 + 0.2})` : 
          `rgba(${Math.random() * 100 + 50}, ${Math.random() * 50 + 50}, ${Math.random() * 100 + 150}, ${Math.random() * 0.3 + 0.1})`;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Interaction with mouse
        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * this.size * 0.5;
            const directionY = forceDirectionY * force * this.size * 0.5;
            
            this.x -= directionX;
            this.y -= directionY;
          } else {
            // Return to original position
            if (this.x !== this.baseX) {
              const dx = this.x - this.baseX;
              this.x -= dx/50;
            }
            if (this.y !== this.baseY) {
              const dy = this.y - this.baseY;
              this.y -= dy/50;
            }
          }
        }

        // Boundary check
        if (this.x > canvas.width || this.x < 0) {
          this.vx = -this.vx;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.vy = -this.vy;
        }

        // Slight movement
        this.x += this.vx;
        this.y += this.vy;

        this.draw();
      }
    }

    // Connect particles with lines
    function connect() {
      const opacityValue = 0.5;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
                         ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
          
          if (distance < (canvas.width/15) * (canvas.height/15)) {
            ctx.strokeStyle = darkMode 
              ? `rgba(150, 150, 255, ${opacityValue - (distance/20000)})` 
              : `rgba(100, 100, 200, ${opacityValue - (distance/20000)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Initialize particles
    function init() {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      
      connect();
      
      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', (event) => {
        mouse.x = undefined;
        mouse.y = undefined;
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 -z-10 pointer-events-none" 
      style={{ 
        background: 'transparent'
      }}
    />
  );
};

export default AnimatedBackground;
