import React from 'react'
import css from "./Friendlist.module.css"

const FriendlistItem = ({avatar, name, isOnline}) => {
  return (
  <div className={css.friendlistdiv}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.paragraf}>{name}</p>
  <p className={`${css.par} ${isOnline ? css.online : css.offline}`}>{isOnline ? 'Online' : 'Offline'}</p>
  </div>
  )
}

export default FriendlistItem