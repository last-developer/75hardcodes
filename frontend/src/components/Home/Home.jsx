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
      </ul>
    </section>
  )
}

export default Home;