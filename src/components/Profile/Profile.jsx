import React from 'react'
import css from "./Profile.module.css"

const Profile = ({name, tag, location, img, stats}) => {
  return (
    <div className={css.profilediv}>
  <div className={css.profilecard}>
    <img className={css.img}
      src={img}
      alt="User avatar"
    />
    <p className={css.name}>{name}</p>
    <p className={css.paragraf}>@{tag}</p>
    <p className={css.paragraf}>{location}</p>
  </div>

  <ul className={css.ul}>
    <li className={css.li}>
      <span>Followers</span>
      <span className={css.span}>{stats.followers}</span>
    </li>
    <li className={css.li}>
      <span>Views</span>
      <span className={css.span}>{stats.views}</span>
    </li>
    <li className={css.li}>
      <span>Likes</span>
      <span className={css.span}>{stats.likes}</span>
    </li>
  </ul>
</div>

  )
}

export default Profile