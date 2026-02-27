import { useEffect, useRef } from "react";

const MouseTrail = ({ enabled }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationFrameId = useRef(null);

  useEffect(() => {
    if (!enabled) return undefined;

    const prefersCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersCoarsePointer) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 14 + 8;
        this.speedX = Math.random() * 1.6 - 0.8;
        this.speedY = Math.random() * 1.6 - 0.8;
        this.life = 1;
        this.decay = Math.random() * 0.03 + 0.015;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.size *= 0.98;
      }

      draw(context) {
        const isDark = document.documentElement.classList.contains("dark");
        const base = isDark ? 255 : 0;
        const gradient = context.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        );
        gradient.addColorStop(0, `rgba(${base}, ${base}, ${base}, ${this.life * 0.22})`);
        gradient.addColorStop(1, `rgba(${base}, ${base}, ${base}, 0)`);

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    const handleMouseMove = (event) => {
      particles.current.push(new Particle(event.clientX, event.clientY));
      if (particles.current.length > 60) {
        particles.current = particles.current.slice(-60);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((particle) => {
        particle.update();
        particle.draw(ctx);
        return particle.life > 0;
      });
      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      particles.current = [];
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.8 }}
    />
  );
};

export default MouseTrail;
