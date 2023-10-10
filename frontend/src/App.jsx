import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Day1/Login/Login';
import NoPage from './components/NoPage/NoPage';
import Header from './components/Header/Header';
import Day1 from './components/Day1/Day1';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day1" element={<Day1/>} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;