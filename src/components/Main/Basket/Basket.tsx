import React, { FC, useEffect, useState } from "react";
import ICard from "../../types/types";
import "./Basket.css";
import BasketItem from "./BasketItem/BasketItem";
import Bradcrumbs from "../../Bradcrumbs/Bradcrumbs";

interface IBascetProps {
  order: ICard[];
  setCount: number;
  setAllPrice: any;
  setArange: any;
  isArange: boolean;
}

const Basket: FC<IBascetProps> = ({
  order,
  setCount,
  setAllPrice,
  setArange,
  isArange,
}) => {
  const [deleteCount, setDeleteCount] = useState<object[]>([]);
  const [summary, setSummary] = useState<number>(0);

  useEffect(() => {
    if (isArange) {
      setSummary(0);
    }
  }, [isArange]);

  useEffect(() => {
    getSummary();
    setAllPrice(summary);
  }, [deleteCount, summary]);

  const deleteCard = (obj: any) => {
    let result: any = order.find((item) => item.id === obj.id);
    let index = order.indexOf(result);
    let delCard = order.splice(index, 1);
    setDeleteCount([...order, delCard]);
    localStorage.clear();
  };

  const getSummary = () => {
    let price = order.map((item) => item.price);
    let res = price.reduce((a, b) => a + b, 0);
    setSummary(res);
  };

  return (
    <section className='basket'>
      <div className='basket__wrapper'>
        <Bradcrumbs />
        <h2 className='basket__title'>Корзина</h2>
        <div className='basket__order'>
          <>
            {order.map((item) => (
              <BasketItem
                key={item.id}
                item={item}
                deleteCard={deleteCard}
                setCount={setCount}
              />
            ))}
          </>
        </div>
        <div className='basket__order-box'>
          <button
            className='button basket__button-order'
            onClick={() => setArange(true)}
          >
            <span className='basket__button-span'>Оформить заказ</span>
          </button>
          <span className='basket__finaly-price'>{summary} ₸</span>
        </div>
      </div>
    </section>
  );
};

export default Basket;
