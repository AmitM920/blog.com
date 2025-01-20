import React from "react";

function Articles(props) {
  let msg = {
    color: "blue",
  };
  return (
    <>
    <div className= "post">
      {/* [plugin:vite:react-babel] C:\Users\Asus\Downloads\js\react\blog.com\src\components\Articles.jsx: Unexpected token (5:21)     <div>Articles</div> */}
      {/* <h1 style="color:red;">Articles</h1>  wrong css syntax */}
      <h1 style={{ color: "red" }}>Articles</h1>
      {/* one is curly for dataset and second is for object */}
      <p style={msg}>
        fadfadf fasdrae a eafea faefaerewr faerfaer a aefaerfra aefrfar Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </p>
      {/* Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? */}
      <hr />
      <img src={'./public/'+ props.imgAdd}/>

    
      <hr />
      {props.children}
      </div>
     
      
      {/* the Articles tag works as a component here */}
    </>
  );
}

export default Articles;
