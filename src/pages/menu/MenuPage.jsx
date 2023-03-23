import React from 'react';
import styles from './MenuPage.module.css'
import logo from '../../assets/images/logo.png'
import MenuTab from '../../components/menu-tab/MenuTab';
import MenuComp from '../../components/menu-box/MenuComp';
import OrderList from '../../components/order-list/OrderList';

export default function MenuPage() {
    return (
        <div className={styles.menu}>
            <img src={logo} alt="" className={styles.logo}/>
            <MenuTab/>
            <MenuComp/>
            <OrderList/>
        </div>
    );
}