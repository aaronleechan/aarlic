import React,{useState} from 'react';
import Link from 'next/link';
import styles from './menu.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons'

interface Props{
    label: string;
    icon: string;
    path: string;
    menus:{
        label: string,
        icon: string,
        active: boolean,
        path: string
    }[]
}

const PopMenu: React.FC<Props> = ({menus,label,icon,path}) =>{
    const [hovered,setHovered]= useState(false)
    let menuRef = React.createRef<HTMLInputElement>();
    let iconType: any = icons;

    return(
        <li className={styles.list_item}
            onMouseOver={()=>setHovered(true)}
            onMouseOut={()=>setHovered(false)}
        >
        <div className={styles.menu_container} ref={menuRef}>
            <Link href={path}>
                <a className={styles.menu_heading}>
                    <span><FontAwesomeIcon icon={iconType[icon]}/></span>
                    {label}
                </a>
            </Link>
            {
                menus.length > 0 && 
                <div className={`nav_popover ${hovered ? "nav_open" : "nav_close"} `}>
                    <ul className={styles.nav_pop_ul}>
                        {
                            menus.map((v,i)=>{
                                return (
                                    <li className={styles.nav_pop_li} key={i}>
                                        {
                                            v.active && 
                                            <Link href={v.path}>
                                                <a className={styles.menu_heading}>
                                                    <span><FontAwesomeIcon icon={iconType[v.icon]}/></span>
                                                    {v.label}
                                                </a>
                                            </Link>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </div>
        </li>
    )
}

export default PopMenu;