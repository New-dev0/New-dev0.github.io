import React, { useEffect, useRef } from 'react';
import NightLamp from './NightLamp';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const asteroids = [];
    const stars = [];
    const planets = [];

    class Asteroid {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = canvas.width + Math.random() * 100;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 2;
        this.speed = Math.random() * 1 + 0.5;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = Math.random() * 0.02 - 0.01;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
      }

      update() {
        this.x -= this.speed;
        this.rotation += this.rotationSpeed;
        if (this.x < -50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        for (let i = 0; i < 7; i++) {
          ctx.rotate(Math.PI / 3.5);
          ctx.lineTo(this.size * (i % 2 ? 0.5 : 1), 0);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.blinkSpeed = Math.random() * 0.05 + 0.01;
        this.brightness = Math.random();
      }

      update() {
        this.brightness += this.blinkSpeed;
        if (this.brightness > 1 || this.brightness < 0) {
          this.blinkSpeed = -this.blinkSpeed;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Planet {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 10;
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 50; i++) {
      asteroids.push(new Asteroid());
    }

    for (let i = 0; i < 200; i++) {
      stars.push(new Star());
    }

    for (let i = 0; i < 3; i++) {
      planets.push(new Planet());
    }

    function animate() {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      planets.forEach(planet => {
        planet.draw();
      });

      asteroids.forEach(asteroid => {
        asteroid.update();
        asteroid.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />
      <NightLamp />
    </>
  );
};

export default AnimatedBackground;
