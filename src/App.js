import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GoogleMeetCard from './components/GoogleMeetCard'
import lionImg from './img/alion_afro.jpg'

function App() {
  return (
    <>
      <Header />
      <h1 className="test">Salam React.js</h1>
      <p>some description</p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20
      }}>
        <GoogleMeetCard name="nicat valiyev" sekil={lionImg} />
        <GoogleMeetCard name="samir mamedov" sekil={lionImg} />
        <GoogleMeetCard name="abbasova 22" sekil={lionImg} />
        <GoogleMeetCard name="Ravan Rahimli" sekil={lionImg} />
      </div>
      <Footer />
    </>
  );
}

export default App;
// default -> export default App;   -> import App from './filePath'
// named -> export const name='ali'     --> import {name as test} from "./filePath"
