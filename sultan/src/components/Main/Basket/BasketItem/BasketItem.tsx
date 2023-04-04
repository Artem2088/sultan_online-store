import React, { FC, useEffect, useState } from "react";
import "./BasketItem.css";
import iconBottle from "../../../../images/icons/bottle.svg";
import deleteIcon from "../../../../images/icons/delete.svg";
import ICard from "../../../types/types";
import Counter from "../../../Counter/Counter";

interface IBascetItemProps {
  item: ICard;
  deleteCard: any;
  setCount: number;
}

const BasketItem: FC<IBascetItemProps> = ({ item, deleteCard, setCount }) => {
  return (
    <div className='basket-item__order-item'>
      <img src={item.url} alt='картинка' className='basket-item__main-img' />
      <div className='basket-item__about-block'>
        <div className='card__box basket-item__box'>
          <div className='basket-item__icon-box'>
            <img
              src={iconBottle}
              alt='иконка емкости'
              className='card__box-size basket-item__icon-size'
            />
            <span className='card__box-weigth basket-item__span-weigth'>
              {item.weigth}
            </span>
          </div>
          <h3 className='card__name basket-item__name'>{item.name}</h3>
          <p className='basket-item__description'>{item.description}</p>
        </div>
        <Counter setCount={setCount} />
        <h3 className='basket-item__price'>{item.price}₸</h3>
        <button
          className='button basket-item__button-del'
          type='button'
          onClick={() => deleteCard(item)}
        >
          <img
            src={deleteIcon}
            alt='иконка удаления'
            className='basket-item__delete-img'
          />
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
