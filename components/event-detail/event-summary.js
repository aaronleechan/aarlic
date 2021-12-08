import classes from './event-summary.module.css';

function EventSummary(props) {
  const { title } = props;

  console.log({" EventSummary ": title})

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;