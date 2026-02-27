import { useEffect, useRef } from "react";

const BALL_SIZE = 14;
const STIFFNESS = 0.075;
const DAMPING = 0.88;

const ScrollCardBall = ({ selector, enabled, anchor = "center" }) => {
  const ballRef = useRef(null);
  const metricsRef = useRef([]);
  const currentRef = useRef({ x: 20, y: 140 });
  const targetRef = useRef({ x: 20, y: 140 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const updateFrameRef = useRef(null);
  const retryFrameRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    if (!ball || !enabled) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ball.style.opacity = "0";
      return undefined;
    }

    let cards = [];

    const setMetrics = () => {
      cards = Array.from(document.querySelectorAll(selector));
      metricsRef.current = cards.map((card) => {
        const rect = card.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        return {
          absoluteTop,
          absoluteCenterY: absoluteTop + rect.height / 2,
          height: rect.height,
          left: rect.left,
        };
      });
    };

    const ensureMetrics = () => {
      if (metricsRef.current.length) return true;
      setMetrics();
      return metricsRef.current.length > 0;
    };

    const setTargetToClosestCard = () => {
      // Re-read rects because section entrance animations can shift card positions.
      setMetrics();
      if (!ensureMetrics()) {
        ball.style.opacity = "0";
        return;
      }

      ball.style.opacity = "1";

      const viewportAnchor = window.scrollY + window.innerHeight * 0.45;
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      let selected = metricsRef.current[0];
      if (atBottom) {
        selected = metricsRef.current[metricsRef.current.length - 1];
      } else {
        let minDistance = Number.POSITIVE_INFINITY;
        for (const metric of metricsRef.current) {
          const distance = Math.abs(metric.absoluteCenterY - viewportAnchor);
          if (distance < minDistance) {
            minDistance = distance;
            selected = metric;
          }
        }
      }

      const anchorY =
        anchor === "top"
          ? selected.absoluteTop + Math.min(72, Math.max(46, selected.height * 0.24))
          : selected.absoluteCenterY;

      const rawX = selected.left - BALL_SIZE - 14;
      const rawY = anchorY - window.scrollY - BALL_SIZE / 2;
      const maxX = window.innerWidth - BALL_SIZE - 8;
      const minY = 88;
      const maxY = window.innerHeight - BALL_SIZE - 10;

      targetRef.current = {
        x: Math.max(8, Math.min(maxX, rawX)),
        y: Math.max(minY, Math.min(maxY, rawY)),
      };
    };

    const scheduleTargetUpdate = () => {
      if (updateFrameRef.current) return;
      updateFrameRef.current = requestAnimationFrame(() => {
        updateFrameRef.current = null;
        setTargetToClosestCard();
      });
    };

    const animate = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      const velocity = velocityRef.current;

      velocity.x = (velocity.x + (target.x - current.x) * STIFFNESS) * DAMPING;
      velocity.y = (velocity.y + (target.y - current.y) * STIFFNESS) * DAMPING;

      current.x += velocity.x;
      current.y += velocity.y;

      ball.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    setMetrics();
    setTargetToClosestCard();
    animationFrameRef.current = requestAnimationFrame(animate);

    const waitForCards = () => {
      if (ensureMetrics()) {
        setTargetToClosestCard();
        return;
      }
      retryFrameRef.current = requestAnimationFrame(waitForCards);
    };

    if (!metricsRef.current.length) {
      retryFrameRef.current = requestAnimationFrame(waitForCards);
    }

    // Keep target synced during the initial section transition.
    let settleFrames = 0;
    const settleDuringIntro = () => {
      setTargetToClosestCard();
      settleFrames += 1;
      if (settleFrames < 70) {
        retryFrameRef.current = requestAnimationFrame(settleDuringIntro);
      }
    };
    retryFrameRef.current = requestAnimationFrame(settleDuringIntro);

    const onScroll = () => scheduleTargetUpdate();
    const onResize = () => {
      setMetrics();
      scheduleTargetUpdate();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (updateFrameRef.current) cancelAnimationFrame(updateFrameRef.current);
      if (retryFrameRef.current) cancelAnimationFrame(retryFrameRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [enabled, selector, anchor]);

  if (!enabled) return null;

  return (
    <div
      ref={ballRef}
      className="fixed top-0 left-0 pointer-events-none z-[60] w-3.5 h-3.5 rounded-full bg-black border border-white shadow-[0_0_0_2px_rgba(0,0,0,0.12)]"
      style={{
        transform: "translate3d(20px, 140px, 0)",
        opacity: 0,
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
};

export default ScrollCardBall;
