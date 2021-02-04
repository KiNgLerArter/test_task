import React from 'react';

import classes from './MainComp.module.css';

import MessageComp from './MessageComp/MessageComp';
import MyMessageComp from './MyMessageComp/MyMessageComp';

const mainComp = React.forwardRef((props, ref) => {
  const { refScrollBottom, refScrollTop } = ref;

  // const messagesInMas = [...props.messages];
  // const messagesOutMas = [];
  // messagesInMas.forEach((item) => {
  //   messagesOutMas.push(
  //     <MessageComp
  //       key={item.id}
  //       nickName={item.from}
  //       message={item.text}
  //       date={item.createdAt}
  //     />
  //   )
  // })

  const historyInMas = [...props.history];
  

  historyInMas.sort((a, b) => a.createdAtReal > b.createdAtReal ? 1 : -1);

  const historyOutMas = [];
  historyInMas.forEach((item, index, arr) => {
    if (item.myMessage) {
      historyOutMas.push(
        <MyMessageComp
          key={item.id}
          message={item.text}
          date={item.createdAt}
        />
      )
    } else {
      historyOutMas.push(
        <MessageComp
          key={item.id}
          nickName={item.from}
          message={item.text}
          date={item.createdAt}
          icon={item.icon}
          badge={item.badge}         
        />
      )
    }
  })

  return (
    props.all ?
      <main
        className={classes.MainComp + ' width_100 flex_column_flex-start_flex-start'}
        ref={refScrollTop}
      >
        {historyOutMas}
        
        {/* {messagesOutMas} */}
        <div
          ref={refScrollBottom}
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