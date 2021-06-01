import React from "react";

const Poster1 = () => {
  return (
    <>
      <div className="poster1_div">
        <div className="img_div">
          <img
            src="https://images.unsplash.com/photo-1598965402089-897ce52e8355?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=350&q=80"
            alt="img.."
          />
        </div>

        <div className="right_side">
          <h2>GoDaddy Pro Contest</h2>
          <h3>
            Get a .com for <span class="no-wrap-text"> ₹199.00*</span>/1st yr.
          </h3>
          <p>Grab the world's most popular domain.</p>
          <button className="btn" type="button">
            Find Out How <span> →</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Poster1;
