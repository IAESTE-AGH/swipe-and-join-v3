import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Intro from "./Intro.tsx";
import App2 from "./App2.tsx";
import "./index.css";

const MainComponent = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const headings = [
    [
      "Struktura IAESTE",
      "IAESTE dzieli się na 6 grup roboczych, a kandydaci muszą wybrać, do której z nich chcą dołączyć podczas rekrutacji",
    ],
    [
      "Grupy robocze",
      "Grupami roboczymi w naszej organizacji są: IT, Grafika, HR, PF, I&O oraz JFR.",
    ],
    [
      "Czym jest Swipe&Join?",
      "IAESTE Swipe&Join to narzędzie, dzięki któremu dowiesz się, do której grupy roboczej pasujesz najbardziej",
    ],
    [
      "Twoja aktywność",
      "Po kliknięciu kontynuuj, odpowiesz na kilka pytań, a następie poznasz odpowiednie grupy robocze oraz wybierzesz te, które najbardziej do Ciebie pasują",
    ],
  ];

  return (
    <React.StrictMode>
      {showIntro ? <Intro labels={headings} /> : <App2 />}
    </React.StrictMode>
  );
};

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App2 />
//   </React.StrictMode>
// );
ReactDOM.createRoot(document.getElementById("root")!).render(<MainComponent />);
