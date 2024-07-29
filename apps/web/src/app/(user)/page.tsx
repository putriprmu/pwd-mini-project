import React from "react";
import Hero from "./views/hero";
import NavbarDesktop from "./views/navbar-desktop";
import UpcomingEvent from "./views/home/upcoming-event";

const HomePage: React.FC = () => {
  return (
    <section className="">
      <NavbarDesktop />
      <Hero />
      <UpcomingEvent />
    </section>
  );
};

export default HomePage;
