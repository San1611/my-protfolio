import React from "react";
import Typewriter from "typewriter-effect";  // Import the Typewriter library
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <h1>Hi, I'm Sanskriti</h1>
      <p>
        <Typewriter
          options={{
            strings: ["Aspiring Web Developer", "FullStack Developer", "Tech Enthusiast"],
            autoStart: true,
            loop: true,
            delay: 100, // Typing delay
          }}
        />
      </p>
    </section>
  );
}

export default Home;
