import React from 'react';
import styles from './realizarPedidos.module.css'
import ActionHeader from '../ActionHeader/ActionHeader';

const RealizarPedidos = () => {

  const clientes = [
    {
      nombre: "Daniela Ayala"
    },
    {
      nombre: "Ruben Gonzalez"
    },
    {
      nombre: "Mariana Reyes"
    },
    {
      nombre: "Julio Espinoza"
    }
  ]
  const productos = [
    {
      nombre: "Botella de 1 Lts",
      monto: 2
    },
    {
      nombre: "Botella de 3 Lts",
      monto: 5
    },
    {
      nombre: "Botellon de 10 Lts",
      monto: 10
    },
    {
      nombre: "Botellon de 20 Lts",
      monto: 18
    }
  ]

  return (
    <div className={`${styles.container}`}>
      <ActionHeader title={"Realizar Pedido"} />

      <select className={`${styles.select}`} name="" id="">
        {clientes.map((client, index) => (
          <option value="">{client.nombre}</option>
        ))}
      </select>

      <select className={`${styles.select}`} name="" id="">
        {productos.map((product, index) => (
          <option value="">{product.nombre}</option>
        ))}
      </select>

      <div className={`${styles.quantityPrice}`}>
        <div className={`${styles.quiantity}`}>
          <p>Cantidad</p>
          <div className={`${styles.counter}`}>
            <div className={`${styles.adicionador}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 9V11H15V9H5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="#626262" />
              </svg>
            </div>
            <div className={`${styles.number}`}>
              <p>1</p>
            </div>
            <div className={`${styles.adicionador}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 15H11V11H15V9H11V5H9V9H5V11H9V15ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#626262" />
              </svg>
            </div>
          </div>
        </div>
        <div className={`${styles.price}`}>
          <p>15</p>
          <div className={`${styles.priceUnity}`}>
            <p>Bs</p>
          </div>
        </div>
      </div>

      <div className={`${styles.btnContainer}`}>

        <div className={`${styles.btn}`}>
          <p>Realizar Pedido</p>
        </div>
      </div>

    </div>
  );
};

export default RealizarPedidos;