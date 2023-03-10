import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import { Event } from "@/@types/api";

type HomePageProps = {
  events: Event[];
};

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
