import s from './FriendList.module.css';
export const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map(({ id, avatar, name, isOnline }) =>
                <li key={id}>
                    <span className={isOnline ? s.online : s.offline}></span>
                    <img className="avatar" src={avatar} alt="User avatar" width='50' />
                    <p className="name">{name}</p>
                </li>)}
        </ul>
    );
}