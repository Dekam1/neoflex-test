import { useDispatch } from "react-redux";
import axios from "axios";

import {
  decrement,
  deleteItem,
  increment,
} from "../../redux/slices/basketSlices";

import style from "./style.module.scss";
import delIcon from "../../assets/img/del.svg";

function BasketItem({ title, img, count, price, currentPrice, curId, id }) {
  const dispatch = useDispatch();

  const deleteFromBasket = async () => {
    dispatch(deleteItem(curId));
    await axios.delete(`https://7a6d59b7b16a5ada.mokky.dev/basket/${id}`);
  };

  const handlePlus = () => {
    axios.patch(`https://7a6d59b7b16a5ada.mokky.dev/basket/${id}`, {
      count: count + 1,
    });
    dispatch(increment(curId));
  };

  const handleMinus = () => {
    axios.patch(`https://7a6d59b7b16a5ada.mokky.dev/basket/${id}`, {
      count: count - 1,
    });
    dispatch(decrement(curId));
  };

  return (
    <li className={style.item}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <img width={146} src={img} alt={title} />
          <div className={style.options}>
            <button
              onClick={handleMinus}
              disabled={count === 1}
              className={style.button}
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={handlePlus}
              disabled={count === 5}
              className={style.button}
            >
              +
            </button>
          </div>
        </div>
        <div className={style.middle}>
          <h3 className={style.name}>{title}</h3>
          <span>{currentPrice ? currentPrice : price} ₽</span>
        </div>
        <div className={style.right}>
          <img
            onClick={deleteFromBasket}
            width={20}
            src={delIcon}
            alt="delete"
          />
          <span>{count * (currentPrice ? currentPrice : price)} ₽</span>
        </div>
      </div>
    </li>
  );
}

export default BasketItem;
