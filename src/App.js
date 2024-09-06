import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
