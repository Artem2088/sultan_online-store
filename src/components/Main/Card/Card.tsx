import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import iconBottle from "../../../images/icons/bottle.svg";
import cardBasket from "../../../images/icons/basket-white.svg";
import ICard from "../../types/types";

interface CardProps {
  store: ICard;
  setOrder: any;
  openCard: any;
}

const Card: FC<CardProps> = ({ store, setOrder, openCard }) => {
  return (
    <div className='card'>
      <div className='card__wrapper'>
        <img src={store.url} alt={store.name} className='card__image' />
        <div className='card__box'>
          <img
            src={iconBottle}
            alt='иконка емкости'
            className='card__box-size'
          />
          <span className='card__box-weigth'>{store.weigth}</span>
        </div>
        <Link to={`/catalog/${store?.id}`}>
          <button type='button' onClick={() => openCard(store)}>
            <h3 className='card__name'>{store.name}</h3>
          </button>
        </Link>
        <div className='card__container-info'>
          <span className='card__container-span'>
            Штрихкод:
            {store.barcode}
          </span>
          <span className='card__container-span'>
            Производитель:{store.manufacturer}
          </span>
          <span className='card__container-span'>Бренд:{store.brend}</span>
        </div>
        <div className='card__price'>
          <span className='card__price-qty'>
            {store.price}
            <b>₸</b>
          </span>
          <button
            className={"card__button button"}
            type='button'
            onClick={() => setOrder(store)}
          >
            <span className='header__button-span card__button-span'>
              В КОРЗИНУ
            </span>
            <img src={cardBasket} alt='рамка' className='card__button-img' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
