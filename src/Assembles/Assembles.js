import React from "react";
import { useSelector } from "react-redux";
import Assemble from "./Assemble/Assemble";
import './styles.css'

const Assembles = (props) => {
  const assembles = useSelector((state) => state.assembles);
  //loaded function
  const loaded = () => {
    return assembles.map((assembled) => (
      <fieldset key={assembled._id} className="assembled"  >
        <Assemble assembled={assembled} />
      </fieldset>
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