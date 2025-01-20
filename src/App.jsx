import { Link, NavLink, Routes, Route } from "react-router-dom";

import React from "react";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <marquee>see the latest offer</marquee>
      <Header data="Welcome to the website Name"></Header>
      {/* <h1>Welcome Blog.com</h1> */}
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<h2>welcome to app</h2>}></Route>
        <Route path="*" element={<h2>Page not found</h2>}></Route>
        <Route
          path="/training"
          element={<h2>Welcome to Training page content</h2>}
        ></Route>
        {/* <Link to="/training" element={<h2>welcome to training</h2>}></Link> */}
        {/* <Link to="*" element={<h1>Page Not Found</h1>}></Link> */}
      </Routes>

      <div className="row">
        <Articles imgAdd="Windows-11-SE-Colorful-Abstract-Background-4K-Wallpaper.jpg">
          <p>This is article one</p>
          {/* we pass the data in a variable called imgAdd which is passed as props.imgAdd  */}
          {/* <img src=".\public\Windows-11-SE-Colorful-Abstract-Background-4K-Wallpaper.jpg"></img> */}
        </Articles>
        <Articles imgAdd="Windows-11-SE-Colorful-Abstract-Background-4K-Wallpaper.jpg">
          <p>This is article two</p>
          {/* <img src="wallpaperflare.com_wallpaper.jpg"></img> */}
        </Articles>
        <Articles imgAdd="Windows-11-SE-Colorful-Abstract-Background-4K-Wallpaper.jpg">
          <p>This is article three</p>
        </Articles>
        <Articles imgAdd="wallpaperflare.com_wallpaper.jpg">
          <p>This is article four</p>
        </Articles>
        <Articles imgAdd="Windows-11-SE-Colorful-Abstract-Background-4K-Wallpaper.jpg">
          <p>This is article five</p>
        </Articles>
        <Articles imgAdd="wallpaperflare.com_wallpaper.jpg">
          <p>This is article six</p>
        </Articles>
      </div>
    </>
  );
}

export default App;
