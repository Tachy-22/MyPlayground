import { HiOutlineArrowNarrowUp } from "react-icons/hi";
const Nav = ({ currentSectionInView }) => {
  const dummyNav = Array.from({ length: 5 }, (_, i) => i);
  const handleNavClick = (e) => {
    console.log(e);
  };
  return (
    <div
      className={`"  w-fit fixed bottom-0 left-0 right-0 my-[4rem] mx-auto border border-gray-500 flex  justify-center p-2 rounded-full bg-black/70 items-center "`}
    >
      <a href="/#top" className=" text-white px-[1rem]">
        <HiOutlineArrowNarrowUp className="xl:text-2xl text-lg" />
      </a>
      {dummyNav.map((path, i) => {
        console.log(currentSectionInView.toString() === path.toString());
        return (
          <a
            onClick={handleNavClick}
            key={i}
            href={`#${path}`}
            className={`" relative   py-[0.2rem] xl:py-2 rounded-full  xl:px-[2rem] px-[1rem]   ${
              currentSectionInView.toString() === path.toString()
                ? "bg-white text-black"
                : "text-white bg-black"
            }"`}
          >
            {path}
            {/* <span
              className={`${
                currentSectionInView.toString() === path.toString()
                  ? "bg-white text-black flex"
                  : " bg-black hidden"
              } translate-x-[100%] transition-all duration-700 absolute w-full top-0 left-0 h-full bg-red-400   rounded-lg "`}
            >
              {" "}
            </span> */}
          </a>
        );
      })}
    </div>
  );
};

export default Nav;
