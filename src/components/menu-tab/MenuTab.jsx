import React, { useState } from 'react';
import styles from './MenuTab.module.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function MenuTab() {
    const [menuIndex,setMenuIndex] = useState(0);
    const menu = [
        {name:'COFFEE(ICE)'},
        {name:'COFFEE(HOT)'},
        {name:'BEVERAGE(ICE)'},
        {name:'BEVERAGE(HOT)'},
        {name:'DESERT'},
    ]
    const handleClick=(e,idx)=>{
        setMenuIndex(idx)
    }
    const handleMenuMinus=()=>{
        setMenuIndex((prev)=>{
            if(prev === 0) return prev
            return prev -= 1})
    }
    const handleMenuPlus=()=>{
        setMenuIndex((prev)=>{
            if(prev === 4) return prev    
            return prev += 1
        })
    }
    return (
        <div className={styles.tab}>
            <div className={styles.arrowbox}>
                <KeyboardArrowLeftIcon className={styles.back} onClick={handleMenuMinus}/>
                <KeyboardArrowRightIcon className={styles.forward} onClick={handleMenuPlus}/>
            </div>
            <ul className={styles.tablist}>
                {menu.map((elem,idx)=>(
                    <li onClick={e=>handleClick(e,idx)} className={menuIndex === idx && 'active'}>{elem.name}</li>
                ))}
            </ul>
        </div>
    );
}

