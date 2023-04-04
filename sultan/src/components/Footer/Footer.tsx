import React, { FC } from "react";
import "./Footer.css";
import arrow from "../../images/icons/arrow.svg";
import logoFooter from "../../images/icons/footer-logo.svg";
import headerPrice from "../../images/icons/bxs-download.svg";
import iconWa from "../../images/icons/whatsApp.svg";
import iconTg from "../../images/icons/telegram.svg";
import iconVisa from "../../images/icons/visa.svg";
import iconMaster from "../../images/icons/master.svg";

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__about'>
          <a href='/header'>
            <img src={logoFooter} alt='лого футера' className='footer__logo' />
          </a>
          <h3 className='footer__description'>
            Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
            в Кокчетаве и Акмолинской области
          </h3>
          <span className='footer__span'>Подпишись на скидки и акции</span>
          <input
            type='text'
            className='footer__input input'
            placeholder='Введите ваш E-mail'
          />
          <button className='button footer__button-input'>
            <img src={arrow} alt='поиск' className='footer__input-arrow' />
          </button>
        </div>
        <div className='footer__container-ul'>
          <ul className='footer__ul'>
            <h3 className='footer__title'>Меню сайта:</h3>
            <a href='#'>
              <li className='footer__li'>О компании</li>
            </a>
            <a href='#'>
              <li className='footer__li'>Доставка и оплата</li>
            </a>
            <a href='#'>
              <li className='footer__li'>Возврат</li>
            </a>
            <a href='#'>
              <li className='footer__li'>Контакты</li>
            </a>
          </ul>
          <ul className='footer__ul'>
            <h3 className='footer__title'>Категории:</h3>
            <a href=''>
              <li className='footer__li'>Бытовая химия</li>
            </a>
            <a href=''>
              <li className='footer__li'>Косметика и гигиена</li>
            </a>
            <a href=''>
              <li className='footer__li'>Товары для дома</li>
            </a>
            <a href=''>
              <li className='footer__li'>Товары для детей и мам</li>
            </a>
            <a href=''>
              <li className='footer__li'>Посуда</li>
            </a>
          </ul>
          <ul className='footer__ul'>
            <h3 className='footer__title'>Скачать прайс-лист:</h3>
            <button
              className='header__button-price button footer__button-price'
              type='button'
            >
              <span className='header__button-span'>Прайс-лист</span>
              <img
                src={headerPrice}
                alt='загрузка'
                className='header__button-price_img'
              />
            </button>
            <span className='footer__title-span'>Связь в мессенджерах:</span>
            <div className='footer__price-block'>
              <a href='https://web.whatsapp.com/' target='_blank'>
                <img
                  src={iconWa}
                  alt='вотсап'
                  className='footer__price-social'
                />
              </a>
              <a href='https://web.telegram.org/' target='_blank'>
                <img
                  src={iconTg}
                  alt='телеграм'
                  className='footer__price-social'
                />
              </a>
            </div>
          </ul>
          <ul className='footer__ul'>
            <h3 className='footer__title'>Контакты:</h3>
            <div className='header__footer-contacts footer__contacts'>
              <a
                href='tel=:+7 (777) 490-00-91'
                className='header__footer-tel footer__tel'
              >
                +7 (777) 490-00-91
              </a>
              <span className='header__footer-time footer__time'>
                время работы: 9:00-20:00
              </span>
              <a href='#' className='header__footer-callback footer__callback'>
                Заказать звонок
              </a>
            </div>
            <div className='header__top-container_mail footer__contacts-wrap'>
              <a href='#' className='header__top-mail-link footer__mail'>
                opt.sultan@mail.ru
              </a>
              <span className='header__top-mail-span footer__mail-span'>
                На связи в любое время
              </span>
            </div>
            <div className='footer__price-block footer__cards-block'>
              <a href='https://www.visa.com.ru/' target='_blank'>
                <img src={iconVisa} alt='виза' />
              </a>
              <a href='https://www.mastercard.ru/ru-ru.html' target='_blank'>
                <img src={iconMaster} alt='мастер' />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
