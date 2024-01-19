import React from 'react';
import styles from './home.module.css'
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import IndicatorsContainer from '../IndicatorsContainer/IndicatorsContainer';
import QuickActions from '../QuickActions/QuickActions';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <div className={`${styles.app}`}>

            <Sidebar/>

            <div className={`${styles.content}`}>
                <Navbar/>
                <IndicatorsContainer/>
                <QuickActions/>
                <Stats/>
            </div>
        </div>
    );
};

export default Home;