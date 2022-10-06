import React, {Component} from "react"
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Counter from "./components/Counter";
import ImageSlider from "./components/ImageSlider";





function App() {
  return (
    <div className="App">
      <ImageSlider />
      <Counter />
    </div>
  );
}

export default App;
