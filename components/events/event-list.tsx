
import {FeatureEventsType} from '../commons/interfacesType'
import EventItem from './event-item'
import styles from './event-item.module.css'

interface Props{
    events: FeatureEventsType[]
}

const EventList: React.FC<Props>=({events})=>{
    return(
        <ul className={styles.list}>
            {events.map(e=><EventItem key={e.id} event={e}/>)}
        </ul>
    )
}

export default EventList