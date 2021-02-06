import React from 'react';

import classes from './HeaderComp.module.css';

import rightArrow from '../../assets/images/arrows/right.svg';
import resizeBut from '../../assets/images/buttons/resize.svg';
import closeBut from '../../assets/images/buttons/close.svg';

const headerComp = React.forwardRef((props, ref) => (
  <header
    className={classes.Header + ' width_100 Fonts_13_15 flex_between_center'}
    ref={ref}
  >
    <section
      className={classes.Header__Item + ' ' + classes.Menu + ' height_100 flex_flex-start_center ' + (props.isOpenedMenu ? classes.Menu_Full : null)}
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
        className={
          classes.Menu__Item + ' ' + 
          classes.Menu__Item_Last + ' height_100 flex_center ' + 
          (props.news ? classes.Menu__Item_Last_Active : '') + ' ' +
          (
            props.isOpenedMenu ? 
              (
                props.news ?
                  classes.Menu__Item_Last_Full_Active 
                :
                  classes.Menu__Item_Last_Full
              )
            : ''
          )
        }
        onClick={() => props.changeActive('news')}
      >
        новости
      </p>
    </section>
    <img
      className={classes.RightArrow__Img + 
        (props.isOpenedMenu || props.isHeaderBig ? ' disp_none' : '') 
      }
      src={rightArrow}
      alt='scroll'
      onClick={props.showFullMenu}
    />
    <section
      className={classes.Options + ' flex_flex-end_center'}
    >
      <select
        className={classes.Lang__Select}
        onChange={(e) => props.changeLang(e)}
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
      <img
        className={classes.ResizeButt__Img}
        src={resizeBut}
        alt='resize'
        onMouseDown={(e) => props.resizeChat(e)}
      />
      <img
        className={classes.CloseButt__Img}
        src={closeBut}
        alt='close'
        onClick={props.closeChat}
      />
    </section>
  </header>
))

export default headerComp;