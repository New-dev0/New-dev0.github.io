import React, { useEffect, useRef } from 'react';

const BombMarioAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Get CSS variables for colors
    const style = getComputedStyle(document.documentElement);
    const primaryColor = style.getPropertyValue('--primary').trim();
    const secondaryColor = style.getPropertyValue('--secondary').trim();
    const accentColor = style.getPropertyValue('--accent').trim();
    const foregroundColor = style.getPropertyValue('--foreground').trim();
    const backgroundColor = style.getPropertyValue('--background-end').trim();

    const stars = [];
    const asteroids = [];
    const buildings = [];

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.fillStyle = foregroundColor + '80'; // 50% opacity
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Asteroid {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speed = Math.random() * 2 + 1;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.angle = Math.random() * Math.PI * 2;
        }
      }

      draw() {
        ctx.fillStyle = secondaryColor + '60'; // 40% opacity
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Building {
      constructor(x, width, height) {
        this.x = x;
        this.width = width;
        this.height = height;
        this.y = canvas.height - this.height;
        this.color = Math.random() > 0.5 ? primaryColor : secondaryColor;
      }

      draw() {
        ctx.fillStyle = this.color + 'CC'; // 80% opacity
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // Draw windows
        const windowSize = 3;
        const windowGap = 7;
        for (let i = this.x + windowGap; i < this.x + this.width - windowGap; i += windowGap * 2) {
          for (let j = this.y + windowGap; j < this.y + this.height - windowGap; j += windowGap * 2) {
            ctx.fillStyle = accentColor + '80'; // 50% opacity
            ctx.fillRect(i, j, windowSize, windowSize);
          }
        }
      }
    }

    // Initialize objects
    for (let i = 0; i < 200; i++) stars.push(new Star());
    for (let i = 0; i < 20; i++) asteroids.push(new Asteroid());

    // Create buildings
    const buildingCount = 8;
    const totalWidth = canvas.width * 0.2; // 20% of canvas width
    let currentX = canvas.width - totalWidth;

    for (let i = 0; i < buildingCount; i++) {
      const width = Math.random() * 20 + 15; // Random width between 15 and 35
      const height = Math.random() * 100 + 50; // Random height between 50 and 150
      buildings.push(new Building(currentX, width, height));
      currentX += width + 2; // Add a small gap between buildings
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundColor + '1A'; // 10% opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      asteroids.forEach(asteroid => {
        asteroid.update();
        asteroid.draw();
      });

      buildings.forEach(building => building.draw());

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Reposition buildings
      let currentX = canvas.width - totalWidth;
      buildings.forEach(building => {
        building.x = currentX;
        building.y = canvas.height - building.height;
        currentX += building.width + 2;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-10" />;
};

export default BombMarioAnimation;
