import React from 'react';
import styles from './home.module.css'
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import IndicatorsContainer from '../IndicatorsContainer/IndicatorsContainer';

const Home = () => {
    return (
        <div className={`${styles.app}`}>

            <Sidebar/>

            <div className={`${styles.content}`}>
                <Navbar/>
                <IndicatorsContainer/>



            </div>
        </div>
    );
};

export default Home;