import * as React from "react";
// global styles
import "../sass/index.scss";
// Components
import Home from "../Components/Home/index";
import Header from "../Components/Header/index";
import Navbar from "../Components/Navbar/index";
import Hero from "../Components/Hero/index";
import Projects from '../Components/Projects/index';
import About from '../Components/About/index';
import Contact from '../Components/Contact/index'
import Footer from '../Components/Footer/index'
import ScrollTracker from '../Components/ScrollTracker';

const IndexPage = () => {
  return (
    <>
      <ScrollTracker />
      <Home>
        <Header>
          <Navbar />
        </Header>
        <Hero />
      </Home>
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default IndexPage
