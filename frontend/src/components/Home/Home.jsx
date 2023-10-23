import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='home'>
      <ul>
        <li>
          <Link to="/day1">Day 1: A Login Component</Link>
        </li>
        <li>
          <Link to="/day2">Day 2: Signup & Reset Password Component</Link>
        </li>
        <li>
          <Link to="/day3">Day 3: Feedback Form Component</Link>
        </li>
        <li>
          <Link to="/day4">Day 4: Header with Responsive Menu</Link>
        </li>
        <li>
          <Link to="/day5">Day 5: Building a Responsive Footer</Link>
        </li>
        <li>
          <Link to="/day6">Day 6: Contact Us Form</Link>
        </li>
        <li>
          <Link to="/day7">Day 7: User Profile Component</Link>
        </li>
        <li>
          <Link to="/day8">Day 8: Update User Profile</Link>
        </li>
        <li>
          <Link to="/day9">Day 9: Notification with react-toastify</Link>
        </li>
        <li>
          <Link to="/day10">Day 10: API Notifications</Link>
        </li>
        <li>
          <Link to="/day11">Day 11: Implement FAQ Component</Link>
        </li>
        <li>
          <Link to="/day12">Day 12: Pricing Plans</Link>
        </li>
        <li>
          <Link to="/day13">Day 13: Building a Comment System</Link>
        </li>
        <li>
          <Link to="/day14">Day 14: Product Details Component</Link>
        </li>
      </ul>
    </section>
  )
}

export default Home;