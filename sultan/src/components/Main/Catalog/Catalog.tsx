import React, { FC, useEffect, useState } from "react";
import "./Catalog.css";
import Aside from "../Aside/Aside";
import Products from "../Products/Products";
import arrowBlack from "../../../images/icons/black-arrow.svg";
import ICard from "../../types/types";
import Bradcrumbs from "../../Bradcrumbs/Bradcrumbs";

interface ICatalogProps {
  store: ICard[];
  setOrder: any;
  openCard: any;
  dataPerPage: number;
  totalData: number;
  paginate: number;
  nextPage: any;
  previosPage: any;
  currentPage: number;
  data: ICard[];
  onChange: string;
  checked: any;
  inputData: string;
  filterInput: any;
  setInputData: string;
  setInputNamMin: any;
  inputNumMin: string;
  setInputNamMax: any;
  inputNumMax: string;
  filterPrice: any;
  addFilterSort: any;
  nameSort: string;
}

const Catalog: FC<ICatalogProps> = ({
  store,
  setOrder,
  openCard,
  dataPerPage,
  totalData,
  paginate,
  nextPage,
  previosPage,
  currentPage,
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
  addFilterSort,
  nameSort,
}) => {
  const [filterItem, setFilterItem] = useState<ICard[]>([]);
  const [flagCat, setFlagCat] = useState(false);

  let allBtn = document.querySelectorAll(".catalog__filter-btn_span");
  let btn = Array.from(allBtn);
  let filterCards: ICard[] = [];

  const openSort = () => {
    document
      .querySelector(".catalog__sort-ul")
      ?.classList.toggle("catalog__sort-ul_open");
  };

  const filterItemsBody = (): ICard[] => {
    for (let key of btn) {
      if (key.innerHTML === "Уход за телом") {
        filterCards = store.filter((item) => item.careBody === true);
        setFilterItem(filterCards);
      }
    }
    setFlagCat(true);
    return filterCards;
  };

  const filterItemsHand = (): ICard[] => {
    for (let key of btn) {
      if (key.innerHTML === "Уход за руками") {
        filterCards = store.filter((item) => item.careHand === true);
        setFilterItem(filterCards);
      }
    }
    setFlagCat(true);
    return filterCards;
  };

  return (
    <section className='catalog'>
      <Bradcrumbs />
      <div className='catalog__header-block'>
        <h1 className='catalog__title'>Косметика и гигиена</h1>
        <div className='catalog__sort-block' onClick={openSort}>
          <span className='catalog__sort-title'>Сортировка:</span>
          <button className={"catalog__sort-button_activ"}>
            {nameSort}
            <img
              src={arrowBlack}
              alt='стрелка'
              className='catalog__sort-button_arrow'
            />
          </button>
          <ul className='catalog__sort-ul'>
            <li>
              <button
                className='catalog__sort-button'
                data-name='Название'
                onClick={(e) => addFilterSort(e)}
              >
                Название
              </button>
            </li>
            <li>
              <button
                className='catalog__sort-button'
                onClick={(e) => addFilterSort(e)}
                data-name='Цена'
              >
                Цена
              </button>
            </li>
            <li>
              <button
                className='catalog__sort-button'
                onClick={(e) => addFilterSort(e)}
                data-name='Возрастание'
              >
                Возрастание
              </button>
            </li>
            <li>
              <button
                className='catalog__sort-button'
                onClick={(e) => addFilterSort(e)}
                data-name='Убывание'
              >
                Убывание
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className='catalog__filter-upper'>
        <button
          className='catalog__filter-btn catalog__filter-btn_activ'
          onClick={filterItemsBody}
        >
          <span className='catalog__filter-btn_span'>Уход за телом</span>
        </button>
        <button
          className='catalog__filter-btn catalog__filter-btn_activ'
          onClick={filterItemsHand}
        >
          <span className='catalog__filter-btn_span'>Уход за руками</span>
        </button>
        <button className='catalog__filter-btn'>
          <span className='catalog__filter-btn_span'>Уход за ногами</span>
        </button>
        <button className='catalog__filter-btn'>
          <span className='catalog__filter-btn_span'>Уход за лицом</span>
        </button>
        <button className='catalog__filter-btn'>
          <span className='catalog__filter-btn_span'>Уход за волосами</span>
        </button>
        <button className='catalog__filter-btn'>
          <span className='catalog__filter-btn_span'>Средства для загара</span>
        </button>
        <button className='catalog__filter-btn'>
          <span className='catalog__filter-btn_span'>Средства для бритья</span>
        </button>
        <button className='catalog__filter-btn'>
          <span className='catalog__filter-btn_span'>Подарочные наборы</span>
        </button>
        <button className='catalog__filter-btn'>
          <span className='catalog__filter-btn_span'>
            Гигиеническая продукция
          </span>
        </button>
        <button className='catalog__filter-btn'>
          <span className='catalog__filter-btn_span'>Гигиена полости рта</span>
        </button>
        <button className='catalog__filter-btn'>
          <span className='catalog__filter-btn_span'>Бумажная продукция</span>
        </button>
      </div>
      <div className='catalog__main'>
        <Aside
          data={data}
          onChange={onChange}
          checked={checked}
          inputData={inputData}
          filterInput={filterInput}
          setInputData={setInputData}
          setInputNamMin={setInputNamMin}
          inputNumMin={inputNumMin}
          setInputNamMax={setInputNamMax}
          inputNumMax={inputNumMax}
          filterPrice={filterPrice}
          filterItemsBody={filterItemsBody}
          filterItemsHand={filterItemsHand}
        />
        <Products
          store={flagCat ? filterItem : store}
          setOrder={setOrder}
          openCard={openCard}
          dataPerPage={dataPerPage}
          totalData={totalData}
          paginate={paginate}
          nextPage={nextPage}
          previosPage={previosPage}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default Catalog;
