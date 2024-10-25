import { Fragment, useEffect, useRef } from "react";
import Typed from "typed.js";
const TypingAnimation = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<span style="color: #2fbf71;">Computer Engineer @ Sakarya University</span>',
        '<span style="color: #2fbf71;">Machine Learning Engineer</span>',
        '<span style="color: #2fbf71;">Data Science Masters @ Özyeğin University</span>',
        '<span style="color: #2fbf71;">Freelancer</span>',
        '<span style="color: #2fbf71;">Content Writer</span>',
        '<span style="color: #2fbf71;">Polyglot</span>'
      ], // Strings to display #FFD700
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      // Set cursor color to #2fbf71 as well
      preStringTyped: (arrayPos, self) => {
        if (self) {
          self.cursor.style.color = "#2fbf71";
        }
      },
      // Set cursor color to #2fbf71 as well
      onStringTyped: (arrayPos, self) => {
        if (self) {
          self.cursor.style.color = "#2fbf71";
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
