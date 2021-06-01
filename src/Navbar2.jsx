import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const Navbar2 = () => {
  return (
    <>
      <div className="input-group  ">
        <div className="input-group mb-3 input_width">
          <input
            type="text"
            class="form-control "
            placeholder="Find your perfect domain"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <SearchIcon className="search_icon" />
          </button>
        </div>

        <div className="domain_div" id="mobile_hide">
          <strong>.com </strong>
          <span className="price">₹ 199.00*</span>
        </div>
        <div className="domain_div" id="mobile_hide">
          <strong>.in</strong> <span className="price">₹ 199.00*</span>
        </div>
        <div className="domain_div" id="mobile_hide">
          <strong>.guru</strong> <span className="price">₹ 199.00*</span>
        </div>
        <div className="domain_div" id="mobile_hide">
          <strong>.info</strong> <span className="price">₹ 199.00*</span>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
