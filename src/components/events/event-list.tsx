import { Event } from "@/@types/api";
import EventItem from "./event-item";
import classes from "./event-list.module.scss";

interface EventListProps {
  items: Event[];
}
const EventList: React.FC<EventListProps> = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;
