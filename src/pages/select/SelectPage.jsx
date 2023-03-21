import React from 'react';
import styles from './SelectPage.module.css'
import logo from '../../assets/images/logo.png'
import SelectImage from '../../components/select/SelectImage';
import ButtonBox from '../../components/select/ButtonBox';

export default function SelectPage() {
    return (
        <div className={styles.select}>
            <img src={logo} alt="" className={styles.logo}/>
            <SelectImage/>
            <ButtonBox/>
        </div>
    );
}