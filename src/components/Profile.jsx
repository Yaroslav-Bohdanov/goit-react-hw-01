import styles from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.box}>
      <div className={styles.tag}>
        <img className={styles.profImg} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={styles.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={styles.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
