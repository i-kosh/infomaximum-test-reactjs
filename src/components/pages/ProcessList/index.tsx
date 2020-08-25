import React, { FunctionComponent } from "react";
import ProcessItem from "../../ProcessItem";
import "./style.scss";

interface Props {}

const ProcessList: FunctionComponent<Props> = (props) => {
  return (
    <section className="process-list">
      <h2 className="process-list__heading">Список процессов</h2>
      <div className="process-list__content">
        <ul className="process-list__list">
          <li className="process-list__item">
            <ProcessItem />
          </li>
          <li className="process-list__item">
            <ProcessItem />
          </li>
          <li className="process-list__item">
            <ProcessItem />
          </li>
          <li className="process-list__item">
            <ProcessItem />
          </li>
          <li className="process-list__item">
            <ProcessItem />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProcessList;
