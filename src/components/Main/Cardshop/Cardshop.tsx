import React, { FC } from "react";
import "./Cardshop.css";
import bottle from "../../../images/icons/bottle.svg";
import cardBasket from "../../../images/icons/basket-white.svg";
import share from "../../../images/icons/share.svg";
import download from "../../../images/icons/bxs-download-black.svg";
import blackArrow from "../../../images/icons/black-arrow.svg";
import Counter from "../../Counter/Counter";
import Bradcrumbs from "../../Bradcrumbs/Bradcrumbs";

interface IPropsCardShop {
  url: any;
  setOrder: any;
  setCount: number;
}

const Cardshop: FC<IPropsCardShop> = ({ url, setOrder, setCount }) => {
  return (
    <section className='card-shop'>
      <div className='card-shop__wrapper'>
        <Bradcrumbs url={url} />
        <div className='card-shop__wrapper-product'>
          <img
            src={url.url}
            alt='картинка товара'
            className='card-shop__image'
          />
          <div className='card-shop__block'>
            <span className='card-shop__span-actual'>В наличии</span>
            <h2 className='card-shop__title'>{url.name}</h2>
            <div className='card-shop__box-bottle'>
              <img src={bottle} alt='' className='card-shop__weigth-img' />
              <span className='card-shop__span-weigth'>{url.size}</span>
            </div>
            <div className='card-shop__box-basket'>
              <span className='card-shop__price'>{url.price} ₸</span>
              <Counter setCount={setCount} />
              <button
                className='card-shop__button-basket button'
                type='button'
                onClick={() => setOrder(url)}
              >
                <span className='card-shop__button-basket_span card__button-span'>
                  В КОРЗИНУ
                </span>
                <img
                  src={cardBasket}
                  alt='рамка'
                  className='card__button-img'
                />
              </button>
            </div>
            <div className='card-shop__buttons'>
              <button className='card-shop__btn card-shop__btn-share'>
                <img
                  src={share}
                  alt='поделиться'
                  className='card-shop__span-share'
                />
              </button>
              <div className='card-shop__btn card-shop__btn-span'>
                <span className='card-shop__span-big'>
                  При покупке от <b>10 000 ₸</b> бесплатная доставка по
                  Кокчетаву и области
                </span>
              </div>
              <button className='card-shop__btn card-shop__btn-prais'>
                <span className='card-shop__span-prais'>
                  Прайс-лист{" "}
                  <img
                    src={download}
                    alt='загрузка'
                    className='card-show__download-img'
                  />
                </span>
              </button>
            </div>
            <ul className='card-shop__ul-box'>
              <li>
                <span className='card-shop__li-span'>
                  Производитель: {url.manufacturer}
                </span>
              </li>
              <li>
                <span className='card-shop__li-span'>Бренд: {url.brend}</span>
              </li>
              <li>
                <span className='card-shop__li-span'>
                  Артикул: {url.barcode}
                </span>
              </li>
              <li>
                <span className='card-shop__li-span'>
                  Штрихкод: {url.barcode}
                </span>
              </li>
            </ul>
            <div className='card-shop__description-box'>
              <h3 className='card-shop__description-title'>
                Описание{" "}
                <img
                  src={blackArrow}
                  alt='стрелка'
                  className='card-shop__description-img'
                />
              </h3>
              <p className='card-shop__description'>{url.description}</p>
            </div>
            <ul className='card-shop__specifications'>
              <h3 className='card-shop__description-title card-shop__specification-title'>
                Характеристики
                <img
                  src={blackArrow}
                  alt='стрелка'
                  className='card-shop__description-img'
                />
              </h3>
              <li>
                <span className='card-shop__specification-li'>
                  Назначение: {url.name}
                </span>
              </li>
              <li>
                <span className='card-shop__specification-li'>
                  Тип: {url.name}
                </span>
              </li>
              <li>
                <span className='card-shop__specification-li'>
                  Производитель: {url.manufacturer}
                </span>
              </li>
              <li>
                <span className='card-shop__specification-li'>
                  Бренд: {url.brend}
                </span>
              </li>
              <li>
                <span className='card-shop__specification-li'>
                  Артикул: {url.barcode}
                </span>
              </li>
              <li>
                <span className='card-shop__specification-li'>
                  Штрихкод: {url.barcode}
                </span>
              </li>
              <li>
                <span className='card-shop__specification-li'>
                  Вес: {url.weigth}
                </span>
              </li>
              <li>
                <span className='card-shop__specification-li'>
                  Объем: {url.size}
                </span>
              </li>
              <li>
                <span className='card-shop__specification-li'>
                  Кол-во в коробке: {Math.random()}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardshop;
