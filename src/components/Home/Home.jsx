import React from 'react';
import styles from './home.module.css'
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import IndicatorsContainer from '../IndicatorsContainer/IndicatorsContainer';
import QuickActions from '../QuickActions/QuickActions';
import Stats from '../Stats/Stats';
import { useState, useEffect } from 'react';

const Home = () => {

    const [pricePedidoRecibido, setPricePedidoRecibido] = useState('');

    const getPricePedido = (price) => {        
        setPricePedidoRecibido(price);
      };

      const handleChangePrice = () =>{
        return pricePedidoRecibido
      }

      const handleChangePriceRecived = (newPrice) => {
      };

      useEffect(() => {
        handleChangePriceRecived(pricePedidoRecibido);
      }, [pricePedidoRecibido]);

    return (
        <div className={`${styles.app}`}>

            <Sidebar/>

            <div className={`${styles.content}`}>
                <Navbar/>
                <IndicatorsContainer price={parseFloat(pricePedidoRecibido)} onChangePriceRecived={handleChangePriceRecived}/>
                <QuickActions setPricePedido={getPricePedido}/>
                <Stats/>
            </div>
        </div>
    );
};

export default Home;