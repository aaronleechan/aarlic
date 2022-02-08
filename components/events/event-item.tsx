import React from 'react';
import Link from 'next/link';
import {FeatureEventsType} from '../commons/Utils/interfacesType'
import {readableDateFunction} from '../commons/Utils/functionUtils'
import styles from './event-item.module.css'
import ButtonLink from '../ui/buttonLink'
import {DateIcon,AddressIcon,ArrowRightIcon} from '../icons'

interface Props{
    event: FeatureEventsType
}

const EventItem: React.FC<Props>=({event})=>{

    const {id,date,image,location,title} = event;

    const humanReadableDate = readableDateFunction(date)

    const formattedAddress = location.replace(', ','\n')

    const exploreLink = `/events/${id}`


    return(
        <li className={styles.item}>
            <img src={'/' + image} alt={title}/>
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon/>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <ButtonLink link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={styles.icon}><ArrowRightIcon/></span>
                    </ButtonLink>
                </div>
            </div>
        </li>
    )
}

export default EventItem