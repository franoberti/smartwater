import React from 'react';
import styles from './btnSalir.module.css'

const BtnSalir = () => {
    return (
        <>
            <div className={`${styles.btnSalir}`}>
                <div className={`${styles.btnIcon}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M9.375 5.625C10.4121 5.625 11.25 4.78711 11.25 3.75C11.25 2.71289 10.4121 1.875 9.375 1.875H5.625C2.51953 1.875 0 4.39453 0 7.5V22.5C0 25.6055 2.51953 28.125 5.625 28.125H9.375C10.4121 28.125 11.25 27.2871 11.25 26.25C11.25 25.2129 10.4121 24.375 9.375 24.375H5.625C4.58789 24.375 3.75 23.5371 3.75 22.5V7.5C3.75 6.46289 4.58789 5.625 5.625 5.625H9.375ZM29.5605 16.0195C29.8418 15.7559 30 15.3867 30 15C30 14.6133 29.8418 14.2441 29.5605 13.9805L21.123 6.01172C20.7129 5.625 20.1152 5.51953 19.5996 5.74219C19.084 5.96484 18.75 6.47461 18.75 7.03125V11.25H11.25C10.2129 11.25 9.375 12.0879 9.375 13.125V16.875C9.375 17.9121 10.2129 18.75 11.25 18.75H18.75V22.9688C18.75 23.5312 19.084 24.0352 19.5996 24.2578C20.1152 24.4805 20.7129 24.375 21.123 23.9883L29.5605 16.0195Z" fill="#1B1B1B" />
                    </svg>

                </div>
                <p className={`${styles.btnText}`}>Salir</p>
            </div>

        </>
    );
};

export default BtnSalir;