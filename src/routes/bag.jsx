import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BagSummary from "../components/bagsummary";
import BagItem from "../components/bagitem";
import { useSelector } from "react-redux";

const Bag = () => {
  const item = useSelector((store) => store.bagItems);

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {item?.map((item) => {
              return <BagItem item={item} />;
            })}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
