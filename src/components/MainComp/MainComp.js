import React, {Fragment} from 'react';

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

  let lastMyMessageCounter = null;
  const historyOutMas = [];
  historyInMas.forEach((item, index, arr) => {
    if (index === (item.from === 'IDontKnow' ? props.limit - 4 : props.limit + 4) && props.coeff > 0) {
      historyOutMas.push(
        <div
          key={'lastHistoryElem'}
          id={'lastHistoryElem'}
        >

        </div>
      )
    }
    if (item.myMessage || item.from === props.nickName) {
      lastMyMessageCounter = index;
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
          lvl={item.lvl}      
        />
      )
    }
  })

  if (lastMyMessageCounter) {
    historyOutMas.splice(lastMyMessageCounter, 0 , (
      <div
        key={'lastMyMessage'}
        id={'lastMyMessage'}
      >
  
      </div>
    ))
  }

  return (
    !props.opened ?
      <Fragment/>
    :
      props.pages.all === true && props.lang === 'RU' ?
        <main
          className={classes.MainComp + ' width_100 height_80 flex_column_flex-start_flex-start'}
          ref={refScrollTop}
          id='mainComp'
        >
          
          {historyOutMas}

          <div
            ref={refScrollBottom}
          >

          </div>
        </main>
      :
        <main
          className={classes.MainComp + ' width_100 height_80 flex_column_flex-start_flex-start'}
          id='mainComp'
        ></main>
  )
});

export default mainComp;