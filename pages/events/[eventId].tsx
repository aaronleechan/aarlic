import { useRouter } from 'next/router';
import React, { Fragment } from 'react'
import { getEventById } from '../../data/dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import Layout from '../../components/layout/layout';


const EventDetailPage =()=>{
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if(!event){
      return <p>No Event Found</p>
    }

    return(
      <Layout>
        <Fragment>
          <EventSummary title={event.title}/>
          <EventLogistics 
            date={event.date} 
            address={event.location} 
            image={event.image}
            imageAlt={event.title}
          />
          <EventContent>
            <p>{event.description}</p>
          </EventContent>
        </Fragment>
      </Layout>
    )
  }

export default EventDetailPage;