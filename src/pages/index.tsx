import { getFeaturedEvents } from "../helpers/events";
import EventList from "../components/events/event-list";
import EventsSearch from "@/components/events/events-seach";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </>
  );
};

export default HomePage;
