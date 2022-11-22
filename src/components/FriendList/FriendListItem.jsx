import PropTypes from 'prop-types';
import style from './FriendList.module.css';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={style.item}>
      <span className={isOnline ? style.online : style.offline}></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.protoTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]),
};
