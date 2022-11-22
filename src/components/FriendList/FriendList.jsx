import PropTypes from 'prop-types';
import s from './FriendList.module.css';
export const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map(({ id, avatar, name, isOnline }) =>
                <li key={id}>
                    <span className={isOnline ? s.online : s.offline}></span>
                    <img className="avatar" src={avatar} alt="User avatar" width='48' />
                    <p className="name">{name}</p>
                </li>)}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
    }))
};