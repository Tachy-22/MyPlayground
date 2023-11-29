import { useState } from "react";
import Section from "./Section";
import Nav from "./nav";

const Layout = () => {
  const dummySections = Array.from({ length: 5 }, (_, i) => i);
  const [currentSectionInView, setCurrentSectionInview] = useState(0);
  console.log("currentSectionInView: ", currentSectionInView);
  return (
    <div className="w-full scroll-smooth transition-all duration-1000 ">
      {dummySections.map((number, i) => (
        <div className="">
          {" "}
          <Section
            key={i}
            name={i}
            currentSectionInView={currentSectionInView}
            setCurrentSectionInview={setCurrentSectionInview}
          >
            Section {number}
          </Section>
        </div>
      ))}
      <Nav
        currentSectionInView={currentSectionInView}
        setCurrentSectionInview={setCurrentSectionInview}
      />
    </div>
  );
};

export default Layout;
