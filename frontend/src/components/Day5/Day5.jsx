import React from 'react';
import '../Day.css'; // Import your responsive CSS file
import Footer from './Footer';

export default function Day5() {
  return (
    <>
    <section className="day-container">
      <h2 className="day-header">Day 5: Building a Responsive Footer</h2>
      <p>
        Welcome to Day 5 of our coding challenge! Today, we're diving into the world of responsive web design by creating a sleek and functional footer for our website.
      </p>
      <p>
        Our footer is divided into four columns, each serving a specific purpose:
      </p>
      <ul>
        <li>Column 1: Our logo, representing our brand identity.</li>
        <li>Column 2: Quick navigation links, including Home, Product, Pricing, and Docs.</li>
        <li>Column 3: Useful links to Help, Careers, Partners, and Privacy Policy.</li>
        <li>Column 4: Stay connected with us through our social media links on Twitter and LinkedIn.</li>
      </ul>
      <p>
        The beauty of this footer is that it's responsive, adapting to various screen sizes to ensure an optimal user experience. Whether you're viewing our website on a desktop, tablet, or smartphone, our footer will look great and provide easy access to key information.
      </p>
      <p>
        We've added a touch of style to make it visually appealing, and you can further customize it to match your brand's aesthetics.
      </p>
      <p>
        As we continue with our coding challenge, we're taking important steps towards mastering web development. Stay tuned for more exciting projects and keep honing your skills!
      </p>
      <ul>
        
        <li>
          <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day5" className="code-link" target="_blank">View the Code</a>
        </li>
      </ul>
    </section>
      <Footer />
    </>
  );
}
