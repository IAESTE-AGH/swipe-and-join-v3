import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import iaesteLogo from "./assets/other/iaesteLogo.ico";
import viteLogo from "/vite.svg";
// import "./App2.css";
import "./index.css";

const AnimatedLogo = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000); // opóźnienie
    return () => clearTimeout(timer);
  }, []);

  return (
    <img
      src={iaesteLogo}
      alt="IAESTE Logo"
      className={`w-auto h-auto transition-opacity duration-1000 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
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
