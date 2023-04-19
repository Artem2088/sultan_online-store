import React, { FC, useState } from "react";
import "./Aside.css";
import searchHeader from "../../../images/icons/search.svg";
import arrowBlack from "../../../images/icons/black-arrow.svg";
import ICard from "../../types/types";

interface IPropsAside {
  data: ICard[];
  onChange: any;
  checked: any;
  inputData: string;
  filterInput: any;
  setInputData: any;
  setInputNamMin: any;
  inputNumMin: string;
  setInputNamMax: any;
  inputNumMax: string;
  filterPrice: any;
  filterItemsBody: () => void;
  filterItemsHand: () => void;
}

const Aside: FC<IPropsAside> = ({
  data,
  onChange,
  checked,
  inputData,
  filterInput,
  setInputData,
  setInputNamMin,
  inputNumMin,
  setInputNamMax,
  inputNumMax,
  filterPrice,
  filterItemsBody,
  filterItemsHand,
}) => {
  const [countSlice, setCountSlice] = useState<number>(4);

  const openedCheckbox = () => {
    setCountSlice(-1);
  };

  return (
    <aside className='aside'>
      <h3 className='aside__title'>ПОДБОР ПО ПАРАМЕТРАМ</h3>
      <span className='aside__span'>Цена ₸</span>
      <div className='aside__filter-inputs'>
        <input
          type='number'
          className='aside__input'
          placeholder='0'
          onChange={(e) => setInputNamMin(e.target.value)}
          value={inputNumMin}
          onBlur={(e) => filterPrice(e)}
        />
        <span className='aside__input-span'> - </span>
        <input
          type='number'
          className='aside__input'
          placeholder='10 000'
          onChange={(e) => setInputNamMax(e.target.value)}
          value={inputNumMax}
          onBlur={(e) => filterPrice(e)}
        />
      </div>
      <h3 className='aside__title'>Производитель</h3>
      <input
        type='text'
        className='header__footer-input input aside__input-prod'
        placeholder='Поиск...'
        onChange={(e) => setInputData(e.target.value)}
        value={inputData}
      />
      <button
        className='button header__footer-catalog aside__button-prod'
        onClick={() => filterInput()}
      >
        <img src={searchHeader} alt='поиск' className='header__footer-search' />
      </button>
      <ul className='aside__checkbox-wrap'>
        {data.slice(0, countSlice).map((name) => (
          <li className='aside__box' key={name.id}>
            <input
              type='checkbox'
              className='aside__checkbox'
              onChange={onChange}
              onClick={() => checked(name)}
            />
            <span className='aside__checbox-name'>{name.name}</span>
            <span className='aside__checkbox-qty'>{name.weigth}</span>
          </li>
        ))}
        <button className='aside__filter-all' onClick={openedCheckbox}>
          Показать все
          <img
            src={arrowBlack}
            alt='стрелка'
            className='catalog__sort-button_arrow'
          />
        </button>
      </ul>
      <div className='aside__care'>
        <h3 className='aside__care-title'>Уход за телом</h3>
        <ul className='aside__care-ul'>
          <a href='#'>
            <li className='aside__care-li' onClick={() => filterItemsBody()}>
              Уход за телом
            </li>
          </a>
          <a href='#'>
            <li className='aside__care-li' onClick={() => filterItemsHand()}>
              Уход за руками
            </li>
          </a>
          <a href='#'>
            <li className='aside__care-li'>Уход за ногами</li>
          </a>
          <a href='#'>
            <li className='aside__care-li'>Уход за лицом</li>
          </a>
          <a href='#'>
            <li className='aside__care-li'>Уход за волосами</li>
          </a>
          <a href='#'>
            <li className='aside__care-li'>Средства для загара</li>
          </a>
          <a href='#'>
            <li className='aside__care-li'>Средства для бритья</li>
          </a>
          <a href='#'>
            <li className='aside__care-li'>Подарочные наборы</li>
          </a>
          <a href='#'>
            <li className='aside__care-li'>Гигиеническая продукция</li>
          </a>
          <a href='#'>
            <li className='aside__care-li'>Гигиена полости рта</li>
          </a>
          <a href='#'>
            <li className='aside__care-li'>Бумажная продукция</li>
          </a>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
