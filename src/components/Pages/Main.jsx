import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchItems } from "../../redux/slices/itemSlices";

import Header from "../Header/Header";
import LoaderItem from "../LoaderItem";
import MainItem from "../MainItem/MainItem";
import Footer from "../Footer/Footer";

function Main() {
  const items = useSelector((state) => state.items.items);
  const load = useSelector((state) => state.items.status);

  return (
    <div className="_wrapper">
      <Header />
      <main className="main">
        <div className="container">
          {load === "loading" ? (
            <LoaderItem />
          ) : (
            items.map(({ category, data }) => (
              <div className="category" key={category}>
                <h1 className="title">{category}</h1>
                <ul className="item-list">
                  {data.map((item) => (
                    <MainItem
                      key={item.id}
                      {...item}
                      discount={!!item.currentPrice}
                    />
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
