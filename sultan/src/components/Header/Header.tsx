import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import point from "../../images/icons/location.svg";
import mail from "../../images/icons/mail.svg";
import headerLogo from "../../images/icons/header-logo.svg";
import headerBtnImage from "../../images/icons/box-4.svg";
import searchHeader from "../../images/icons/search.svg";
import headerPrice from "../../images/icons/bxs-download.svg";
import headerBasket from "../../images/icons/basket.svg";
import headereCallImg from "../../images/icons/operator.svg";
import imgCatMob from "../../images/icons/Frrame-mobile.svg";
import searchMobile from "../../images/icons/search-mobile.svg";
import menu from "../../images/icons/menu-alt.svg";

interface IPropHeader {
  count: number;
  allPrice: number;
  qtyBasketObj: number;
}

const Header: FC<IPropHeader> = ({ count, allPrice, qtyBasketObj }) => {
  const location = useLocation();
  const locationHeader = location.pathname;

  return (
    <header className='header'>
      <div className='header__wrap'>
        <div className='header__top'>
          <button className='header__top-mobile button'>
            <img src={menu} alt='меню' />
          </button>
          <div className='header__top-wrapper'>
            <img src={point} alt='локация' className='header__top-location' />
            <div className='header__top-container_location'>
              <a href='#' className='header__top-link-location'>
                г. Кокчетав, ул. Ж. Ташенова 129Б
              </a>
              <span className='header__top-link-span'>(Рынок Восточный)</span>
            </div>
            <img src={mail} alt='почта' className='header__top-mail-img' />
            <div className='header__top-container_mail'>
              <a href='#' className='header__top-mail-link'>
                opt.sultan@mail.ru
              </a>
              <span className='header__top-mail-span'>
                На связи в любое время
              </span>
            </div>
          </div>
          <ul className='header__top-ul'>
            <a href='#'>
              <li className='header__top__li'>О компании</li>
            </a>
            <a href='#'>
              <li className='header__top__li'>Доставка и оплата</li>
            </a>
            <a href='#'>
              <li className='header__top__li'>Возврат</li>
            </a>
            <a href='#'>
              <li className='header__top__li'>Контакты</li>
            </a>
          </ul>
        </div>
      </div>
      <div className='header__footer-wrap'>
        <div className='header__mobile'>
          <div className='header__mobile-cat'>
            <img src={imgCatMob} alt='рамка' />
            <span className='header__mobile-span'>Каталог</span>
          </div>
          <div className='header__mobile-search'>
            <img src={searchMobile} alt='поиск' />
            <span className='header__mobile-span'>Поиск</span>
          </div>
        </div>
        <Link to={"/"}>
          <img
            src={headerLogo}
            alt='логотип хедера'
            className='logo header__logo'
          />
        </Link>
        <div className='header__footer-container'>
          <Link to={"/catalog"}>
            <button className='header__button button' type='button'>
              <span className='header__button-span'>Каталог</span>
              <img
                src={headerBtnImage}
                alt='рамка'
                className='header__button-img'
              />
            </button>
          </Link>
          <input
            type='text'
            className='header__footer-input input'
            placeholder='Поиск...'
          />
          <button className='button header__footer-catalog'>
            <img
              src={searchHeader}
              alt='поиск'
              className='header__footer-search'
            />
          </button>
        </div>
        <div className='header__footer-contacts'>
          <a href='tel=:+7 (777) 490-00-91' className='header__footer-tel'>
            +7 (777) 490-00-91
          </a>
          <span className='header__footer-time'>время работы: 9:00-20:00</span>
          <a href='#' className='header__footer-callback'>
            Заказать звонок
          </a>
        </div>
        <img
          src={headereCallImg}
          alt='оператор'
          className='header__footer-operator'
        />
        <button className='header__button-price button' type='button'>
          <span className='header__button-span'>Прайс-лист</span>
          <img
            src={headerPrice}
            alt='загрузка'
            className='header__button-price_img'
          />
        </button>
        <Link to='/form'>
          <button className='button header__button-admin'>
            <span className='header__button-span'>Admin</span>
          </button>
        </Link>

        <Link to={"/order"}>
          <img
            src={headerBasket}
            alt='корзина'
            className='header__footer-basket_image'
          />
        </Link>
        <div className='header__footer-basket'>
          <span className='header__footer-basket_span'>
            {locationHeader == "/order" ? count + qtyBasketObj : qtyBasketObj}
          </span>
          <span className='header__footer-basket_title'>Корзина</span>
          <span className='header__footer-basket_price'>{allPrice} ₸</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
