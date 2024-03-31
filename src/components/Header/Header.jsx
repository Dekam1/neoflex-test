import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import style from "./style.module.scss";
import favoritesLogo from "../../assets/img/favorites.svg";
import basketLogo from "../../assets/img/basket.svg";

function Header() {
  const itemsCount = useSelector((state) => state.basketItems.items);

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Link to="/">QPICK</Link>
        </div>
        <nav className={style.nav}>
          <a href="/favorites">
            <img src={favoritesLogo} alt="favorites" />
            <span>2</span>
          </a>
          <Link to="/basket">
            <img src={basketLogo} alt="basket" />
            <span>{itemsCount.length}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
