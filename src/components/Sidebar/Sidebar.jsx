import React, {useState, useRef, useEffect } from 'react';
import styles from './sidebar.module.css'
import Logo from '../Logo/Logo';
import camionIcon from '../../assets/camion.png'
import BtnSalir from '../BtnSalir/BtnSalir';

const Sidebar = ({visible}) => {

  const [visibleSidebar, setVisibleSidebar] = useState(false)

  const miEtiquetaRef = useRef(null);
  const miEtiquetaRef2 = useRef(null);


  const handleClickBars = () => {
    setVisibleSidebar(!visibleSidebar)
  }
  
  useEffect(() => {
    setVisibleSidebar(visible)
  }, [visible])


  //Con esta funcion hago que si se clickea fuera del menu de opciones el sidebar se cierre
  useEffect(() => {
    // Función de manejo de clic para el documento
    function handleDocumentClick(event) {
      // Verificar si el clic ocurrió fuera de la etiqueta específica
      if ((visibleSidebar && miEtiquetaRef.current && !miEtiquetaRef.current.contains(event.target)) &&
        (miEtiquetaRef2.current && !miEtiquetaRef2.current.contains(event.target))) {
        // Realiza la acción que deseas aquí
        setVisibleSidebar(false)
        // Puedes realizar la acción que desees aquí
      }
    }

    // Agregar el event listener al documento si visibleSidebar es true
    if (visibleSidebar) {
      document.addEventListener('click', handleDocumentClick);
    }


    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [visibleSidebar]);

  return (
    <>
      <div className={`${styles.sidebar}`}>
        <Logo></Logo>
        <div className={`${styles.btnContainer}`}>

          {/* BOTON INICIO */}
          <div className={`${styles.btn} ${styles.btnSelected} `}>
            <div className={`${styles.btnIcon}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                <g clip-path="url(#clip0_444_8)">
                  <path d="M23.9917 10.6458C23.9917 11.3958 23.3667 11.9833 22.6583 11.9833H21.325L21.3542 18.6583C21.3542 18.7708 21.3458 18.8833 21.3333 18.9958V19.6667C21.3333 20.5875 20.5875 21.3333 19.6667 21.3333H19C18.9542 21.3333 18.9083 21.3333 18.8625 21.3292C18.8042 21.3333 18.7458 21.3333 18.6875 21.3333H17.3333H16.3333C15.4125 21.3333 14.6667 20.5875 14.6667 19.6667V18.6667V16C14.6667 15.2625 14.0708 14.6667 13.3333 14.6667H10.6667C9.92917 14.6667 9.33333 15.2625 9.33333 16V18.6667V19.6667C9.33333 20.5875 8.5875 21.3333 7.66667 21.3333H6.66667H5.3375C5.275 21.3333 5.2125 21.3292 5.15 21.325C5.1 21.3292 5.05 21.3333 5 21.3333H4.33333C3.4125 21.3333 2.66667 20.5875 2.66667 19.6667V15C2.66667 14.9625 2.66667 14.9208 2.67083 14.8833V11.9833H1.33333C0.583333 11.9833 0 11.4 0 10.6458C0 10.2708 0.125 9.9375 0.416667 9.64583L11.1 0.333333C11.3917 0.0416667 11.725 0 12.0167 0C12.3083 0 12.6417 0.0833333 12.8917 0.291667L23.5333 9.64583C23.8667 9.9375 24.0333 10.2708 23.9917 10.6458Z" fill="#222222" />
                </g>
                <defs>
                  <clipPath id="clip0_444_8">
                    <rect width="24" height="21.3333" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className={`${styles.btnText} ${styles.btnTextSelected}`}>Inicio</p>
          </div>

          {/* BOTON CLIENTE */}
          <div className={`${styles.btn} `}>
            <div className={`${styles.btnIcon}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">
                <path d="M6.75 0.333344C7.74456 0.333344 8.69839 0.728432 9.40165 1.43169C10.1049 2.13495 10.5 3.08878 10.5 4.08334C10.5 5.07791 10.1049 6.03173 9.40165 6.73499C8.69839 7.43826 7.74456 7.83334 6.75 7.83334C5.75544 7.83334 4.80161 7.43826 4.09835 6.73499C3.39509 6.03173 3 5.07791 3 4.08334C3 3.08878 3.39509 2.13495 4.09835 1.43169C4.80161 0.728432 5.75544 0.333344 6.75 0.333344ZM24 0.333344C24.9946 0.333344 25.9484 0.728432 26.6516 1.43169C27.3549 2.13495 27.75 3.08878 27.75 4.08334C27.75 5.07791 27.3549 6.03173 26.6516 6.73499C25.9484 7.43826 24.9946 7.83334 24 7.83334C23.0054 7.83334 22.0516 7.43826 21.3484 6.73499C20.6451 6.03173 20.25 5.07791 20.25 4.08334C20.25 3.08878 20.6451 2.13495 21.3484 1.43169C22.0516 0.728432 23.0054 0.333344 24 0.333344ZM0 14.3349C0 11.574 2.24062 9.33334 5.00156 9.33334H7.00312C7.74844 9.33334 8.45625 9.49741 9.09375 9.78803C9.03281 10.1255 9.00469 10.4771 9.00469 10.8333C9.00469 12.624 9.79219 14.2318 11.0344 15.3333C11.025 15.3333 11.0156 15.3333 11.0016 15.3333H0.998437C0.45 15.3333 0 14.8833 0 14.3349ZM18.9984 15.3333C18.9891 15.3333 18.9797 15.3333 18.9656 15.3333C20.2125 14.2318 20.9953 12.624 20.9953 10.8333C20.9953 10.4771 20.9625 10.1302 20.9062 9.78803C21.5438 9.49272 22.2516 9.33334 22.9969 9.33334H24.9984C27.7594 9.33334 30 11.574 30 14.3349C30 14.888 29.55 15.3333 29.0016 15.3333H18.9984ZM10.5 10.8333C10.5 9.63987 10.9741 8.49528 11.818 7.65136C12.6619 6.80745 13.8065 6.33334 15 6.33334C16.1935 6.33334 17.3381 6.80745 18.182 7.65136C19.0259 8.49528 19.5 9.63987 19.5 10.8333C19.5 12.0268 19.0259 13.1714 18.182 14.0153C17.3381 14.8592 16.1935 15.3333 15 15.3333C13.8065 15.3333 12.6619 14.8592 11.818 14.0153C10.9741 13.1714 10.5 12.0268 10.5 10.8333ZM6 23.0818C6 19.6318 8.79844 16.8333 12.2484 16.8333H17.7516C21.2016 16.8333 24 19.6318 24 23.0818C24 23.7708 23.4422 24.3333 22.7484 24.3333H7.25156C6.5625 24.3333 6 23.7755 6 23.0818Z" fill="white" />
              </svg>
            </div>
            <p className={`${styles.btnText}`}>Clientes</p>
          </div>

          {/* BOTON MAPA DE CLIENTES */}
          <div className={`${styles.btn} `}>
            <div className={`${styles.btnIcon}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="25" viewBox="0 0 19 25" fill="none">
                <path d="M10.1372 23.7941C12.5481 20.7769 18.0467 13.4642 18.0467 9.35669C18.0467 4.37505 14.005 0.333344 9.02335 0.333344C4.04171 0.333344 0 4.37505 0 9.35669C0 13.4642 5.4986 20.7769 7.90953 23.7941C8.48759 24.5131 9.55911 24.5131 10.1372 23.7941ZM9.02335 6.34891C9.82106 6.34891 10.5861 6.6658 11.1502 7.22987C11.7142 7.79394 12.0311 8.55898 12.0311 9.35669C12.0311 10.1544 11.7142 10.9194 11.1502 11.4835C10.5861 12.0476 9.82106 12.3645 9.02335 12.3645C8.22564 12.3645 7.4606 12.0476 6.89653 11.4835C6.33246 10.9194 6.01557 10.1544 6.01557 9.35669C6.01557 8.55898 6.33246 7.79394 6.89653 7.22987C7.4606 6.6658 8.22564 6.34891 9.02335 6.34891Z" fill="white" />
              </svg>
            </div>
            <p className={`${styles.btnText}`}>Mapa de clientes</p>
          </div>

          {/* BOTON MONITOREO */}
          <div className={`${styles.btn} `}>
            <div className={`${styles.btnIcon}`}>
              <img className='' src={camionIcon} alt="" width={'24px'} height={`24px`} />
            </div>
            <p className={`${styles.btnText}`}>Monitoreo de distribuidores</p>
          </div>

          {/* BOTON VENTAS */}
          <div className={`${styles.btn} `}>
            <div className={`${styles.btnIcon}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M3 0.333344C2.17031 0.333344 1.5 1.00366 1.5 1.83334V4.83334C1.5 5.66303 2.17031 6.33334 3 6.33334H6.75V7.83334H4.07812C2.59687 7.83334 1.33594 8.91616 1.11094 10.3833L0.0515625 17.4005C0.01875 17.6208 0 17.8458 0 18.0708V21.3333C0 22.988 1.34531 24.3333 3 24.3333H21C22.6547 24.3333 24 22.988 24 21.3333V18.0708C24 17.8458 23.9812 17.6208 23.9484 17.3958L22.8844 10.3833C22.6641 8.91616 21.4031 7.83334 19.9219 7.83334H9.75V6.33334H13.5C14.3297 6.33334 15 5.66303 15 4.83334V1.83334C15 1.00366 14.3297 0.333344 13.5 0.333344H3ZM4.5 2.58334H12C12.4125 2.58334 12.75 2.92084 12.75 3.33334C12.75 3.74584 12.4125 4.08334 12 4.08334H4.5C4.0875 4.08334 3.75 3.74584 3.75 3.33334C3.75 2.92084 4.0875 2.58334 4.5 2.58334ZM3 20.5833C3 20.1708 3.3375 19.8333 3.75 19.8333H20.25C20.6625 19.8333 21 20.1708 21 20.5833C21 20.9958 20.6625 21.3333 20.25 21.3333H3.75C3.3375 21.3333 3 20.9958 3 20.5833ZM5.25 12.7083C4.95163 12.7083 4.66548 12.5898 4.4545 12.3788C4.24353 12.1679 4.125 11.8817 4.125 11.5833C4.125 11.285 4.24353 10.9988 4.4545 10.7878C4.66548 10.5769 4.95163 10.4583 5.25 10.4583C5.54837 10.4583 5.83452 10.5769 6.0455 10.7878C6.25647 10.9988 6.375 11.285 6.375 11.5833C6.375 11.8817 6.25647 12.1679 6.0455 12.3788C5.83452 12.5898 5.54837 12.7083 5.25 12.7083ZM10.875 11.5833C10.875 11.8817 10.7565 12.1679 10.5455 12.3788C10.3345 12.5898 10.0484 12.7083 9.75 12.7083C9.45163 12.7083 9.16548 12.5898 8.9545 12.3788C8.74353 12.1679 8.625 11.8817 8.625 11.5833C8.625 11.285 8.74353 10.9988 8.9545 10.7878C9.16548 10.5769 9.45163 10.4583 9.75 10.4583C10.0484 10.4583 10.3345 10.5769 10.5455 10.7878C10.7565 10.9988 10.875 11.285 10.875 11.5833ZM7.5 16.4583C7.20163 16.4583 6.91548 16.3398 6.7045 16.1288C6.49353 15.9179 6.375 15.6317 6.375 15.3333C6.375 15.035 6.49353 14.7488 6.7045 14.5378C6.91548 14.3269 7.20163 14.2083 7.5 14.2083C7.79837 14.2083 8.08452 14.3269 8.2955 14.5378C8.50647 14.7488 8.625 15.035 8.625 15.3333C8.625 15.6317 8.50647 15.9179 8.2955 16.1288C8.08452 16.3398 7.79837 16.4583 7.5 16.4583ZM15.375 11.5833C15.375 11.8817 15.2565 12.1679 15.0455 12.3788C14.8345 12.5898 14.5484 12.7083 14.25 12.7083C13.9516 12.7083 13.6655 12.5898 13.4545 12.3788C13.2435 12.1679 13.125 11.8817 13.125 11.5833C13.125 11.285 13.2435 10.9988 13.4545 10.7878C13.6655 10.5769 13.9516 10.4583 14.25 10.4583C14.5484 10.4583 14.8345 10.5769 15.0455 10.7878C15.2565 10.9988 15.375 11.285 15.375 11.5833ZM12 16.4583C11.7016 16.4583 11.4155 16.3398 11.2045 16.1288C10.9935 15.9179 10.875 15.6317 10.875 15.3333C10.875 15.035 10.9935 14.7488 11.2045 14.5378C11.4155 14.3269 11.7016 14.2083 12 14.2083C12.2984 14.2083 12.5845 14.3269 12.7955 14.5378C13.0065 14.7488 13.125 15.035 13.125 15.3333C13.125 15.6317 13.0065 15.9179 12.7955 16.1288C12.5845 16.3398 12.2984 16.4583 12 16.4583ZM19.875 11.5833C19.875 11.7311 19.8459 11.8774 19.7894 12.0139C19.7328 12.1504 19.65 12.2744 19.5455 12.3788C19.441 12.4833 19.317 12.5662 19.1805 12.6227C19.044 12.6792 18.8977 12.7083 18.75 12.7083C18.6023 12.7083 18.456 12.6792 18.3195 12.6227C18.183 12.5662 18.059 12.4833 17.9545 12.3788C17.85 12.2744 17.7672 12.1504 17.7106 12.0139C17.6541 11.8774 17.625 11.7311 17.625 11.5833C17.625 11.4356 17.6541 11.2893 17.7106 11.1528C17.7672 11.0163 17.85 10.8923 17.9545 10.7878C18.059 10.6834 18.183 10.6005 18.3195 10.544C18.456 10.4874 18.6023 10.4583 18.75 10.4583C18.8977 10.4583 19.044 10.4874 19.1805 10.544C19.317 10.6005 19.441 10.6834 19.5455 10.7878C19.65 10.8923 19.7328 11.0163 19.7894 11.1528C19.8459 11.2893 19.875 11.4356 19.875 11.5833ZM16.5 16.4583C16.2016 16.4583 15.9155 16.3398 15.7045 16.1288C15.4935 15.9179 15.375 15.6317 15.375 15.3333C15.375 15.035 15.4935 14.7488 15.7045 14.5378C15.9155 14.3269 16.2016 14.2083 16.5 14.2083C16.7984 14.2083 17.0845 14.3269 17.2955 14.5378C17.5065 14.7488 17.625 15.035 17.625 15.3333C17.625 15.6317 17.5065 15.9179 17.2955 16.1288C17.0845 16.3398 16.7984 16.4583 16.5 16.4583Z" fill="white" />
              </svg>
            </div>
            <p className={`${styles.btnText}`}>Ventas</p>
          </div>

          {/* BOTON PEDIDOS */}
          <div className={`${styles.btn} `}>
            <div className={`${styles.btnIcon}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="31" viewBox="0 0 23 31" fill="none">
                <g clip-path="url(#clip0_1_214)">
                  <path d="M3.75 0.333344C1.68164 0.333344 0 2.01498 0 4.08334V26.5833C0 28.6517 1.68164 30.3333 3.75 30.3333H18.75C20.8184 30.3333 22.5 28.6517 22.5 26.5833V9.70834H15C13.9629 9.70834 13.125 8.87045 13.125 7.83334V0.333344H3.75ZM15 0.333344V7.83334H22.5L15 0.333344ZM3.75 5.02084C3.75 4.50522 4.17188 4.08334 4.6875 4.08334H8.4375C8.95312 4.08334 9.375 4.50522 9.375 5.02084C9.375 5.53647 8.95312 5.95834 8.4375 5.95834H4.6875C4.17188 5.95834 3.75 5.53647 3.75 5.02084ZM3.75 8.77084C3.75 8.25522 4.17188 7.83334 4.6875 7.83334H8.4375C8.95312 7.83334 9.375 8.25522 9.375 8.77084C9.375 9.28647 8.95312 9.70834 8.4375 9.70834H4.6875C4.17188 9.70834 3.75 9.28647 3.75 8.77084ZM11.25 12.9896C11.7656 12.9896 12.1875 13.4115 12.1875 13.9271V14.9408C12.6855 15.0111 13.166 15.1224 13.5996 15.2396C14.0977 15.3744 14.3965 15.8841 14.2617 16.388C14.127 16.8919 13.6172 17.1849 13.1133 17.0501C12.4629 16.8744 11.8242 16.7455 11.2324 16.7396C10.7402 16.7337 10.2129 16.8451 9.84961 17.0619C9.51562 17.2611 9.375 17.4896 9.375 17.8119C9.375 18.0287 9.45117 18.1927 9.80273 18.4037C10.207 18.6439 10.7754 18.8197 11.5137 19.0423L11.543 19.0482C12.2051 19.2474 13.0254 19.4935 13.6699 19.9037C14.3789 20.349 14.9824 21.058 15 22.1419C15.0176 23.2728 14.4375 24.0931 13.6582 24.5794C13.207 24.8607 12.6973 25.0247 12.1875 25.1126V26.1146C12.1875 26.6302 11.7656 27.0521 11.25 27.0521C10.7344 27.0521 10.3125 26.6302 10.3125 26.1146V25.0716C9.65625 24.9486 9.04102 24.7376 8.50195 24.5501C8.37891 24.5091 8.25586 24.4681 8.13867 24.4271C7.64648 24.263 7.38281 23.7298 7.54688 23.2435C7.71094 22.7572 8.24414 22.4876 8.73047 22.6517C8.87695 22.6986 9.01172 22.7455 9.14648 22.7923C9.94336 23.0619 10.5879 23.2845 11.2734 23.3021C11.8066 23.3197 12.3223 23.2025 12.6621 22.9915C12.9609 22.804 13.125 22.5638 13.1191 22.1712C13.1133 21.9017 13.0137 21.7142 12.668 21.4915C12.2695 21.2396 11.7012 21.058 10.9688 20.8353L10.875 20.806C10.2305 20.6126 9.45117 20.3783 8.83594 20.0033C8.13281 19.5814 7.51172 18.8958 7.50586 17.8177C7.5 16.681 8.13867 15.8958 8.90039 15.4447C9.33984 15.1869 9.82617 15.0228 10.3125 14.9349V13.9271C10.3125 13.4115 10.7344 12.9896 11.25 12.9896Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1_214">
                    <rect width="22.5" height="30" fill="white" transform="translate(0 0.333344)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className={`${styles.btnText}`}>Pedidos</p>
          </div>

          {/* BOTON PRESTAMOS */}
          <div className={`${styles.btn} `}>
            <div className={`${styles.btnIcon}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
                <path d="M9.81818 3.8788C10.0545 3.8788 10.2498 3.80134 10.404 3.64643C10.5582 3.49153 10.6356 3.29625 10.6364 3.06062C10.6364 2.82425 10.5589 2.62898 10.404 2.4748C10.2491 2.32062 10.0538 2.24316 9.81818 2.24243C9.58182 2.24243 9.38655 2.31989 9.23237 2.4748C9.07818 2.62971 9.00073 2.82498 9 3.06062C9 3.29698 9.07746 3.49225 9.23237 3.64643C9.38728 3.80062 9.58255 3.87807 9.81818 3.8788ZM16.3636 24.3333C14.8545 24.3333 13.568 23.8013 12.504 22.7373C11.44 21.6733 10.9084 20.3872 10.9091 18.8788C10.9091 17.3697 11.4411 16.0832 12.5051 15.0192C13.5691 13.9552 14.8553 13.4235 16.3636 13.4243C17.8727 13.4243 19.1593 13.9563 20.2233 15.0203C21.2873 16.0843 21.8189 17.3704 21.8182 18.8788C21.8182 20.3879 21.2862 21.6744 20.2222 22.7384C19.1582 23.8024 17.872 24.3341 16.3636 24.3333ZM15.8182 22.1515H16.9091V19.4243H19.6364V18.3333H16.9091V15.6061H15.8182V18.3333H13.0909V19.4243H15.8182V22.1515ZM4.36364 9.06062H15.2727V6.8788H4.36364V9.06062ZM9.46364 22.1515H2.18182C1.58182 22.1515 1.068 21.9377 0.640365 21.5101C0.212729 21.0824 -0.000725421 20.569 1.85214e-06 19.9697V4.69698C1.85214e-06 4.09698 0.21382 3.58316 0.641456 3.15553C1.06909 2.72789 1.58255 2.51443 2.18182 2.51516H6.76364C7 1.86062 7.39564 1.33334 7.95055 0.933343C8.50546 0.533343 9.128 0.333344 9.81818 0.333344C10.5091 0.333344 11.132 0.533343 11.6869 0.933343C12.2418 1.33334 12.6371 1.86062 12.8727 2.51516H17.4545C18.0545 2.51516 18.5684 2.72898 18.996 3.15662C19.4236 3.58425 19.6371 4.09771 19.6364 4.69698V12.0061C19.1091 11.7515 18.5771 11.5606 18.0404 11.4333C17.5036 11.3061 16.9447 11.2424 16.3636 11.2424C16.1636 11.2424 15.9771 11.2468 15.804 11.2555C15.6309 11.2643 15.4538 11.2872 15.2727 11.3243V11.2424H4.36364V13.4243H11.0455C10.7182 13.7333 10.4225 14.0697 10.1585 14.4333C9.89455 14.797 9.66291 15.1879 9.46364 15.6061H4.36364V17.7879H8.80909C8.77273 17.9697 8.74982 18.1472 8.74037 18.3203C8.73091 18.4933 8.72655 18.6795 8.72727 18.8788C8.72727 19.4788 8.78182 20.0381 8.89091 20.5566C9 21.0752 9.19091 21.6068 9.46364 22.1515Z" fill="#F0F4FD" />
              </svg>
            </div>
            <p className={`${styles.btnText}`}>Préstamos</p>
          </div>

          {/* BOTON FINANZAS */}
          <div className={`${styles.btn} `}>
            <div className={`${styles.btnIcon}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                <path d="M3.47368 15.9649L0 19.3691V9.5965H3.47368M9.26316 13.8344L7.44526 12.2828L5.78947 13.8112V4.96492H9.26316M15.0526 11.9123L11.5789 15.386V0.333344H15.0526M18.3063 11.6923L16.2105 9.5965H22V15.386L19.9274 13.3133L11.5789 21.5923L7.56105 18.0954L3.18421 22.3333H0L7.49158 14.9923L11.5789 18.4428" fill="white" />
              </svg>
            </div>
            <p className={`${styles.btnText}`}>Finanzas</p>
          </div>

          {/* BOTON REPORTES */}
          <div className={`${styles.btn} `}>
            <div className={`${styles.btnIcon}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                <path d="M12.0458 10.6248V0.731226C12.0458 0.33265 12.3559 -0.00392532 12.7544 -0.00392532C18.2326 -0.00392532 22.6745 4.43798 22.6745 9.91619C22.6745 10.3148 22.338 10.6248 21.9394 10.6248H12.0458ZM0 12.0419C0 6.67001 3.99019 2.22367 9.16724 1.51509C9.57468 1.45752 9.92011 1.78524 9.92011 2.1971V12.7505L16.8509 19.6813C17.1476 19.978 17.1255 20.4652 16.7845 20.7043C15.0485 21.9443 12.9227 22.6706 10.6287 22.6706C4.76077 22.6706 0 17.9143 0 12.0419ZM23.3123 12.7505C23.7241 12.7505 24.0474 13.0959 23.9943 13.5034C23.6533 15.979 22.462 18.18 20.7215 19.8053C20.4558 20.0533 20.0395 20.0356 19.7826 19.7743L12.7544 12.7505H23.3123Z" fill="white" />
              </svg>
            </div>
            <p className={`${styles.btnText}`}>Reportes</p>
          </div>

          {/* BOTON CONFIGURACION */}
          <div className={`${styles.btn} `}>
            <div className={`${styles.btnIcon}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                <path d="M23.9335 8.61889C24.0926 9.05157 23.9583 9.53398 23.6152 9.84232L22.0784 11.2398C21.6955 11.5929 21.5115 12.1102 21.5363 12.6274C21.5413 12.7716 21.5463 12.9158 21.5463 13.065C21.5463 13.2142 21.5413 13.3585 21.5363 13.5027C21.5115 14.0249 21.6905 14.5421 22.0784 14.8902L23.6152 16.2877C23.9583 16.5961 24.0926 17.0785 23.9335 17.5112C23.7146 18.103 23.4511 18.67 23.1477 19.217L22.9139 19.6199C22.5857 20.1669 22.2177 20.6841 21.8148 21.1715C21.5214 21.5296 21.034 21.649 20.5964 21.5097L18.622 20.8831C18.1246 20.7239 17.5875 20.8284 17.1449 21.1119C16.9012 21.266 16.6525 21.4152 16.3939 21.5445C15.9314 21.7833 15.5733 22.201 15.4589 22.7083L15.0163 24.7324C14.9169 25.185 14.5687 25.5431 14.1112 25.6177C13.4249 25.7321 12.7186 25.7917 11.9975 25.7917C11.2764 25.7917 10.5702 25.7321 9.88385 25.6177C9.42631 25.5431 9.07818 25.185 8.97871 24.7324L8.53609 22.7083C8.42667 22.201 8.06362 21.7833 7.6011 21.5445C7.34249 21.4103 7.09382 21.266 6.85013 21.1119C6.41248 20.8284 5.87039 20.7239 5.37306 20.8831L3.40363 21.5147C2.96597 21.6539 2.47859 21.5296 2.18516 21.1765C1.78232 20.6891 1.4143 20.1719 1.08606 19.6248L0.852315 19.222C0.548942 18.6749 0.285357 18.108 0.0665309 17.5161C-0.0926152 17.0835 0.0416643 16.6011 0.384823 16.2927L1.92158 14.8952C2.30452 14.5421 2.48854 14.0249 2.46367 13.5077C2.4587 13.3634 2.45372 13.2192 2.45372 13.07C2.45372 12.9208 2.4587 12.7766 2.46367 12.6324C2.48854 12.1102 2.3095 11.5929 1.92158 11.2448L0.384823 9.84232C0.0416643 9.53398 -0.0926152 9.05157 0.0665309 8.61889C0.285357 8.02706 0.548942 7.4601 0.852315 6.91304L1.08606 6.5102C1.4143 5.96314 1.78232 5.44591 2.18516 4.95853C2.47859 4.60045 2.96597 4.48109 3.40363 4.62034L5.37803 5.24698C5.87536 5.40613 6.41248 5.30169 6.85511 5.01821C7.0988 4.86403 7.34746 4.71483 7.60608 4.58553C8.06859 4.34681 8.42667 3.92905 8.54106 3.42177L8.98368 1.39763C9.08315 0.945061 9.43128 0.586983 9.88883 0.512383C10.5751 0.393023 11.2814 0.333344 12.0025 0.333344C12.7236 0.333344 13.4298 0.393023 14.1161 0.50741C14.5737 0.582009 14.9218 0.940088 15.0213 1.39266L15.4639 3.4168C15.5733 3.92408 15.9314 4.34184 16.3989 4.58055C16.6575 4.71483 16.9062 4.85906 17.1499 5.01323C17.5875 5.29671 18.1296 5.39618 18.6269 5.24201L20.6013 4.61537C21.039 4.47611 21.5264 4.60045 21.8198 4.95355C22.2227 5.44094 22.5907 5.95816 22.9189 6.50523L23.1527 6.90807C23.456 7.45513 23.7196 8.02209 23.9384 8.61391L23.9335 8.61889ZM12.0025 17.0437C13.0577 17.0437 14.0697 16.6245 14.8158 15.8784C15.562 15.1322 15.9811 14.1202 15.9811 13.065C15.9811 12.0098 15.562 10.9978 14.8158 10.2517C14.0697 9.50556 13.0577 9.08638 12.0025 9.08638C10.9473 9.08638 9.9353 9.50556 9.18915 10.2517C8.44301 10.9978 8.02384 12.0098 8.02384 13.065C8.02384 14.1202 8.44301 15.1322 9.18915 15.8784C9.9353 16.6245 10.9473 17.0437 12.0025 17.0437Z" fill="white" />
              </svg>
            </div>
            <p className={`${styles.btnText}`}>Configuración</p>
          </div>

        </div>
        <BtnSalir></BtnSalir>
      </div>

  
    </>
  );
}

export default Sidebar;