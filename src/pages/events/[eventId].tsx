import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import ErrorAlert from "@/components/layout/error-alert";
import {
  getAllEvents,
  getEventById,
  getFeaturedEvents,
} from "@/helpers/api-util";
import { Event } from "@/@types/api";
import { GetStaticPropsContext } from "next";

type EventDetailPageProps = {
  selectedEvent: Event;
};
const EventDetailPage: React.FC<EventDetailPageProps> = (props) => {
  const event = props.selectedEvent;

  if (!event) {
    return <div className="center">Loading..</div>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const eventId = context.params?.eventId as string;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventDetailPage;
