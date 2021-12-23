import Link from 'next/link';
import React from 'react';
import styles from './event-main-header.module.css';
import MainLayout from '../main-header/main-layout';

const EventHeader: React.FC = () =>{
    return(
        <MainLayout>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link href='/'>Home</Link>
                </div>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            <Link href="/events">All Events</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </MainLayout>
    )
}

export default EventHeader

