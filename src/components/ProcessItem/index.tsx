import React, { FunctionComponent } from "react";
import arrow from "./arrow.svg";
import Fraction from "../ProcessItemFraction";
import syncIcon from "./sync.svg";
import clockIcon from "./clock.svg";
import clockHalfIcon from "./clock-half.svg";
import peopleIcon from "./peolple.svg";
import branchIcon from "./branch.svg";
import "./style.scss";
import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");

interface Props {
  name: string;
  numberOfExecutions: number;
  averageLeadTime: string;
  averageActiveTime: string;
  employeesInvolvedProcess: number;
  numberOfScenarios: number;
  start: string;
  end: string;
  loading: string;
}

const toDuration = (time?: string | number): string => {
  if (!time) {
    return "";
  }
  const milliseconds = +time;
  const days = moment.duration(milliseconds).days();
  const hours = moment.duration(milliseconds).hours();
  const mins = moment.duration(milliseconds).minutes();

  const daysHumanized = days > 0 ? `${days}д` : "";
  const hoursHumanized = hours > 0 ? `${hours}ч` : "";
  const minsHumanized = mins > 0 ? `${mins} мин` : "";

  return `${daysHumanized} ${hoursHumanized} ${minsHumanized}`.trim();
};

const getPercent = (
  averageComplete?: number | string,
  averageActive?: number | string
): string => {
  if (!averageComplete || !averageActive) return "";

  return ` (${((+averageActive / +averageComplete) * 100).toFixed(1)}%)`;
};

const ProcessItem: FunctionComponent<Partial<Props>> = (props) => {
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
        <h2 className="process-item__heading">{props.name}</h2>
        <button disabled type="button" className="process-item__btn">
          <span>На карту процесса</span>
          <span className="process-item__btn-icon">
            <img src={arrow} alt="" />
          </span>
        </button>
      </header>
      <div className="process-item__content">
        <div className="process-item__first-col">
          <Fraction large append={syncIconElement} sub="выполнено раз">
            {props.numberOfExecutions &&
              props.numberOfExecutions.toLocaleString()}
          </Fraction>
        </div>
        <div className="process-item__second-col">
          <Fraction append={clockIconElement} sub="среднее время выполнения">
            {toDuration(props.averageLeadTime)}
          </Fraction>
          <Fraction append={peopleIconElement} sub="участвует в процессе">
            {props.employeesInvolvedProcess &&
              props.employeesInvolvedProcess.toLocaleString() + " сотрудников"}
          </Fraction>
          <Fraction append={clockHalfIconElement} sub="среднее активное время">
            {toDuration(props.averageActiveTime) +
              getPercent(props.averageLeadTime, props.averageActiveTime)}
          </Fraction>
          <Fraction append={branchIconElement} sub="в процессе">
            {props.numberOfScenarios &&
              props.numberOfScenarios.toLocaleString() + " сценариев"}
          </Fraction>
        </div>
        <div className="process-item__third-col">
          <p className="process-item__bit">
            <span className="process-item__bit-name">Начало</span>
            <span className="process-item__bit-content">
              {props.start &&
                moment
                  .unix(+props.start)
                  .local()
                  .format("DD MMMM YYYY")}
            </span>
          </p>
          <p className="process-item__bit">
            <span className="process-item__bit-name">Окончание</span>
            <span className="process-item__bit-content">
              {props.end &&
                moment
                  .unix(+props.end)
                  .local()
                  .format("DD MMMM YYYY")}
            </span>
          </p>
          <p className="process-item__bit">
            <span className="process-item__bit-name">Загрузка</span>
            <span className="process-item__bit-content">
              {props.loading &&
                moment
                  .unix(+props.loading)
                  .local()
                  .format("DD MMMM YYYY")}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProcessItem;
