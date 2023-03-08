import { Event } from "@/@types/api";
import EventItem from "./event-item";
import classes from "./event-list.module.scss";
const EventList: React.FC<{ items: Event[] }> = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;
