
import {FeatureEventsType} from '../commons/interfacesType'
import styles from './events-search.module.css'
import ButtonSubmit from '../ui/buttonSubmit';
import { MutableRefObject, useRef } from 'react';

interface Props{
    events: FeatureEventsType[]
}

const EventsSearch: React.FC=()=>{
    const yearInputRef = useRef() as MutableRefObject<HTMLSelectElement>;
    const monthInputRef = useRef() as MutableRefObject<HTMLSelectElement>;

    function submitHandler(e: any){
        e.preventDefault()
        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;
        console.log({" selectedYear ": selectedYear},{" selectedMonth ": selectedMonth})
    }

    return(
       <form className={styles.form} onSubmit={submitHandler}>
           <div className={styles.controls}>
               <div className={styles.control}>
                   <label htmlFor='year'>Year</label>
                   <select id='year' ref={yearInputRef}>
                       <option value="2021">2021</option>
                       <option value="2022">2022</option>
                   </select>
               </div>
           </div>
           <div className={styles.controls}>
               <div className={styles.control}>
                <label htmlFor="month">Month</label>
                <select id="month" ref={monthInputRef}>
                    <option value="1">January</option>
                </select>
               </div>
           </div>
           <ButtonSubmit>Find Events</ButtonSubmit>
       </form>
    )
}

export default EventsSearch