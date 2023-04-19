import React, { FC, useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ICard from "../types/types";
import Loader from "../Loader/Loader";
import StoreContext from "../../context/StoreContext";
import InfoToolPopup from "../InfoToolPopup/InfoToolPopup";

const App: FC = () => {
  const [data, setData] = useState<ICard[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);
  const [allPrice, setAllPrice] = useState<number>(0);
  const [isArange, setArange] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataPerPage] = useState<number>(17);
  const [valueCheckBox, setValueCheckBox] = useState<ICard[]>([]);
  const [isFlag, setIsFlag] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [inputData, setInputData] = useState<string>("");
  const [inputNumMin, setInputNamMin] = useState<string>("");
  const [inputNumMax, setInputNamMax] = useState<string>("");
  const [inputPrice, setInputPrice] = useState<ICard[]>([]);
  const [filterInputArr, setfilterInputArr] = useState<ICard[]>([]);
  const [qtyBasketObj, setQtyBasketObj] = useState<number>(0);
  const [newCardForm, setNewCardForm] = useState<ICard[]>([]);
  const [nameSort, setNameSort] = useState<string>("Название");
  const [valueNameSort, setValueNAmeSort] = useState<ICard[]>([]);

  let filterArr: ICard[] = [];
  let filterArrPrice: ICard[] = [];

  const lastIndexPage = currentPage * dataPerPage;
  const firstIindexPage = lastIndexPage - dataPerPage;
  const currentData = isFlag
    ? valueCheckBox || inputData
    : data.slice(firstIindexPage, lastIndexPage);
  const [renderActual, setRenderActual] = useState<ICard[]>(currentData);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    render();
  }, [isFlag, checked, filterArrPrice, inputNumMin, inputNumMax]);

  const addFilterSort = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    let target = e.currentTarget;
    let dataName: any = target.dataset.name;
    setNameSort(dataName);
    switch (dataName) {
      case "Название":
        let sortOfName = currentData.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setValueNAmeSort(sortOfName);
        setIsFlag("5");
        break;
      case "Цена":
        let sortOfPrice = currentData.sort((a, b) => a.price - b.price);
        setValueNAmeSort(sortOfPrice);
        setIsFlag("5");
        break;
      case "Возрастание":
        let sortOfPriceUp = currentData.sort(
          (a, b) =>
            (a.barcode < b.barcode && -1) || (a.barcode > b.barcode && 1) || 0
        );
        setValueNAmeSort(sortOfPriceUp);
        setIsFlag("5");
        break;
      case "Убывание":
        let sortOfPriceDown = currentData.sort(
          (a, b) =>
            (a.barcode < b.barcode && 1) || (a.barcode > b.barcode && -1) || 0
        );
        setValueNAmeSort(sortOfPriceDown);
        setIsFlag("5");
        break;
      default: {
        <span>"Нет таких значений"</span>;
      }
    }
  };

  const addNewCard = (newCard: ICard) => {
    setIsFlag("4");
    setNewCardForm([...newCardForm, newCard]);
  };

  const render = () => {
    if (isFlag == "1") {
      setRenderActual(valueCheckBox);
    }
    if (isFlag == "2") {
      setRenderActual(filterInputArr);
    }
    if (isFlag == "3") {
      setRenderActual(inputPrice);
    }
    if (isFlag == "4") {
      setRenderActual(newCardForm);
    }
    if (isFlag == "5") {
      setRenderActual(valueNameSort);
    }
  };

  const filterPrice = () => {
    let a = +inputNumMin;
    let b = +inputNumMax;
    setIsFlag("3");
    filterArrPrice = data.filter((item) => a <= item.price && item.price <= b);
    setInputPrice(filterArrPrice);
  };

  const filterInput = () => {
    filterArr = data.filter((obj) => {
      if (
        obj.name.toLocaleLowerCase().includes(inputData.toLocaleLowerCase())
      ) {
        setIsFlag("2");
        return true;
      }
      return false;
    });
    setfilterInputArr(filterArr);
    setInputData("");
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleCheckBox = (valueBox: ICard) => {
    setIsFlag("1");
    if (!checked) {
      setValueCheckBox([...valueCheckBox, valueBox]);
    } else {
      setValueCheckBox([]);
    }
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const previosPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getValueCount = (obj: number) => {
    setCount(obj);
  };

  const getPrices = (items: number) => {
    setAllPrice(items);
  };

  const addArrange = (value: boolean) => {
    setArange(value);
  };

  const getData = async () => {
    try {
      const response = await fetch(
        "https://6425e2dad24d7e0de465bd66.mockapi.io/shop_cards"
      );
      if (response.ok) {
        let data = await response.json();
        data.forEach((obj: ICard) => (obj.id = Math.random()));
        setData(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StoreContext.Provider value={isFlag ? renderActual : currentData}>
      <div className='page'>
        <div className='page__container'>
          <Header
            count={count}
            allPrice={allPrice}
            qtyBasketObj={qtyBasketObj}
          />
          {isLoading ? (
            <Loader />
          ) : (
            <Main
              setCount={getValueCount}
              setAllPrice={getPrices}
              setArange={addArrange}
              isArange={isArange}
              dataPerPage={dataPerPage}
              totalData={data.length}
              paginate={paginate}
              nextPage={nextPage}
              previosPage={previosPage}
              currentPage={currentPage}
              data={data}
              onChange={handleChange}
              checked={handleCheckBox}
              inputData={inputData}
              setInputData={setInputData}
              filterInput={filterInput}
              setInputNamMin={setInputNamMin}
              inputNumMin={inputNumMin}
              setInputNamMax={setInputNamMax}
              inputNumMax={inputNumMax}
              filterPrice={filterPrice}
              setQtyBasketObj={setQtyBasketObj}
              addNewCard={addNewCard}
              getData={getData}
              addFilterSort={addFilterSort}
              nameSort={nameSort}
            />
          )}
          <Footer />
          <InfoToolPopup isArange={isArange} />
        </div>
      </div>
    </StoreContext.Provider>
  );
};

export default App;
