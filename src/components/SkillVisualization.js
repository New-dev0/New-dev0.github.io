import React, { useEffect, useRef } from 'react';

const SkillVisualization = ({ skills }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;

    function drawSkills() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      skills.forEach((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        ctx.fillStyle = `hsl(${(index / skills.length) * 360}, 70%, 50%)`;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'white';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(skill, x, y + 20);
      });
    }

    drawSkills();
  }, [skills]);

  return <canvas ref={canvasRef} className="mx-auto" />;
};

export default SkillVisualization;
