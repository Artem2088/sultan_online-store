import React, { FC, useEffect, useState } from "react";
import "./Products.css";
import Card from "../Card/Card";
import ICard from "../../types/types";
import Pagination from "../../Pagination/Pagination";

interface ICardProps {
  store: ICard[];
  setOrder: any;
  openCard: any;
  dataPerPage: number;
  totalData: number;
  paginate: number;
  nextPage: any;
  previosPage: any;
  currentPage: number;
}

const Products: FC<ICardProps> = ({
  store,
  setOrder,
  openCard,
  dataPerPage,
  totalData,
  paginate,
  nextPage,
  previosPage,
  currentPage,
}) => {
  return (
    <section className='products'>
      <div className='products__wrap'>
        <>
          {store.map((item) => (
            <Card
              key={item.id}
              store={item}
              setOrder={setOrder}
              openCard={openCard}
            />
          ))}
        </>
      </div>
      {store.length < 17 ? (
        " "
      ) : (
        <Pagination
          dataPerPage={dataPerPage}
          totalData={totalData}
          paginate={paginate}
          nextPage={nextPage}
          previosPage={previosPage}
          currentPage={currentPage}
        />
      )}

      <p className='products__description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum
        ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate
        feugiat massa vestibulum duis. Faucibus consectetur aliquet sed
        pellentesque consequat consectetur congue mauris venenatis. Nunc elit,
        dignissim sed nulla ullamcorper enim, malesuada.
      </p>
    </section>
  );
};

export default Products;
