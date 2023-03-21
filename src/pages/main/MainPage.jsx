import React from 'react';
import styles from './MainPage.module.css'
import logo from '../../assets/images/strawberry-event2.jpeg'
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        
            <div className={styles.main}>
                <Link to="/select">
                <img src={logo} alt="strawberry-event" className={styles.image}/>
                <div className={styles.finger}>
                <FingerprintIcon className={styles.fingericon}/>
                <p className={styles.fingerfont}>CLICK</p>
                </div>
                </Link>
            </div>
    );
}

