import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import iaesteLogo from "./assets/other/iaesteLogo.ico";
import Intro from "./Intro.tsx";
// import "./App2.css";
import "./index.css";

const AnimatedLogo = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <img
      src={iaesteLogo}
      alt="IAESTE Logo"
      className={`w-[40vh] h-[20vh] transition-all duration-1000 ease-out
        absolute left-1/2 transform -translate-x-1/2
        ${
          visible
            ? "top-1/2 -translate-y-1/2 opacity-100"
            : "top-[100vh] opacity-0"
        }
      `}
    />
  );
};

const App2 = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#065f46] text-[10vh]">
      <AnimatedLogo />
    </div>
  );
};

export default App2;
