import classes from './FooterComp.module.css';

import emojiImg from '../../assets/images/emoji.svg';

const footerComp = (props) => (
  <footer
    className={classes.Footer + ' width_100 flex_between_center'}
  >
    <input 
      type='text'
      className={classes.Input + ' Fonts_13_16'}
      placeholder={'Напишите сообщение...'}
      maxLength={200}
    />
    <img 
      src={emojiImg}
      className={classes.Emoji}
    />
  </footer>
);

export default footerComp;