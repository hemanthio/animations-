'use client'

import { useEffect, useState, useRef } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz-.,+*!?@&%/=";
const loopDelay = 1000;
const initDelay = 100;

export default function TextScramble({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [iteration, setIteration] = useState(0);
  const intersectionRef = useRef(null);
  const value = children;

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

  return (
    <span ref={intersectionRef} style={{ fontSize: "45px", fontWeight: "bold",fontFamily:"helvetica"}}>
      {isVisible ? encrypt(iteration) : value}
    </span>
  );
}
