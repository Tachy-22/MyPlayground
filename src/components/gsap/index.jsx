import React, { useEffect, useRef, useState } from "react";

// get other plugins:

import Flip from "gsap/Flip";

// or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import { Tween } from "gsap/gsap-core";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

const Main = () => {
  const [showAnimationContent, setShowAnimationContent] = useState();
  const animationContainer = useRef(null);
  const yellowC = useRef(null);
  const redC = useRef(null);
  const blueC = useRef(null);
  const top = useRef(null);
  const left = useRef(null);
  const right = useRef(null);
  const bottom = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    setShowAnimationContent(true);

    Tween.from([yellowC.current, redC.current, blueC.current], {
      scrollTrigger: animationContainer.current, // start animation when ".box" enters the viewport
      stagger: 0.1,
      y: -100,
    });
    Tween.from([top.current], {
      scrollTrigger: animationContainer.current, // start animation when ".box" enters the viewport
      y: -100,
    });

    Tween.from([left.current], {
      scrollTrigger: animationContainer.current, // start animation when ".box" enters the viewport
      x: -100,
      duration: 1,
      opacity: 0,
    });

    Tween.from([right.current], {
      scrollTrigger: animationContainer.current, // start animation when ".box" enters the viewport
      x: -100,
      duration: 1.2,
      opacity: 0,
    });
    Tween.from([bottom.current], {
      scrollTrigger: animationContainer.current, // start animation when ".box" enters the viewport
      x: 100,
      duration: 1.4,
      opacity: 0,
    });

    const text = "Welcome to a town different from Balablu !!!";

    const lettersAndSpaces = text.split("").map((char, index) => {
      const element = document.createElement("span");
      element.textContent = char === " " ? "\u00A0" : char; // Use non-breaking space for spaces
      element.style.display = "inline-block";
      return element;
    });

    textRef.current.innerHTML = ""; // Clear the text container

    lettersAndSpaces.forEach((element) => {
      textRef.current.appendChild(element);
    });

    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power3.out" } });
   tl.staggerFrom(
     lettersAndSpaces,
     0.5,
     { opacity: 0, x: -50, stagger: 0.1 },
     0.05
   );
//    tl.staggerTo(
//      lettersAndSpaces,
//      0.5,
//      { opacity: 0, y: -100, stagger: 0.1 },
//      "-=0.5"
//    );
  }, []);

  return (
    <div
      ref={animationContainer}
      className={`" xl:py-[4rem] py-[2rem] flex ${
        showAnimationContent ? "flex " : "hidden "
      } flex-col gap-4 w-full justify-center `}
    >
      <div className="flex justify-center gap-2">
        <div
          ref={yellowC}
          className="w-[4rem] h-[4rem] rounded-full bg-yellow-400"
        ></div>
        <div
          ref={redC}
          className="w-[4rem] h-[4rem] rounded-full bg-red-400"
        ></div>
        <div
          ref={blueC}
          className="w-[4rem] h-[4rem] rounded-full bg-blue-400"
        ></div>
      </div>

      <section className="flex flex-col">
        <div ref={top} className="w-full h-[3rem] bg-green-400"></div>
        <div className="flex justify-between py-2 w-full items-center">
          <div ref={left} className="w-[3rem] h-[10rem] bg-orange-400"></div>
          <p ref={textRef} className="xl:text-2xl text-xl font-bold text-gray-600 bg-white">
            Welcome to a town diferent from Balablu !!!
          </p>
          <div ref={right} className="w-[3rem] h-[10rem] bg-red-400"></div>
        </div>
        <div ref={bottom} className="w-full h-[3rem] bg-purple-400"></div>
      </section>
    </div>
  );
};

export default Main;
