import classes from './MyMessageComp.module.css';

const myMessageComp = (props) => (
  <div
    className={classes.Wrapper + ' width_100 flex_flex-end_center'}
  >
    <div
      className={classes.MyMessageComp + ' flex_flex-end_center'}
    >
      <section
        className={classes.Date + ' Fonts_12_12'}
      >
        {props.date}
      </section>
      <section
        className={classes.Message}
      >
        <div
          className={classes.Message__Text + ' Fonts_13_15'}
        >
          {props.message}
        </div>
      </section>
    </div>
  </div>
)

export default myMessageComp;