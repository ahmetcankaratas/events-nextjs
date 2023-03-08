import { Event } from "@/@types/api";
import EventItem from "./event-item";
const Eventlist: React.FC<{ items: Event[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default Eventlist;
