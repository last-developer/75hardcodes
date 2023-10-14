import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Day1/Login/Login';
import NoPage from './components/NoPage/NoPage';
import Header from './components/Header/Header';
import Day1 from './components/Day1/Day1';
import Signup from './components/Day2/Signup/Signup';
import ForgotPassword from './components/Day2/ForgotPassword';
import PasswordResetConfirmation from './components/Day2/PasswordResetConfirmation';
import Day2 from './components/Day2/Day2';
import FeedbackForm from './components/Day3/FeedbackForm/FeedbackForm';
import Day3 from './components/Day3/Day3';
import AppHeader from './components/Day4/Header/AppHeader';
import Day4 from './components/Day4/Day4';
import Footer from './components/Day5/Footer';
import Day5 from './components/Day5/Day5';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Day1-- */}
          <Route path="/day1" element={<Day1 />} />
          <Route path="login" element={<Login />} />

          {/* Day2-- */}
          <Route path="day2" element={<Day2 />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="password-reset-confirmation" element={<PasswordResetConfirmation />} />

          {/* Day3-- */}
          <Route path="day3" element={<Day3 />} />
          <Route path="feedback" element={<FeedbackForm />} />

          {/* Day4-- */}
          <Route path="day4" element={<Day4 />} />
          <Route path="appheader" element={<AppHeader />}/>

          {/* Day5-- */}
          <Route path="day5" element={<Day5 />} />
          
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;