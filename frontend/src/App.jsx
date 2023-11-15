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
import Day10 from './components/Day10/Day10';
import FAQ from './components/Day11/FAQ/FAQ';
import Day11 from './components/Day11/Day11';
import Pricing from './components/Day12/Pricing/Pricing';
import Day12 from './components/Day12/Day12';
import CommentSystem from "./components/Day13/commentSystem/CommentSystem";
import Day13 from "./components/Day13/Day13";
import ProductDetails from "./components/Day14/ProductDetails/ProductDetails";
import Day14 from "./components/Day14/Day14";
import Day15 from "./components/Day15/Day15";
import Day16 from "./components/Day16/Day16";
import Day17 from "./components/Day17/Day17";
import Payment from "./components/Day17/Payment";
import Day18 from "./components/Day18/Day18";
import MyOrders from "./components/Day18/MyOrders";
import ImageUploader from "./components/Day19/ImageUploader/ImageUploader";
import Day19 from "./components/Day19/Day19";
import Search from "./components/Day20/Search/Search";
import Day20 from "./components/Day20/Day20";
import Pagination from "./components/Day21/Pagination/Pagination";
import Day21 from "./components/Day21/Day21";
import Day22 from "./components/Day22/Day22";
import BackendPagination from "./components/Day22/BackendPagination/BackendPagination";
import Day23 from "./components/Day23/Day23";
import DateTimePicker from "./components/Day23/Pickers/DateTimePicker";
import DragDrop from "./components/Day24/DragDrop/DragDrop";
import Day24 from "./components/Day24/Day24";
import FileDropzone from "./components/Day25/FileDropZone/FileDropZone";
import Day25 from "./components/Day25/Day25";
import CustomizableDashboard from "./components/Day26/CustomizableDashboard/CustomizableDashboard";
import Day26 from "./components/Day26/Day26";
import WeatherWidget from "./components/Day27/WeatherWidget/WeatherWidget";
import Day27 from "./components/Day27/Day27";
import Day28 from "./components/Day28/Day28";
import Day29 from "./components/Day29/Day29";
import Day30 from "./components/Day30/Day30";
import Day31 from "./components/Day31/Day31";
import Day32 from "./components/Day32/Day32";
import Day33 from "./components/Day33/Day33";
import Day34 from "./components/Day34/Day34";
import Day35 from "./components/Day35/Day35";
import Day36 from "./components/Day36/Day36";

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

          {/* Day10-- */}
          <Route path="day10" element={<Day10 />} />

          {/* Day11-- */}
          <Route path="day11" element={<Day11 />} />
          <Route path="faq" element={<FAQ />} />

          {/* Day12-- */}
          <Route path="day12" element={<Day12 />} />
          <Route path="pricing" element={<Pricing />} />

          {/* Day13-- */}
          <Route path="day13" element={<Day13 />} />
          <Route path="comment" element={<CommentSystem />} />

          {/* Day14-- */}
          <Route path="day14" element={<Day14 />} />
          <Route path="productdetails" element={<ProductDetails />} />

          {/* Day15-- */}
          <Route path="day15" element={<Day15 />} />

          {/* Day16-- */}
          <Route path="day16" element={<Day16 />} />

          {/* Day17-- */}
          <Route path="day17" element={<Day17 />} />
          <Route path="payment" element={<Payment />} />

          {/* Day18-- */}
          <Route path="day18" element={<Day18 />} />
          <Route path="myorders" element={<MyOrders />} />

          {/* Day19-- */}
          <Route path="day19" element={<Day19 />} />
          <Route path="imageuploader" element={<ImageUploader />} />

          {/* Day20-- */}
          <Route path="day20" element={<Day20 />} />
          <Route path="search" element={<Search />} />

          {/* Day21-- */}
          <Route path="day21" element={<Day21 />} />
          <Route path="pagination" element={<Pagination />} />

          {/* Day22-- */}
          <Route path="day22" element={<Day22 />} />
          <Route path="backendpagination" element={<BackendPagination />} />

          {/* Day23-- */}
          <Route path="day23" element={<Day23 />} />
          <Route path="datetimepicker" element={<DateTimePicker />} />

          {/* Day24-- */}
          <Route path="day24" element={<Day24 />} />
          <Route path="dragdrop" element={<DragDrop />} />

          {/* Day25-- */}
          <Route path="day25" element={<Day25 />} />
          <Route path="filedropzone" element={<FileDropzone />} />

          {/* Day26-- */}
          <Route path="day26" element={<Day26 />} />
          <Route path="customizabledashboard" element={<CustomizableDashboard />} />

          {/* Day27-- */}
          <Route path="day27" element={<Day27 />} />
          <Route path="weatherwidget" element={<WeatherWidget />} />

          {/* Day28-- */}
          <Route path="day28" element={<Day28 />} />

          {/* Day29-- */}
          <Route path="day29" element={<Day29 />} />

          {/* Day30-- */}
          <Route path="day30" element={<Day30 />} />

          {/* Day31-- */}
          <Route path="day31" element={<Day31 />} />

          {/* Day32-- */}
          <Route path="day32" element={<Day32 />} />

          {/* Day33-- */}
          <Route path="day33" element={<Day33 />} />

          {/* Day34-- */}
          <Route path="day34" element={<Day34 />} />

          {/* Day35-- */}
          <Route path="day35" element={<Day35 />} />

          {/* Day36-- */}
          <Route path="day36" element={<Day36 />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;