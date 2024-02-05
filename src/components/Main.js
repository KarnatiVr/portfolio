import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Skills from './skills'
import Project from './project'
import Experience from './experience'
const Main = () => {
  return (
    <div>
      <div className="container shadow-lg mt-3 bg-white rounded">
        <Navbar />
        <Header />
      </div>
      <div className="container shadow-lg mt-3 bg-white rounded">
        <About />
      </div>
      <div className="container shadow-lg mt-3 bg-white rounded">
        <Skills />
      </div>
      <div className=" project--section container shadow-lg mt-3 bg-white rounded">
        <Project />
      </div>
      <div className="container shadow-lg mt-3 bg-white rounded">
        <Experience />
      </div>
    </div>
  );
}

export default Main