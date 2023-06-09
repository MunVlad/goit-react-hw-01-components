import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';


 export function FriendListItem({avatar, name, isOnline}) {
  return (
    <li className={css.item}>
          <span className={isOnline ? css.active : css.status}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>)
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};