
import {FeatureEventsType} from '../commons/interfacesType'
import styles from './events-search.module.css'
import ButtonSubmit from '../ui/buttonSubmit';
import { MutableRefObject, useRef } from 'react';

interface Props{
    onSearch: (year: string | '', month: string | '') => void;
}

const MonthList = [
    {value: 1, label: "Jan"},
    {value: 2, label: "Feb"},
    {value: 3, label: "Mar"},
    {value: 4, label: "April"},
    {value: 5, label: "May"},
    {value: 6, label: "June"},
    {value: 7, label: "July"},
    {value: 8, label: "Aug"},
    {value: 9, label: "Sep"},
    {value: 10, label: "Oct"},
    {value: 11, label: "Nov"},
    {value: 12, label: "Dec"},
]

const EventsSearch: React.FC<Props>=({onSearch})=>{
    const yearInputRef = useRef() as MutableRefObject<HTMLSelectElement>;
    const monthInputRef = useRef() as MutableRefObject<HTMLSelectElement>;

    function submitHandler(e: any){
        e.preventDefault()
        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;
        onSearch(selectedYear,selectedMonth)
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
                    {
                        MonthList.map((v,i)=>{
                            const {value,label} = v
                            return(<option key={i} value={value}>{label}</option>)
                        })
                    }
                </select>
               </div>
           </div>
           <ButtonSubmit>Search</ButtonSubmit>
       </form>
    )
}

export default EventsSearch