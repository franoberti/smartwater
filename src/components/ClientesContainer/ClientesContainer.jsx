import React from 'react';
import styles from './clientesContainer.module.css'
import danielaAyala from '../../assets/danielaAyala.png'
import rubenGonzalez from '../../assets/rubenGonzalez.png'
import marianaReyes from '../../assets/marianaReyes.png'
import julioEspinoza from '../../assets/julioEspinosa.png'
import Cliente from '../Cliente/Cliente';
import ActionHeader from '../ActionHeader/ActionHeader';

const ClientesContainer = () => {

  const clientes = [
    {
      nombre: "Daniela Ayala",
      img: danielaAyala,
      fecha: new Date(2023, 0, 20),
      monto: 100
    },
    {
      nombre: "Ruben Gonzalez",
      img: rubenGonzalez,
      fecha: new Date(2023, 0, 20),
      monto: 100
    },
    {
      nombre: "Mariana Reyes",
      img: marianaReyes,
      fecha: new Date(2023, 0, 20),
      monto: 100
    },
    {
      nombre: "Julio Espinoza",
      img: julioEspinoza,
      fecha: new Date(2023, 0, 20),
      monto: 100
    }
  ]

  return (
    <div className={`${styles.container}`}>

      <ActionHeader title={"Clientes"} subtitle={"Vista rapida"}/>

      <div className={`${styles.body}`}>
        {clientes.map((cliente, index) => (
          <Cliente
            key={index}
            nombre={cliente.nombre}
            img={cliente.img}
            fecha={cliente.fecha}
            monto={cliente.monto}
          />
        ))}
      </div>


    </div>
  );
};

export default ClientesContainer;