import React, { useEffect, useState } from 'react';
import styles from './indicatorsContainer.module.css'
import Indicator from '../Indicator/Indicator.jsx';
import { useGlobal } from '../../context/GlobalProvider.jsx';

const IndicatorsContainer = ({ price, onChangePriceRecived }) => {

    /* Creo este array simulando que vienen datos de la BD */
    const [indicators, setIndicators] = useState([
        {
            title: "Clientes nuevos",
            value: 18,
            unity: "",
            percentage: 8.2,
            wrong: false,
        },
        {
            title: "Préstamos activos",
            value: 25,
            unity: "",
            percentage: 8.2,
            wrong: true,
        },
        {
            title: "Pedidos totales",
            value: 1236,
            unity: "",
            percentage: 8.2,
            wrong: false,
        },
        {
            title: "Ingresos totales",
            value: 1783,
            unity: "Bs",
            percentage: 8.2,
            wrong: false,
        }
    ])


    const { globalSignal, setGlobalSignal } = useGlobal()
    const { globalPrice, setGlobalPrice } = useGlobal();


    useEffect(() => {
        if (!globalPrice) {
            setGlobalPrice(0)
        }

        const newIndicators = [...indicators];

        newIndicators[2].value = newIndicators[2].value + 1;
        console.log(newIndicators[3].value)
        newIndicators[3].value = newIndicators[3].value + parseFloat(globalPrice);
        console.log(newIndicators[3].value)

        setIndicators(newIndicators);

    }, [globalSignal ,globalPrice])


    return (
        <div className={`${styles.container} row`}>
            {/* Recorro el array para crear los distintos indicadores */}
            {indicators.map((indicator, index) => (
                <Indicator
                    key={index}
                    title={indicator.title}
                    value={indicator.value}
                    unity={indicator.unity}
                    percentage={indicator.percentage}
                    wrong={indicator.wrong}
                />
            ))}
        </div>
    );
};

export default IndicatorsContainer;