import React from 'react';
import styles from './quickActions.module.css'
import ClientesContainer from '../ClientesContainer/ClientesContainer';
import RealizarPedidos from '../RealizarPedidos/RealizarPedidos';

const QuickActions = () => {
    return (
        <div className={`${styles.container}`}>
            <h3 className={`${styles.title}`}>Acciones Rapidas</h3>
            <div className={`${styles.containerActions}`}>
                <ClientesContainer />
                <RealizarPedidos />
            </div>
        </div>
    );
};

export default QuickActions;