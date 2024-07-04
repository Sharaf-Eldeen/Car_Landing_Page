import { useState } from "react";
import Background from "./Components/Background/Background.js";
import NavigationBar from "./Components/NavBar/NavigationBar.js";
import Hero from "./Components/Hero/Hero.js";

function App() {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} imageCount={heroCount} />
      <NavigationBar />
      <Hero
        heroData={heroData[heroCount]}
        imageCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </div>
  );
}

export default App;
