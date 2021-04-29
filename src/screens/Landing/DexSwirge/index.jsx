import React from "react";
import IconCards from "../../../component/IconCards";
import { dataList } from "./dexSwirge.data";
import "./dexSwirge.styles.scss";

const DexSwirge = () => {
  return (
    <section className="dex-wrap flex">
      <IconCards dataList={dataList} />
    </section>
  );
};

export default DexSwirge;
