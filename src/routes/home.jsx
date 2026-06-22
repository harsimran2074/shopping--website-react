import React from "react";
import HomeItem from "../components/homeitem";
import { useSelector } from "react-redux";
const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => { 
              return  <HomeItem item={item} key={item.id}></HomeItem>  
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
