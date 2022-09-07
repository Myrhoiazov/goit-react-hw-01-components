import PropTypes from 'prop-types';
import style from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline}) => {
    const className = isOnline ? "active" : "offline";

    return (
      <li className="item">
        <span className={style[className]}></span>
        <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={style.name}>{name}</p>
      </li>
    );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;
