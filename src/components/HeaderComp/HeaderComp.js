import classes from './HeaderComp.module.css';

import rightArrow from '../../assets/images/arrows/right.svg';
import resizeBut from '../../assets/images/buttons/resize.svg';
import closeBut from '../../assets/images/buttons/close.svg';

const headerComp = (props) => (
  <header
    className={classes.Header + ' width_100 Fonts_13_15 flex_flex-start_center'}
  >
    <section
      className={classes.Header__Item + ' ' + classes.Menu + ' height_100 flex_flex-start_center'}
    >
      <p
        className={classes.Menu__Item + ' height_100 flex_center ' + (props.all ? classes.Menu__Item_Active : '')}
        onClick={() => props.changeActive('all')}
      >
        общий
      </p>
      <p
        className={classes.Menu__Item + ' height_100 flex_center ' + (props.clan ? classes.Menu__Item_Active : '')}
        onClick={() => props.changeActive('clan')}
      >
        клан
      </p>
      <p
        className={classes.Menu__Item + ' height_100 flex_center ' + (props.friends ? classes.Menu__Item_Active : '')}
        onClick={() => props.changeActive('friends')}
      >
        друзья
      </p>
      <p
        className={classes.Menu__Item + ' ' + classes.Menu__Item_Last + ' height_100 flex_center ' + (props.news ? classes.Menu__Item_Last_Active : '')}
        onClick={() => props.changeActive('news')}
      >
        новости
      </p>
    </section>
    <section
     className={classes.RightArrow}
    >
      <img
        className={classes.RightArrow__Img}
        src={rightArrow}
      />
    </section>
    <section
      className={classes.Header__Item + ' ' + classes.Lang}
    >
      <select
        className={classes.Lang__Select}
      >
        <option 
          value="RU"
          className={classes.Lang__Option}
        >
          RU
        </option>
        <option 
          value="EN"
          className={classes.Lang__Option}
        >
          EN
        </option>
        <option 
          value="ZNO"
          className={classes.Lang__Option}
        >
          ZHO
        </option>
      </select>
    </section>
    <section
      className={classes.Header__Item + ' ' + classes.ResizeButt + ' flex_center'}
    >
      <img
        className={classes.ResizeButt__Img}
        src={resizeBut}
      />
    </section>
    <section
      className={classes.Header__Item + ' ' + classes.CloseButt + ' flex_center'}
    >
      <img
        className={classes.CloseButt__Img}
        src={closeBut}
      />
    </section>
  </header>
)

export default headerComp;