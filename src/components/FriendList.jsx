import FriendListItem from "./FriendListItem";
import styles from "./FriendsList.module.css";
const FriendList = ({ friendsData }) => {
  return (
    <ul className={styles.friendsList}>
      {friendsData.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
