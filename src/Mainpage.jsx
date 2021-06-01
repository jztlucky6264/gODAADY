import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Mainpage = () => {
  return (
    <>
      <div className="poster_div">
        <div className="poster_content">
          <div className="left_side">
            <h2>Domain Names</h2>
            <h3>
              Get a .com for <span class="no-wrap-text"> ₹199.00*</span>/1st yr.
            </h3>
            <p>Grab the world's most popular domain.</p>
            <button className="btn" type="button">
              Get It Now <span>→</span>
            </button>
          </div>
          <div className="right_side">
            <h2>Web Hosting</h2>

            <h3>
              Get a .com for <span class="no-wrap-text"> ₹199.00*</span>/1st yr.
            </h3>
            <p>Grab the world's most popular domain.</p>
            <button className="btn" type="button">
              Learn More <span> →</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
