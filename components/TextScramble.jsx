'use client'

import { useEffect, useState, useRef } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz-.,+*!?@&%/=";
const loopDelay = 1000;
const initDelay = 100;

export default function TextScramble({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [iteration, setIteration] = useState(0);
  const [fontSize, setFontSize] = useState("45px"); // Default font size
  const intersectionRef = useRef(null);
  const value = String(children);

  const encrypt = (iteration) => {
    return value
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return value[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    observer.observe(intersectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval = null;

    if (isVisible) {
      interval = setTimeout(() => {
        setIteration((prev) => prev + 1);
        interval = setInterval(() => {
          setIteration((prev) => prev + 1);
        }, 110);
      }, initDelay);
    }

    return () => clearInterval(interval);
  }, [isVisible]);

  // Adjust font size based on window width (for media query effect)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setFontSize("24px"); // Font size for mobile
      } else {
        setFontSize("45px"); // Font size for larger screens
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  return (
    <span
      ref={intersectionRef}
      style={{
        fontSize: fontSize,
        fontWeight: "bold",
        fontFamily: "helvetica",
      }}
    >
      {isVisible ? encrypt(iteration) : value}
    </span>
  );
}
