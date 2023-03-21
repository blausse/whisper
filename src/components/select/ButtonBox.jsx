import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonBox.module.css'

export default function ButtonBox() {
    return (
        <div className={styles.btnbox}>
            <Link to={'/menu/eat'}><button className={styles.eat}>먹고 가기</button></Link>
            <Link to={'/menu/take'}><button className={styles.take}>포장 하기</button></Link>
        </div>
    );
}

