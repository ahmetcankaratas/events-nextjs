import { getFeaturedEvents } from "../helpers/events";
import EventList from "../components/events/event-list";
import EventsSearch from "@/components/events/events-seach";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventsSearch />
      <EventList items={featuredEvents} />
    </>
  );
};

export default HomePage;
