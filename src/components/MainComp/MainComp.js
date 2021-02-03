import React from 'react';

import classes from './MainComp.module.css';

import MessageComp from './MessageComp/MessageComp';
import MyMessageComp from './MyMessageComp/MyMessageComp';

const mainComp = React.forwardRef((props, ref) => (
  <main
    className={classes.MainComp + ' width_100 flex_column_flex-start_flex-start'}
  >
    <MessageComp
      nickName={'IDontKnow'}
      message={'Прикольно. все СОС потрачены, теперь игра закончена))) '}
      date={'14:29'}
    />
    <MessageComp
      nickName={'BivOld'}
      message={'Я думал, что они будут пополнятся разв н-ное время. А тут реально игра закончена'}
      date={'14:28'}
    />
    <MessageComp
      nickName={'Nigativ'}
      message={'wac можно только купить'}
      date={'14:31'}
    />
    <MessageComp
      nickName={'Skylifesky'}
      message={'Цена 1 wac =0,1$ и цена не изменится'}
      date={'14:31'}
    />
    <MyMessageComp
      message={'Сегодня идем на Германию'}
      date={'10:21'}
    />
    <div
      ref={ref}
    >

    </div>
  </main>
));

export default mainComp;