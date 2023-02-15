import React from 'react'
import {BrowserRouter, Link, Route, Routes, Outlet} from "react-router-dom"

const About = () => {

  return (
    <div>
    <h1>
        This page is About <br /><br /><br /><br />
    </h1>
      <Outlet />
    </div>
  );
}

export default About
