import React, { FC, useState, useEffect } from "react";
import "./InfoToolPopup.css";
import closeIcon from "../../images/icons/close.svg";
import approved from "../../images/icons/approved.svg";
import { isDisabled } from "@testing-library/user-event/dist/utils";

interface IPropsPopup {
  isArange: boolean;
}
const InfoToolPopup: FC<IPropsPopup> = ({ isArange }) => {
  const [isClosePopup, setClosePopup] = useState<boolean>(false);
  const [popupState, setPopupState] = useState<string>("popup");

  useEffect(() => {
    if (isArange) {
      setPopupState("popup__active");
    }
    return;
  }, [isArange]);

  useEffect(() => {
    setClosePopup(isClosePopup);
    setPopupState("popup");
  }, [isClosePopup]);
  //   isArange?  isClosePopup ? "popup__close" : "popup"

  return (
    <>
      <div className={popupState}>
        <div className='popup__wrapper'>
          <div className='popup__bg'></div>
          <div className='popup__window'>
            <button className=' button popup__button-approved'>
              <img
                src={approved}
                alt='одобрение'
                className='popup__approved-img'
              />
            </button>
            <h2 className='popup__title'>Спасибо за заказ</h2>
            <span className='popup__span'>
              Наш менеджер свяжется с вами в ближайшее время
            </span>
            <button
              className='popup__button-close'
              onClick={() => setClosePopup(true)}
            >
              <img src={closeIcon} alt='закрыть' className='popup__close-img' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoToolPopup;
