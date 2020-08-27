import React, { FunctionComponent } from "react";
import ProcessItem from "../../ProcessItem";
import "./style.scss";
import { selectProcess, getProcessAsync } from "../../../store/processSlice";
import { useSelector, useDispatch } from "react-redux";

const ProcessList: FunctionComponent = () => {
  const dispatch = useDispatch();
  const processState = useSelector(selectProcess);

  if (!processState.procesess && !processState.loading) {
    dispatch(getProcessAsync());
  }

  return (
    <section className="process-list">
      <h2 className="process-list__heading">Список процессов</h2>
      <div className="process-list__content">
        <ul className="process-list__list">
          {processState.procesess &&
            processState.procesess.map((process) => {
              return (
                <li key={process.id} className="process-list__item">
                  <ProcessItem
                    name={process.name}
                    averageActiveTime={process.averageActiveTime}
                    averageLeadTime={process.averageLeadTime}
                    employeesInvolvedProcess={process.employeesInvolvedProcess}
                    loading={process.loading}
                    end={process.end}
                    numberOfExecutions={process.numberOfExecutions}
                    numberOfScenarios={process.numberOfScenarios}
                    start={process.start}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default ProcessList;
