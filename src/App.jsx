import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import FeaturedDishes from "./components/FeaturedDishes";
import Gallery from "./components/Gallery";
import About from "./components/About";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <FeaturedDishes />
        <Gallery />
        <About />
        <LocationMap />
      </main>
      <Footer />
    </>
  );
}

export default App;
