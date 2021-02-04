import React from 'react';

import classes from './MainComp.module.css';

import MessageComp from './MessageComp/MessageComp';
import MyMessageComp from './MyMessageComp/MyMessageComp';

const mainComp = React.forwardRef((props, ref) => {
  const messagesInMas = [...props.messages];
  const messagesOutMas = [];
  messagesInMas.forEach((item) => {
    messagesOutMas.push(
      <MessageComp
        key={item.id}
        nickName={item.nickName}
        message={item.message}
        date={item.date}
      />
    )
  })


  return (
    props.all ?
      <main
        className={classes.MainComp + ' width_100 flex_column_flex-start_flex-start'}
      >
        <MessageComp
          nickName={'IDontKnow'}
          message={'Прикольно. все СОС потрачены, теперь игра закончена))) '}
          date={'14:29'}
          icon={'sun'}
        />
        <MessageComp
          nickName={'BivOld'}
          message={'Я думал, что они будут пополнятся разв н-ное время. А тут реально игра закончена'}
          date={'14:28'}
          icon={'btc'}
        />
        <MessageComp
          nickName={'Nigativ'}
          message={'wac можно только купить'}
          date={'14:31'}
          icon={'sun'}
          badge={'moderator'}
        />
        <MessageComp
          nickName={'Skylifesky'}
          message={'Цена 1 wac =0,1$ и цена не изменится'}
          date={'14:31'}
          icon={'btc'}
          badge={'admin'}
        />
        <MyMessageComp
          message={'Сегодня идем на Германию'}
          date={'10:21'}
        />
        {messagesOutMas}
        <div
          ref={ref}
        >

        </div>
      </main>
    :
      <main
        className={classes.MainComp + ' width_100 flex_column_flex-start_flex-start'}
      ></main>
  )
});

export default mainComp;