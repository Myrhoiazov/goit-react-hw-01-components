import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline}) => {
    const className = isOnline ? "status active" : "status";

    return (
      <li className="item">
        <span className={className}>0</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;
