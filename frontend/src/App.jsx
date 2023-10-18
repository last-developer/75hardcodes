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
import Day5 from './components/Day5/Day5';
import ContactUs from './components/Day6/ContactUs/ContactUs';
import Day6 from './components/Day6/Day6';
import UserProfile from './components/Day7/UserProfile/UserProfile';
import Day7 from './components/Day7/Day7';
import Day8 from './components/Day8/Day8';
import Day9 from './components/Day9/Day9';
import { ToastContainer } from 'react-toastify';
import NotificationTemplate from './components/Day9/NotificationTemplate';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer theme="dark" position="top-right" autoClose={3000} />

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
          <Route path="appheader" element={<AppHeader />} />

          {/* Day5-- */}
          <Route path="day5" element={<Day5 />} />

          {/* Day6-- */}
          <Route path="day6" element={<Day6 />} />
          <Route path="contactus" element={<ContactUs />} />

          {/* Day7-- */}
          <Route path="day7" element={<Day7 />} />
          <Route path="userprofile" element={<UserProfile />} />

          {/* Day8-- */}
          <Route path="day8" element={<Day8 />} />

          {/* Day9-- */}
          <Route path="day9" element={<Day9 />} />
          <Route path="notification" element={<NotificationTemplate />} />


          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;