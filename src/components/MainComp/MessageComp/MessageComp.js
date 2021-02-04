import classes from './MessageComp.module.css';

const messageComp = (props) => (
  <div
    className={classes.MessageComp + ' flex_flex-start_center'}
  >
    <section
      className={classes.Message}
    >
      <header
        className={classes.Message__NickName + ' Fonts_13_14 flex_flex-start_center'}
      >
        {
          props.icon ? 
            <img
              src={process.env.PUBLIC_URL + '/images/icons/' + props.icon + '.svg'}
              className={classes.Message__Icon}
              alt='icon_image'
            />
          : 
            null
        }
        <p
          className={classes.Message__Title}
        >
          {props.nickName}
        </p>
        {
          props.badge ? 
            <img
              src={process.env.PUBLIC_URL + '/images/badges/' + props.badge + '.svg'}
              className={classes.Message__Badge}
              alt='badge_image'
            />
          : 
            null
        }
        <p
          className={classes.Message__Lvl}
        >
          {Math.floor(Math.random() * 10 + 1)}
        </p>
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