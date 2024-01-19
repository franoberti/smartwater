import React from 'react';
import styles from './clientesContainer.module.css'
import danielaAyala from '../../assets/danielaAyala.png'
import rubenGonzalez from '../../assets/rubenGonzalez.png'
import marianaReyes from '../../assets/marianaReyes.png'
import julioEspinoza from '../../assets/julioEspinosa.png'
import Cliente from '../Cliente/Cliente';

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
      <div className={`${styles.header}`}>
        <div className={`${styles.title}`}>
          <h5 className={`${styles.titleText}`}>Clientes</h5>
          <p className={`${styles.subtitle}`}>Vista rapida</p>
        </div>
        <div className={`${styles.options}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.75 7.5H13.25C13.4489 7.5 13.6397 7.57902 13.7803 7.71967C13.921 7.86032 14 8.05109 14 8.25C14 8.44891 13.921 8.63968 13.7803 8.78033C13.6397 8.92098 13.4489 9 13.25 9H5.75C5.55109 9 5.36032 8.92098 5.21967 8.78033C5.07902 8.63968 5 8.44891 5 8.25C5 8.05109 5.07902 7.86032 5.21967 7.71967C5.36032 7.57902 5.55109 7.5 5.75 7.5ZM5.75 12.5H13.25C13.4489 12.5 13.6397 12.579 13.7803 12.7197C13.921 12.8603 14 13.0511 14 13.25C14 13.4489 13.921 13.6397 13.7803 13.7803C13.6397 13.921 13.4489 14 13.25 14H5.75C5.55109 14 5.36032 13.921 5.21967 13.7803C5.07902 13.6397 5 13.4489 5 13.25C5 13.0511 5.07902 12.8603 5.21967 12.7197C5.36032 12.579 5.55109 12.5 5.75 12.5ZM1.75 2.5H8.25C8.44891 2.5 8.63968 2.57902 8.78033 2.71967C8.92098 2.86032 9 3.05109 9 3.25C9 3.44891 8.92098 3.63968 8.78033 3.78033C8.63968 3.92098 8.44891 4 8.25 4H1.75C1.55109 4 1.36032 3.92098 1.21967 3.78033C1.07902 3.63968 1 3.44891 1 3.25C1 3.05109 1.07902 2.86032 1.21967 2.71967C1.36032 2.57902 1.55109 2.5 1.75 2.5ZM2 14C1.73478 14 1.48043 13.8946 1.29289 13.7071C1.10536 13.5196 1 13.2652 1 13C1 12.7348 1.10536 12.4804 1.29289 12.2929C1.48043 12.1054 1.73478 12 2 12C2.26522 12 2.51957 12.1054 2.70711 12.2929C2.89464 12.4804 3 12.7348 3 13C3 13.2652 2.89464 13.5196 2.70711 13.7071C2.51957 13.8946 2.26522 14 2 14ZM3 8C3 8.26522 2.89464 8.51957 2.70711 8.70711C2.51957 8.89464 2.26522 9 2 9C1.73478 9 1.48043 8.89464 1.29289 8.70711C1.10536 8.51957 1 8.26522 1 8C1 7.73478 1.10536 7.48043 1.29289 7.29289C1.48043 7.10536 1.73478 7 2 7C2.26522 7 2.51957 7.10536 2.70711 7.29289C2.89464 7.48043 3 7.73478 3 8ZM13.314 4.918L11.07 2.417C11.0377 2.38106 11.0166 2.33655 11.0091 2.28884C11.0016 2.24113 11.008 2.19227 11.0277 2.14816C11.0474 2.10405 11.0794 2.06659 11.1199 2.0403C11.1604 2.014 11.2077 2.00001 11.256 2H15.744C15.7923 2.00001 15.8396 2.014 15.8801 2.0403C15.9206 2.06659 15.9526 2.10405 15.9723 2.14816C15.992 2.19227 15.9984 2.24113 15.9909 2.28884C15.9834 2.33655 15.9623 2.38106 15.93 2.417L13.686 4.917C13.6626 4.94311 13.6339 4.96398 13.6018 4.97828C13.5698 4.99257 13.5351 4.99996 13.5 4.99996C13.4649 4.99996 13.4302 4.99257 13.3982 4.97828C13.3661 4.96398 13.3374 4.94311 13.314 4.917V4.918Z" fill="black" />
          </svg>
        </div>
      </div>

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