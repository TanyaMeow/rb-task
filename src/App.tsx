import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Greeting} from "./components/Greeting";
import {Questions} from "./components/Questions";
import {Slider} from "./components/Slider";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Greeting />
        <Questions />
        <Slider />
        <Footer />
    </div>
  );
}

export default App;
