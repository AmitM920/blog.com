import React from "react";

function Navigation() {
    let name = "website link"
    const navs = ["p1","p2","p3","p4","p4","p5"]
    // array map method : loop
    // any logical we want to if write then we write it above the return
    const list = navs.map(()=>  <li><a href="./">Home</a></li>)

  return (
    <>
      <nav>
        <ul>
            <li><a href="./">Home{name}</a></li>
            {list}
            
          
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
