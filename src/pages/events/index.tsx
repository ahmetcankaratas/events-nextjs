import { useRouter } from "next/router";
import { Event } from "@/@types/api";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "@/components/events/events-seach";

type AllEventsPageProps = {
  events: Event[];
};

const AllEventsPage: React.FC<AllEventsPageProps> = (props) => {
  const router = useRouter();
  const { events } = props;

  const findEventsHandler = (year: number, month: string) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
