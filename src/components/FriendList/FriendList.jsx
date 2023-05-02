import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';
import { FriendListItem } from '../FriendList/FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({avatar, name, isOnline, id}) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      )
      )}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
