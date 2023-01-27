import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GoogleMeetCard from './components/GoogleMeetCard'

function App() {
  return (
    <>
      <Header />
      <h1 className="test">Salam React.js</h1>
      <p>some description</p>
      <GoogleMeetCard />

      <Footer />
    </>
  );
}

export default App;
// default -> export default App;   -> import App from './filePath'
// named -> export const name='ali'     --> import {name as test} from "./filePath"
