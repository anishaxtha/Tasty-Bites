import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your Favourite food here </h2>
        <p>
          Hungry? Let's satisfy those cravings! TastyBites. brings you the best
          flavors right to your fingertips. Whether you're in the mood for a
          hearty burger, a sizzling plate of pasta, or a fresh salad, we've got
          you covered.
        </p>
        <button>View More</button>
      </div>
    </div>
  );
};

export default Header;
