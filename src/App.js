import React from "react";
// import TestMain from "./components/TestComponents/TestMain";
// import TodoMain from "./components/appComponents/TodoMain";

import "./index.css";
//import ViewAll from "./components/viewAll";
import Main from "./components/gsap";
import Layout from "./components/sectionNav/Layout";
function App() {
  return (
    <div
      id="top"
      className="min-h-screen w-full flex flex-col xl:p-[4rem] p-1 items-center relative scroll-smooth"
    >
      {/* <TodoMain /> */}
      {/* <TestMain /> */}
      {/* <ViewAll /> */}
      <Main />
      <Layout />
    </div>
  );
}

export default App;
