
import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define particles
    const particles = Array(100).fill(0).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      color: `hsl(${Math.random() * 60 + 260}, 100%, 70%, ${Math.random() * 0.5 + 0.3})`,
      direction: Math.random() * Math.PI * 2
    }));
    
    // Define nebula points
    const nebulaPoints = Array(20).fill(0).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 80 + 40,
      color: `hsla(${Math.random() * 60 + 260}, 100%, 70%, 0.05)`
    }));
    
    // Define grid lines
    const gridLines = {
      horizontal: Array(10).fill(0).map(() => ({
        y: Math.random() * canvas.height,
        speed: Math.random() * 0.2 + 0.1,
        width: canvas.width,
        opacity: Math.random() * 0.2 + 0.1
      })),
      vertical: Array(10).fill(0).map(() => ({
        x: Math.random() * canvas.width,
        speed: Math.random() * 0.2 + 0.1,
        height: canvas.height,
        opacity: Math.random() * 0.2 + 0.1
      }))
    };
    
    const draw = () => {
      // Semi-transparent background for motion blur effect
      ctx.fillStyle = 'rgba(9, 10, 26, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebula clouds
      nebulaPoints.forEach(point => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0, 
          point.x, point.y, point.radius
        );
        gradient.addColorStop(0, point.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw grid lines
      ctx.lineWidth = 1;
      
      // Horizontal grid
      gridLines.horizontal.forEach(line => {
        ctx.beginPath();
        ctx.strokeStyle = `hsla(280, 100%, 60%, ${line.opacity})`;
        ctx.moveTo(0, line.y);
        ctx.lineTo(line.width, line.y);
        ctx.stroke();
        
        // Move line down
        line.y += line.speed;
        if (line.y > canvas.height) {
          line.y = 0;
        }
      });
      
      // Vertical grid
      gridLines.vertical.forEach(line => {
        ctx.beginPath();
        ctx.strokeStyle = `hsla(280, 100%, 60%, ${line.opacity})`;
        ctx.moveTo(line.x, 0);
        ctx.lineTo(line.x, line.height);
        ctx.stroke();
        
        // Move line right
        line.x += line.speed;
        if (line.x > canvas.width) {
          line.x = 0;
        }
      });
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Move particles in their direction
        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.direction = Math.PI - particle.direction;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.direction = -particle.direction;
        }
      });
    };
    
    const interval = setInterval(draw, 30);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-70 pointer-events-none" />;
};

export default MatrixRain;
