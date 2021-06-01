import React from "react";
import Mainpage from "./Mainpage";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import Poster1 from "./Poster1";
import Table from "./Table";

const App = () => {
  return (
    <>
      <div>
        <Navbar1 />
        <Navbar2 />
        <Mainpage />
        <Table />
        <Poster1 />
      </div>
    </>
  );
};

export default App;
