import React from 'react';
import styles from './stats.module.css'
import BarChart from '../BarChart/BarChart';

const Stats = () => {
  return (
    <div className={`${styles.container}`}>
      <BarChart/>
    </div>
  );
};

export default Stats;