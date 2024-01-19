import React from 'react';
import styles from './logo.module.css'

const Logo = () => {
    return (
        <>
            <div className={`${styles.logo}`}>
                <p className={`${styles.smart}`}>Smart</p>
                <p className={`${styles.water}`}>water</p>
            </div>

        </>

    );
};

export default Logo;