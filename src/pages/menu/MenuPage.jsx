import React from 'react';
import styles from './MenuPage.module.css'
import logo from '../../assets/images/logo.png'
import MenuTab from '../../components/menu-tab/MenuTab';

export default function MenuPage() {
    return (
        <div className={styles.menu}>
            <img src={logo} alt="" className={styles.logo}/>
            <MenuTab/>
        </div>
    );
}