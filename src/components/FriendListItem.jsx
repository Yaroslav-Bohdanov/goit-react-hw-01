import styles from "./FriendsList.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.listItem}>
      <img src={avatar} alt="Avatar" width="58" />
      <p>{name}</p>
      {isOnline ? (
        <p className={styles.online}>Online</p>
      ) : (
        <p className={styles.offline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
