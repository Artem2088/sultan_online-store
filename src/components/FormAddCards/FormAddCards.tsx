import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import "./FormAddCards.css";
import ICard from "../types/types";

interface IPropsCards {
  addNewCard: (newCard: ICard) => void;
  getData: () => void;
}

const initState = {
  url: "",
  name: "",
  weigth: "",
  size: "",
  barcode: "",
  manufacturer: "",
  brend: "",
  description: "",
  price: "",
  id: "",
  careBody: false,
  careHand: false,
};

const FormAddCards: FC<IPropsCards> = ({ addNewCard, getData }) => {
  const [newCards, setNewCards] = useState<{
    url: string;
    name: string;
    weigth: string;
    size: string;
    barcode: string;
    manufacturer: string;
    brend: string;
    description: string;
    price: string;
    id: string;
    careBody: boolean;
    careHand: boolean;
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewCards({
      ...newCards,
      [name]: value,
    });
  };
  console.log(newCards);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      url,
      name,
      weigth,
      size,
      barcode,
      manufacturer,
      brend,
      description,
      price,
      id,
      careBody,
      careHand,
    } = newCards;

    addNewCard({
      url,
      name,
      weigth: Number(weigth),
      size: Number(size),
      barcode: Number(barcode),
      manufacturer,
      brend,
      description,
      price: Number(price),
      id: Date.now(),
      careBody,
      careHand,
    });
    setNewCards(initState);
  };

  return (
    <section className='form'>
      <div className='form__wrapper'>
        <form name='form' id='formElem' onSubmit={handleSubmit}>
          <input
            type='text'
            name='url'
            className='input form__input'
            placeholder='url'
            value={newCards.url}
            onChange={handleChange}
          />
          <input
            type='text'
            name='name'
            className='input form__input'
            placeholder='name'
            value={newCards.name}
            onChange={handleChange}
          />
          <input
            type='number'
            name='weigth'
            className='input form__input'
            placeholder='weigth'
            value={newCards.weigth}
            onChange={handleChange}
          />
          <input
            type='number'
            name='size'
            className='input form__input'
            placeholder='size'
            value={newCards.size}
            onChange={handleChange}
          />
          <input
            type='number'
            name='barcode'
            className='input form__input'
            placeholder='barcode'
            value={newCards.barcode}
            onChange={handleChange}
          />
          <input
            type='text'
            name='manufacturer'
            className='input form__input'
            placeholder='manufacturer'
            value={newCards.manufacturer}
            onChange={handleChange}
          />
          <input
            type='text'
            name='brend'
            className='input form__input'
            placeholder='brend'
            value={newCards.brend}
            onChange={handleChange}
          />
          <input
            type='text'
            name='description'
            className='input form__input'
            placeholder='description'
            value={newCards.description}
            onChange={handleChange}
          />
          <input
            type='number'
            name='price'
            className='input form__input'
            placeholder='price'
            value={newCards.price}
            onChange={handleChange}
          />
          <div className='form__box'>
            <label className='form__label'>
              Уход за телом
              <input
                type='checkbox'
                name='careBody'
                className='input form__input'
                onChange={handleChange}
              />
            </label>
            <label className='form__label'>
              Уход за руками
              <input
                type='checkbox'
                name='careHand'
                className='input form__input'
                onChange={handleChange}
              />
            </label>
          </div>

          <button className='button form__button' type='submit'>
            <span className='form__button-span'>Загрузить</span>
          </button>
          <Link to='/catalog'>
            <button
              className='button form__button-auto'
              onClick={() => getData()}
            >
              <span className='form__button-span'>Загрузить автоматически</span>
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default FormAddCards;
