import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import BasketItem from "../BasketItem/BasketItem";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Basket() {
  const items = useSelector((state) => state.basketItems.items);

  const totalSum = items.reduce((acc, item) => {
    const { count, price } = item;
    return acc + count * price;
  }, 0);

  return (
    <div className="_wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <h1 className="basket-title">Корзина</h1>
          <div className="basket-wrapper">
            <ul className="basket-list">
              {!items.length && (
                <h3 className="basket-info">Упс. Похоже Пусто</h3>
              )}
              {items.map((item) => (
                <BasketItem key={item.curId} {...item} />
              ))}
            </ul>
            <div className="basket-prices">
              {!!items.length && (
                <div className="basket-prices__top">
                  <span>Итого</span>
                  <span>₽ {totalSum}</span>
                </div>
              )}
              <div className="basket-prices__bottom">
                {!!items.length ? (
                  <button className="button">Перейти к оформлению</button>
                ) : (
                  <Link className="button" to="/">
                    За покупками
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Basket;
