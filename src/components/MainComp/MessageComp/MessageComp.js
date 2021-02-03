import classes from './MessageComp.module.css';

const messageComp = (props) => (
  <div
    className={classes.MessageComp + ' flex_flex-start_center'}
  >
    <section
      className={classes.Message}
    >
      <header
        className={classes.Message__NickName + ' Fonts_13_14'}
      >
        {props.nickName}
      </header>
      <main
        className={classes.Message__Text + ' Fonts_13_15'}
      >
        {props.message}
      </main>
    </section>
    <section
      className={classes.Date + ' Fonts_12_12'}
    >
      {props.date}
    </section>
  </div>
)

export default messageComp;