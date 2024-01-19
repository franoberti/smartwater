import React from 'react';
import styles from './cliente.module.css'

const Cliente = ({ nombre, img, fecha, monto }) => {

  const formatDate = (date) => {
    // Obtener los componentes de la fecha
    const day = date.getDate();
    const month = date.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que sumamos 1
    const year = date.getFullYear() % 100; // Obtenemos los últimos dos dígitos del año

    // Asegurarnos de que los valores tengan dos dígitos (agregando ceros a la izquierda si es necesario)
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedYear = year < 10 ? `0${year}` : year;

    // Crear la cadena en el formato deseado
    const formattedDate = `${formattedDay}/${formattedMonth}/${formattedYear}`;

    return formattedDate;
  }

  const dateToShow = formatDate(fecha)

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.partA}`}>
        <div className={`${styles.image}`}>
          <img className={`${styles.image}`} src={img} alt="" width={'30px'} height={`30px`} />
        </div>
        <p className={`${styles.name}`}>{nombre}</p>
      </div>
      <div className={`${styles.partB}`}>
        <div className={`${styles.date}`}>
          <p>{dateToShow}</p>
        </div>
        <div className={`${styles.monto}`}>

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
            <path d="M2.22222 2.83334C0.996528 2.83334 0 3.82986 0 5.05556V13.9444C0 15.1701 0.996528 16.1667 2.22222 16.1667H17.7778C19.0035 16.1667 20 15.1701 20 13.9444V5.05556C20 3.82986 19.0035 2.83334 17.7778 2.83334H2.22222ZM9.44444 7.27778H17.2222C17.5278 7.27778 17.7778 7.52778 17.7778 7.83334C17.7778 8.13889 17.5278 8.38889 17.2222 8.38889H9.44444C9.13889 8.38889 8.88889 8.13889 8.88889 7.83334C8.88889 7.52778 9.13889 7.27778 9.44444 7.27778ZM8.88889 11.1667C8.88889 10.8611 9.13889 10.6111 9.44444 10.6111H17.2222C17.5278 10.6111 17.7778 10.8611 17.7778 11.1667C17.7778 11.4722 17.5278 11.7222 17.2222 11.7222H9.44444C9.13889 11.7222 8.88889 11.4722 8.88889 11.1667ZM5.69444 5.88889V6.37153C5.95486 6.4132 6.20139 6.47223 6.42708 6.53473C6.79861 6.63195 7.01736 7.01389 6.92014 7.38542C6.82292 7.75695 6.44097 7.9757 6.06944 7.87848C5.6875 7.77778 5.31945 7.70486 4.98611 7.69792C4.71181 7.69445 4.43056 7.76042 4.23958 7.87153C4.07292 7.96875 4.02431 8.06597 4.02431 8.19445C4.02431 8.25695 4.02778 8.31598 4.20833 8.42709C4.42708 8.55903 4.74653 8.65973 5.19097 8.79167L5.21528 8.79861C5.60417 8.91667 6.10417 9.06598 6.50347 9.31945C6.95139 9.6007 7.34722 10.059 7.35764 10.7639C7.36806 11.4896 6.99306 12.0174 6.49653 12.3264C6.24653 12.4826 5.96875 12.5799 5.69097 12.6389V13.1111C5.69097 13.4931 5.37847 13.8056 4.99653 13.8056C4.61458 13.8056 4.30208 13.4931 4.30208 13.1111V12.6042C3.94444 12.5278 3.60764 12.4132 3.32292 12.3125C3.25 12.2882 3.18056 12.2639 3.11111 12.2396C2.74653 12.1181 2.55208 11.7257 2.67361 11.3611C2.79514 10.9965 3.1875 10.8021 3.55208 10.9236C3.63889 10.9514 3.72222 10.9826 3.80208 11.0069C4.27431 11.1667 4.63542 11.2882 5.02083 11.3021C5.31945 11.3125 5.59375 11.2465 5.76389 11.1389C5.90625 11.0521 5.97222 10.9479 5.96875 10.7743C5.96875 10.6736 5.94097 10.6007 5.76389 10.4896C5.54514 10.3507 5.22917 10.25 4.79167 10.1181L4.73264 10.1007C4.35417 9.98611 3.87847 9.84375 3.49653 9.61459C3.05556 9.34722 2.64236 8.90278 2.63889 8.20139C2.63542 7.46875 3.04861 6.96181 3.53472 6.67709C3.77431 6.53472 4.03819 6.44097 4.30556 6.38195V5.88889C4.30556 5.50695 4.61806 5.19445 5 5.19445C5.38194 5.19445 5.69444 5.50695 5.69444 5.88889Z" fill="white" />
          </svg>

          <p>{monto} Bs.</p>
        </div>
      </div>
    </div>
  );
};

export default Cliente;