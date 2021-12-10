import {useRouter} from 'next/router';
import { getFilteredEvents } from '../../data/dummy-data';
import EventList from '../../components/events/event-list';
import Layout from '../../components/layout/layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

function FilterEventPage(){

    const router = useRouter();
    const filterData = router.query.slug;

    if(!filterData){return <p className="center">Loading...</p>}

    const filterYear = parseInt(filterData[0])
    const filterMonth = parseInt(filterData[1])

    const numYear = +filterYear;
    const numMonth = +filterMonth;



    const filteredEvents = getFilteredEvents({year: numYear,month: numMonth})

    function InvalidFilter(){
        if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12){
            return <p className="error-icon"><FontAwesomeIcon icon={faExclamationCircle}/><span>Invalid Filter Please Adjust Your Values</span></p>
        }
    }

    function NoEventUi(){
        if(!filteredEvents || filteredEvents.length == 0){
            return <p className="error-icon"><FontAwesomeIcon icon={faExclamationCircle}/><span>No Events Found For The Chosen Filter!</span></p>
        }  
    }

    return(
        <Layout>
            {NoEventUi()}
            {InvalidFilter()}
            <EventList events={filteredEvents}/>
        </Layout>
    )
}

export default FilterEventPage;