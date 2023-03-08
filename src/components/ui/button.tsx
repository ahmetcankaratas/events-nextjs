import Link from "next/link";
import classes from "./button.module.scss";

type ButtonProps = {
  onClick?: () => void;
  link?: string;
  children: React.ReactNode;
};
const Button: React.FC<ButtonProps> = (props) => {
  if (props.link) {
    return (
      <Link className={classes.btn} href={props.link}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
