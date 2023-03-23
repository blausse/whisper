import React from 'react';
import Icon from './icon/Icon';
import styles from './MenuComp.module.css'
import iceCoffee from '../../data/iceCoffee.json'
export default function MenuComp() {

    return (
        <div className={styles.menu}>
            {iceCoffee.map((elem,index) => (
                <div className={styles.menulist} key={index}>
                    <div className={styles.titlebox}>
                    <p className={styles.title}><Icon temp='ICE'/>{elem.name}</p>
                    <p className={styles.sub}>{elem.sub}</p>
                    </div>
                    <img src={require(`../../assets/images/coffee/${elem.img}.png`)} alt="" />
                </div>
            ))}
        </div>
    );
}

