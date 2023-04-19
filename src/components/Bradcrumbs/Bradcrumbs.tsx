import React, { FC, useState, useEffect } from "react";
import "./Bradcrumbs.css";
import { Link, useLocation } from "react-router-dom";

interface IPropsBrad {
  url?: any;
}

const Bradcrumbs: FC<IPropsBrad> = ({ url }) => {
  const [nameCrumb, setNameCrumb] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    if (!url) {
      return;
    }
  }, []);

  useEffect(() => {
    if (location.pathname == "/catalog") {
      setNameCrumb("Косметика и гигиена");
    }
    if (location.pathname == "/order") {
      setNameCrumb("Корзина");
    }
    if (!location.pathname) {
      setNameCrumb("Главная");
    }
  }, [location]);
  let currentLink = " ";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className='bradcrumbs__history' key={crumb}>
          <Link to={currentLink}>{url ? crumb : nameCrumb}</Link>
        </div>
      );
    });

  return <div className='bradcrumbs'>{crumbs}</div>;
};

export default Bradcrumbs;
