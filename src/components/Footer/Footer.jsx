import style from "./style.module.scss";
import vk from "../../assets/img/VK.svg";
import tg from "../../assets/img/Telegram.svg";
import wh from "../../assets/img//Whatsapp.svg";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.logo}>QPICK</div>
        <nav className={style.nav}>
          <a href="/favourites">Избранное</a>
          <a href="/basket">Корзина</a>
          <a href="/contacts">Контакты</a>
        </nav>
        <div className={style.conditions}>
          <a href="/conditions">Условия сервиса</a>
          <div className={style.options}>
            <span>Рус</span>
            <span>Eng</span>
          </div>
        </div>
        <nav className={style.social}>
          <a href="/vk">
            <img src={vk} alt="vk" />
          </a>
          <a href="/tg">
            <img src={tg} alt="tg" />
          </a>
          <a href="/wapp">
            <img src={wh} alt="wapp" />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
