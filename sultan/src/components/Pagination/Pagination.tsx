import React, { FC, useState, useEffect } from "react";
import arrow from "../../images/icons/arrow-ylw.svg";
import "./Pagination.css";

interface IPropsPagination {
  dataPerPage: number;
  totalData: number;
  paginate: any;
  nextPage: any;
  previosPage: any;
  currentPage: number;
}

const Pagination: FC<IPropsPagination> = ({
  dataPerPage,
  totalData,
  paginate,
  nextPage,
  previosPage,
  currentPage,
}) => {
  const pageNumbers = [];
  const average = Math.ceil(totalData / dataPerPage);

  for (let i = 1; i <= average; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className='pagination'>
        <button className='pagination__button-arrow' onClick={previosPage}>
          <img src={arrow} alt='стрелка' className='production__arrow' />
        </button>

        {pageNumbers.map((number) => (
          <button
            className={currentPage == number ? "pagination__number" : "active"}
            key={number}
            onClick={() => paginate(number)}
          >
            <span className='pagination__number-title'>{number}</span>
          </button>
        ))}
        <button className='pagination__button-arrow_rigth' onClick={nextPage}>
          <img src={arrow} alt='стрелка' className='pagination__arrow-rigth' />
        </button>
      </ul>
    </>
  );
};

export default Pagination;
