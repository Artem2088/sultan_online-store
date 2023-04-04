import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner: FC = () => {
  const mainBannerImg = require("../../../images/banner.png");
  return (
    <section className='banner'>
      <div className='banner__container'>
        <div className='banner__gradient'></div>
        <img src={mainBannerImg} alt='баннер' className='banner__image' />
        <div className='banner__wrapper'>
          <h1 className='banner__title'>
            Бытовая химия, косметика и хозтовары
          </h1>
          <span className='banner__subtitle'>оптом по кокчетаву и области</span>
          <Link to={"/catalog"}>
            <button className='button banner__button'>
              <span className='banner__button-span'>В КАТАЛОГ</span>
            </button>
          </Link>
          <div className='banner__sub-container'>
            <button className='banner__button-plus button'>+</button>
            <span className='banner__button-plus_span'>
              Только самые выгодные предложения
            </span>
            <button className='banner__button-plus button'>+</button>
            <span className='banner__button-plus_span'>
              Бесплатная доставка по <b>Кокчетаву от 10 тыс ₸</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
