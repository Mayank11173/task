import React from "react";
import "./homeStyling.css";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <form className="signup-form">
        <fieldset>
          <legend>Welcome :)</legend>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="phone">Phone No</label>
          <input type="tel" id="phone" placeholder="Enter your phone" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </section>
  );
};

export default Home;
