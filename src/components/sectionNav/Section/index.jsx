import { useCallback, useEffect, useRef } from "react";

const Section = ({ children, name, setCurrentSectionInview }) => {
  const sectionRef = useRef();

  const handleSectionInView = useCallback(() => {
    if (sectionRef.current) {
      const sectionBounding = sectionRef.current.getBoundingClientRect();
      const condition =
        sectionBounding.top <=
        (window.innerHeight || document.documentElement.clientHeight);
      condition && setCurrentSectionInview(sectionRef.current.id);
    }
  }, [setCurrentSectionInview]);

  useEffect(() => {
    const handleScroll = () => {
      handleSectionInView();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleSectionInView]);

  return (
    <section
      id={name}
      name={name}
      ref={sectionRef}
      className={` h-[120vh] bg-gradient-to-br from-blue-500 to-red-500 via-black shadow-2xl will-change-scroll my-[5rem]`}
    >
      {children}
    </section>
  );
};

export default Section;
