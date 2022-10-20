
import './App.css';
import {Route, Routes } from "react-router-dom"
import Nav from './components/Nav';
import Main from './pages/Main'
function App() {
  return (
    <div className="App">
      <Nav />
     <Routes>
      <Route path="/" element={<Main />}/>
     </Routes>
    </div>
  );
}

export default App;
