import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <h1>Salam React.js</h1>
      <p>some description</p>
      <Footer />
    </>
  );
}

export default App;
// default -> export default App;   -> import App from './filePath'
// named -> export const name='ali'     --> import {name as test} from "./filePath"
