import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/basketSlices";
import { Link } from "react-router-dom";
import axios from "axios";

import style from "./style.module.scss";

function MainItem({ id, title, img, discount, currentPrice, price, rating }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basketItems.items);

  const itemAdded = items.some((item) => item.curId === id);

  const addItemToBasket = async () => {
    const newItem = {
      curId: id,
      title,
      img,
      discount,
      currentPrice,
      price,
      count: 1,
    };

    const { data } = await axios.post(
      "https://7a6d59b7b16a5ada.mokky.dev/basket",
      newItem
    );
    dispatch(addItem(data));
  };

  return (
    <li className={style.item}>
      <div className={style.wrapper}>
        <div className={style.header}>
          <img alt={title} src={img} />
        </div>
        <div className={style.body}>
          <h3 className={style.title}>{title}</h3>
          {discount && (
            <div className={style.discount}>
              <span className={style.price}>{currentPrice} ₽</span>
              <span>{price} ₽</span>
            </div>
          )}
          {!discount && <span className={style.price}>{price} ₽</span>}
        </div>
        <div className={style.footer}>
          <span className={style.rating}>{rating}</span>
          {itemAdded ? (
            <Link className={style.button} to="/basket">
              В корзину
            </Link>
          ) : (
            <button onClick={addItemToBasket} className={style.button}>
              Купить
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MainItem;
