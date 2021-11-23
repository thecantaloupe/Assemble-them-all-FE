import React from "react";
import { useSelector } from "react-redux";

import Assemble from "./Assemble/Assemble";

const Assembles = () => {
  const assembles = useSelector((state) => state.assembles);
  //loaded function
  const loaded = () => {
    return assembles.map((assembled) => (
      <div key={assembled._id} className="assembled"  >
        <img src={assembled?.fileData } style={{width: "100px"}}/>
        <Assemble assembled={assembled} />
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <>
      <div className="card3">{!assembles.length ? loading() : loaded()}</div>
    </>
  );
};

export default Assembles;