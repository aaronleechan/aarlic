import React from 'react'
import {navBarItem} from '../../../data/dummy-nav-data'
import styles from './main-layout.module.css';
import PopMenu from '../menus/pop-menu';

interface Props{
    children?: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({children}) =>{
    return(
        <div className={styles.navContainer}>
            <div className={styles.masterhead}>
                {children}
            </div>
            <div className={styles.navigation}>
                <ul className={styles.navigation_list}>
                    {navBarItem.categories.map((category,i)=>{
                        const{label,menus,path} = category
                        return(
                            <PopMenu 
                                label={category.label}
                                menus={menus || []}
                                icon={category.icon}
                                key={i}
                                path={path || ''}
                            />
                        )

                    })}
                </ul>
            </div>
        </div>
    )
}

export default MainLayout