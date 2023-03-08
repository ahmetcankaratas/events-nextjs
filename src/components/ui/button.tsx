import Link from "next/link";
import classes from "./button.module.scss";

type ButtonProps = {
  link: string;
  children: React.ReactNode;
};
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Link className={classes.btn} href={props.link}>
      {props.children}
    </Link>
  );
};

export default Button;
