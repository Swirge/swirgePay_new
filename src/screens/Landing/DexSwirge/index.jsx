import React from "react";
import IconCards from "../../../component/IconCards";
import { dataList } from "./dexSwirge.data";
import "./dexSwirge.styles.scss";
import { Route } from "react-router-dom";

const DexSwirge = () => {
  return (
    <section id="features" className="dex-wrap flex">
      <IconCards dataList={dataList} />
    </section>
  );
};

export default DexSwirge;
