import { Fragment, useEffect, useRef } from "react";
import Typed from "typed.js";
const TypingAnimation = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<span style="color: #0A64BC;">Computer Engineer 👨‍💻</span>',
        '<span style="color: #0A64BC;">Full Stack Web Developer 🖥️</span>',
        '<span style="color: #0A64BC;">Machine Learning Developer 🤖</span>',
        '<span style="color: #0A64BC;">Freelancer 🌐</span>',
        '<span style="color: #0A64BC;">Content Writer ✍️</span>',
        '<span style="color: #0A64BC;">Polyglot 🗣️</span>'
      ], // Strings to display #FFD700
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      // Set cursor color to #0A64BC as well
      preStringTyped: (arrayPos, self) => {
        if (self) {
          self.cursor.style.color = "#0A64BC";
        }
      },
      // Set cursor color to #0A64BC as well
      onStringTyped: (arrayPos, self) => {
        if (self) {
          self.cursor.style.color = "#0A64BC";
        }
      },
    });

    // Destropying
    return () => {
      typed.destroy();
    };

  }, []);
  return (
    <Fragment>
      <span  id="type-it" className="subtitle subtitle-typed" ref={el}></span>
    </Fragment>
  );
};
export default TypingAnimation;
