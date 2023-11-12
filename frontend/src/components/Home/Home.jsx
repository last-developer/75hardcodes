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
        <li>
          <Link to="/day15">Day 15: User Reviews and Ratings</Link>
        </li>
        <li>
          <Link to="/day16">Day 16: Writing Routes in Your React App</Link>
        </li>
        <li>
          <Link to="/day17">Day 17: Integrating Stripe for Payments</Link>
        </li>
        <li>
          <Link to="/day18">Day 18: My Orders Component</Link>
        </li>
        <li>
          <Link to="/day19">Day 19: Image Uploader with Cropping Functionality</Link>
        </li>
        <li>
          <Link to="/day20">Day 20: Dynamic Search Component</Link>
        </li>
        <li>
          <Link to="/day21">Day 21: Pagination Component</Link>
        </li>
        <li>
          <Link to="/day22">Day 22: Backend Pagination Implementation</Link>
        </li>
        <li>
          <Link to="/day23">Day 23: Date & Time Picker</Link>
        </li>
        <li>
          <Link to="/day24">Day 24: Drag & Drop List Reordering</Link>
        </li>
        <li>
          <Link to="/day25">Day 25: File Dropzone Component</Link>
        </li>
        <li>
          <Link to="/day26">Day 26: Interactive Dashboard with Real Charts</Link>
        </li>
        <li>
          <Link to="/day27">Day 27: Custom Weather Widget</Link>
        </li>
        <li>
          <Link to="/day28">Day 28: Implementing JWT Authentication Middleware</Link>
        </li>
        <li>
          <Link to="/day29">Day 29: Crafting Role-Based Middleware in Node.js</Link>
        </li>
        <li>
          <Link to="/day30">Day 30: Setting Up MongoDB with Node.js</Link>
        </li>
        <li>
          <Link to="/day31">Day 31: Advanced Mongoose Schemas and Relationships</Link>
        </li>
        <li>
          <Link to="/day32">Day 32: Database Indexing and Schema Design Best Practices</Link>
        </li>
        <li>
          <Link to="/day33">Day 33: Robust Error Handling and Logging</Link>
        </li>
        <li>
          <Link to="/day34">Day 34: Automating Tests for a Rock-Solid Application</Link>
        </li>
      </ul>
    </section>
  )
}

export default Home;