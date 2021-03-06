import React from 'react'
import {getAllEvents, getFeaturedEvents} from '../../data/dummy-data';
import {FeatureEventsType} from '../../components/commons/Utils/interfacesType';
import EventList from '../../components/events/event-list';
import Layout from '../../components/layout/events/event-layout';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';


const AllEvents =()=>{
    const router = useRouter();
    const featureEvents: FeatureEventsType[] = getFeaturedEvents() || [];
    
    function findEventHandler(year: string,month: string){
      const fullPath = `/events/${year}/${month}`
      router.push(fullPath)
    }

    return(
      <Layout>
          <EventsSearch onSearch={findEventHandler}/>
          <EventList events={featureEvents}/>
      </Layout>
    )
  }

export default AllEvents;