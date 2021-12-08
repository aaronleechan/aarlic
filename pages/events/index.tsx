import React from 'react'
import {getFeaturedEvents} from '../../data/dummy-data';
import {FeatureEventsType} from '../../components/commons/interfacesType';
import EventList from '../../components/events/event-list';
import Layout from '../../components/layout/layout';
import EventsSearch from '../../components/events/events-search';


const CreateEvent =()=>{
    const featureEvents: FeatureEventsType[] = getFeaturedEvents() || [];

    return(
      <Layout>
          <EventsSearch />
          <EventList events={featureEvents}/>
      </Layout>
    )
  }

export default CreateEvent;