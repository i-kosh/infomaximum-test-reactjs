import React, { FunctionComponent } from "react";
import arrow from "./arrow.svg";
import Fraction from "../ProcessItemFraction";
import syncIcon from "./sync.svg";
import clockIcon from "./clock.svg";
import clockHalfIcon from "./clock-half.svg";
import peopleIcon from "./peolple.svg";
import branchIcon from "./branch.svg";
import "./style.scss";

const ProcessItem: FunctionComponent = (props) => {
  const syncIconElement = (
    <img
      style={{ height: "100%", opacity: 0.5, padding: "2.4px 4px" }}
      src={syncIcon}
      alt=""
    />
  );
  const clockIconElement = (
    <img style={{ height: "100%", opacity: 0.5 }} src={clockIcon} alt="" />
  );
  const clockHalfIconElement = (
    <img style={{ height: "100%", opacity: 0.5 }} src={clockHalfIcon} alt="" />
  );
  const peopleIconElement = (
    <img style={{ height: "100%", opacity: 0.5 }} src={peopleIcon} alt="" />
  );
  const branchIconElement = (
    <img style={{ height: "100%", opacity: 0.5 }} src={branchIcon} alt="" />
  );

  return (
    <article className="process-item">
      <header className="process-item__header">
        <h2 className="process-item__heading">Рассмотрение кредитной заявки</h2>
        <button type="button" className="process-item__btn">
          <span>На карту процесса</span>
          <span className="process-item__btn-icon">
            <img src={arrow} alt="" />
          </span>
        </button>
      </header>
      <div className="process-item__content">
        <div className="process-item__first-col">
          <Fraction large append={syncIconElement} sub="выполнено раз">
            340 487
          </Fraction>
        </div>
        <div className="process-item__second-col">
          <Fraction append={clockIconElement} sub="среднее время выполнения">
            10ч 36 мин
          </Fraction>
          <Fraction append={peopleIconElement} sub="участвует в процессе">
            120 сотрудников
          </Fraction>
          <Fraction append={clockHalfIconElement} sub="среднее активное время">
            1ч 7 мин (10,5%)
          </Fraction>
          <Fraction append={branchIconElement} sub="в процессе">
            129 сценариев
          </Fraction>
        </div>
        <div className="process-item__third-col">
          <p className="process-item__bit">
            <span className="process-item__bit-name">Начало</span>
            <span className="process-item__bit-content">11 ноября 2017</span>
          </p>
          <p className="process-item__bit">
            <span className="process-item__bit-name">Окончание</span>
            <span className="process-item__bit-content">6 января 2018</span>
          </p>
          <p className="process-item__bit">
            <span className="process-item__bit-name">Загрузка</span>
            <span className="process-item__bit-content">10 января 2018</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProcessItem;
