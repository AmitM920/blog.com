import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  let name = "website link";
  //  ^  const navs = ["p1", "p2", "p3", "p4", "p4", "p1"];
  //  any logical we want to if write then we write it above the return
  // array map method : loop
  //^   const list = navs.map((data, index) => (
  //^     <li key={index}>
  //^       <a href="./">{data}</a>
  //^     </li>
  //^   ));
  const navs = [
    { id: 1, url: "./", urlName: "Home" },
    {
      id: 2,
      url: "./Training",
      urlName: "Training",
    },
    {
      id: 3,
      url: "./Development",
      urlName: "Development",
    },
    {
      id: 4,
      url: "./Blog",
      urlName: "Blog",
    },
    {
      id: 5,
      url: "./Contact us",
      urlName: "Contact us",
    },
  ];
  const list = navs.map((data) => (
    <li key={data.id}>
      {/* <a href= {data.url}>{data.urlName}</a> */}
      {/* we dont use anchor tags in react app instead we use Router library components, here NavLink is a component */}
      <NavLink to={data.url}>{data.urlName}</NavLink>
    </li>
  ));

  return (
    <>
      <nav>
        <ul>
          {/* <li>
            <a href="./">Home{name}</a>
          </li> */}
          {list}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
// !  Warning: Each child in a list should have a unique "key" prop.                  Navigation.jsx?t=1737090863833:30
// !  @react-refresh:247 Warning: Encountered two children with the same key, `p1`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. Error Component Stack
//! at ul (<anonymous>)
//! at nav (<anonymous>)
//! at Navigation (<anonymous>)
//! at App (<anonymous>)
