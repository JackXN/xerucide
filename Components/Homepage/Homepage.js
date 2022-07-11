import React from 'react';

import styles from '../../styles/Homepage.module.scss';


//Components
import PvpRp from '../Projects/PvpRp';


const Homepage = () => {
    return (
        <div className={styles.container}>
            <PvpRp/>
        </div>
    )
}

export default Homepage
