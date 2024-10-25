import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      // Move the dot directly to the mouse position
      gsap.to(dotRef.current, {
        x: x - 5, // Adjust for the dot size (half width/height)
        y: y - 5,
        duration: 0.1, // Fast movement
      });

      // Smoothly move the larger circle
      gsap.to(circleRef.current, {
        x: x - 25, // Adjust for the circle size
        y: y - 25,
        duration: 0.3, // Slower movement for smooth trailing effect
        ease: 'power2.out',
      });
    };

    // Add mouse move listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const enlargeCursor = () => {
      gsap.to(dotRef.current, {
        scale: 1.5, // Enlarge the dot
        backgroundColor: 'black', // Change the background to black
        mixBlendMode: 'difference', // Apply mix-blend-mode on hover
        duration: 0.3,
      });
      gsap.to(circleRef.current, {
        scale: 1.5,
        backgroundColor: 'black', // Circle also changes to black
        mixBlendMode: 'difference', // Apply mix-blend-mode to the circle
        duration: 0.3,
      });
    };

    const shrinkCursor = () => {
      gsap.to(dotRef.current, {
        scale: 1, // Return to original size
        backgroundColor: 'black', // Keep it black
        mixBlendMode: 'normal', // Remove mix-blend-mode when not hovering
        duration: 0.3,
      });
      gsap.to(circleRef.current, {
        scale: 1, // Return circle to normal size
        backgroundColor: 'transparent', // Circle outline
        mixBlendMode: 'normal', // Remove mix-blend-mode when not hovering
        duration: 0.3,
      });
    };

    // Add listeners for hover effects on links
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', enlargeCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });

    // Cleanup listeners on unmount
    return () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', enlargeCursor);
        el.removeEventListener('mouseleave', shrinkCursor);
      });
    };
  }, []);

  useEffect(() => {
    const hideCursor = () => {
      gsap.to(dotRef.current, { opacity: 0, duration: 0.3 });
      gsap.to(circleRef.current, { opacity: 0, duration: 0.3 });
    };

    const showCursor = () => {
      gsap.to(dotRef.current, { opacity: 1, duration: 0.3 });
      gsap.to(circleRef.current, { opacity: 1, duration: 0.3 });
    };

    // Hide cursor when leaving the screen
    window.addEventListener('mouseleave', hideCursor);
    window.addEventListener('mouseenter', showCursor);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('mouseleave', hideCursor);
      window.removeEventListener('mouseenter', showCursor);
    };
  }, []);

  return (
    <>
      {/* Main dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-50"
      ></div>

      {/* Outer circle */}
      <div
        ref={circleRef}
        className="custom-cursor-circle fixed top-0 left-0 w-12 h-12 border border-black rounded-full pointer-events-none z-40"
      ></div>
    </>
  );
};

export default CustomCursor;
