import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/helpers/events";

const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
