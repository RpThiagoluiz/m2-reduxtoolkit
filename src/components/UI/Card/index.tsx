import { ReactNode } from "react";
import classes from "./styles.module.css";

type cardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: cardProps) => {
  return (
    <section className={`${classes.card} ${className && className}`}>
      {children}
    </section>
  );
};
