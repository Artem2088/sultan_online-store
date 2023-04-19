import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFaund.css";

const PageNotFaund = () => {
  return (
    <section className='pageNotFaund'>
      <div className='pageNotFaund__container'>
        <span className='pageNotFaund__span'>404</span>
        <p className='pageNotFaund__title'>Страница не найдена</p>
      </div>
      <Link to={"/"} className='pageNotFaund__back'>
        Назад
      </Link>
    </section>
  );
};

export default PageNotFaund;
