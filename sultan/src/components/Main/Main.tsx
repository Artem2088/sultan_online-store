import React, { FC, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./Main.css";
import Banner from "./Banner/Banner";
import Catalog from "./Catalog/Catalog";
import Cardshop from "./Cardshop/Cardshop";
import ICard from "../types/types";
import PageNotFaund from "../PageNotFound/PageNotFaund";
import Basket from "./Basket/Basket";
import StoreContext from "../../context/StoreContext";
import FormAddCards from "../FormAddCards/FormAddCards";

interface IPropsMain {
  setCount: any;
  setAllPrice: any;
  setArange: any;
  isArange: boolean;
  dataPerPage: number;
  totalData: number;
  paginate: any;
  nextPage: any;
  previosPage: any;
  currentPage: number;
  data: ICard[];
  onChange: any;
  checked: any;
  inputData: string;
  filterInput: any;
  setInputData: any;
  setInputNamMin: any;
  inputNumMin: string;
  inputNumMax: string;
  setInputNamMax: any;
  filterPrice: any;
  setQtyBasketObj: any;
  addNewCard: any;
  getData: any;
  addFilterSort: any;
  nameSort: string;
}

const Main: FC<IPropsMain> = ({
  setCount,
  setAllPrice,
  setArange,
  isArange,
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
  setQtyBasketObj,
  addNewCard,
  getData,
  addFilterSort,
  nameSort,
}) => {
  const location = useLocation();
  const [basketObj, setBasketObj] = useState<ICard[]>([]);
  const [url, setUrl] = useState<ICard>();
  let newCard: any = localStorage.getItem("card");
  let newCardJ = JSON.parse(newCard);

  useEffect(() => {
    if (isArange) {
      setBasketObj([]);
    }
  }, [isArange]);

  useEffect(() => {
    setUrl(newCardJ);
    if (location.pathname != "/catalog/${url?.id}") {
      localStorage.clear();
    }
  }, []);

  const handleClick = (order: any) => {
    setBasketObj([...basketObj, order]);
    setQtyBasketObj(basketObj.length + 1);
    return basketObj;
  };

  const openCard = (card: ICard): void => {
    let jsonCard = JSON.stringify(card);
    localStorage.setItem("card", jsonCard);
    setUrl(card);
  };

  return (
    <StoreContext.Consumer>
      {(store) => (
        <main className='main'>
          <Routes>
            <Route path='/' element={<Banner />} />
            <Route
              path={`/catalog/${url?.id}`}
              element={
                <Cardshop
                  url={url}
                  setOrder={handleClick}
                  setCount={setCount}
                />
              }
            />
            <Route
              path='catalog'
              element={
                <Catalog
                  setOrder={handleClick}
                  openCard={openCard}
                  store={store}
                  dataPerPage={dataPerPage}
                  totalData={totalData}
                  paginate={paginate}
                  nextPage={nextPage}
                  previosPage={previosPage}
                  currentPage={currentPage}
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
                  addFilterSort={addFilterSort}
                  nameSort={nameSort}
                />
              }
            />
            <Route
              path='/order'
              element={
                <Basket
                  order={basketObj}
                  setCount={setCount}
                  setAllPrice={setAllPrice}
                  setArange={setArange}
                  isArange={isArange}
                />
              }
            />
            <Route
              path='/form'
              element={
                <FormAddCards addNewCard={addNewCard} getData={getData} />
              }
            />
            <Route path='*' element={<PageNotFaund />} />
          </Routes>
        </main>
      )}
    </StoreContext.Consumer>
  );
};
export default Main;
