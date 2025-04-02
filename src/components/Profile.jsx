import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.box}>
      <div className={s.tag}>
        <img className={s.profImg} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={s.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={s.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
