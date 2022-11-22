import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import style from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
