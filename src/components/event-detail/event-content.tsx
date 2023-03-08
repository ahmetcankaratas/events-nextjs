import classes from "./event-content.module.scss";

type EventContentProps = {
  children: React.ReactNode;
};
const EventContent: React.FC<EventContentProps> = (props) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
