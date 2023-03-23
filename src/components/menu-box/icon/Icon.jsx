import React from 'react';
import styles from './Icon.module.css'

export default function Icon(props) {
    const {temp} = props
    return (
        <span className={styles.icon} style={temp === "ICE"?{background:"blue"}:{background:"red"}}>
            {temp}
        </span>
    );
}

