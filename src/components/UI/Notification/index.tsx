import classes from "./styles.module.css";

type NotificationProps = {
  notification: {
    status: string;
    title: string;
    message: string;
  };
};

export const Notification = ({ notification }: NotificationProps) => {
  let specialClasses = "";

  if (notification.status === "error") {
    specialClasses = classes.error;
  }
  if (notification.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{notification.title}</h2>
      <p>{notification.message}</p>
    </section>
  );
};
