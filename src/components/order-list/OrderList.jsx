import React from 'react';
import styles from './OrderList.module.css'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export default function OrderList() {

    return (
        <div className={styles.orderlist}>
            <ReceiptLongIcon className={styles.icon}/>
        </div>
    );
}

