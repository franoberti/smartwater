import React, {useState} from 'react';
import styles from './quickActions.module.css'
import ClientesContainer from '../ClientesContainer/ClientesContainer';
import RealizarPedidos from '../RealizarPedidos/RealizarPedidos';

const QuickActions = ({setPricePedido}) => {
    
    

    return (
        <div className={`${styles.container}`}>
            <h3 className={`${styles.title}`}>Acciones Rapidas</h3>
            <div className={`${styles.containerActions}`}>
                <ClientesContainer />
                <RealizarPedidos setPricePedido={setPricePedido}/>
                <div className={`${styles.containerSection}`}>
                </div>
            </div>
        </div>
    );
};

export default QuickActions;