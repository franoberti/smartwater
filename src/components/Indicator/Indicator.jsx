import React from 'react';
import styles from './indicator.module.css'

const Indicator = ({ title, value, unity, percentage, wrong }) => {

  return (
    <div className={`${styles.container}`}>
      <p className={`${styles.title}`}>{title}</p>
      <div className={`${styles.valueContainer}`}>
        <p className={`${styles.value}`}>{value}</p>
        <p className={`${styles.unity}`}>{unity}</p>
      </div>

      {
        wrong ?
          <div className={`${styles.footer}`}>
            <div className={`${styles.percentageContainerWrong}`}>
              <p className={`${styles.percentageWrong}`}>+{percentage}%</p>
            </div>
            <p className={`${styles.percentageDescription}`}>En el último mes</p>
          </div>
        :
          <div className={`${styles.footer}`}>
            <div className={`${styles.percentageContainer}`}>
              <p className={`${styles.percentage}`}>+{percentage}%</p>
            </div>
            <p className={`${styles.percentageDescription}`}>En el último mes</p>
          </div>
      }
    </div>
  );
};

export default Indicator;