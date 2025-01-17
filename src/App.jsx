import React from "react";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
       <Header data = "Welcome to the website Name"></Header>
      {/* <h1>Welcome Blog.com</h1> */}
      <Navigation></Navigation>
      <div className="row">
      <Articles imgAdd="Windows-11-SE-Colorful-Abstract-Background-4K-Wallpaper.jpg">
        <p>This is article one</p>
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
