import React from 'react'
import FriendlistItem from './FriendlistItem'
import css from "./Friendlist.module.css"

const Friendlist = ({friends}) => {
  return (
      <ul className={css.friendlist}>
        {friends.map((friend) => (
        <li key={friend.id}>
          <FriendlistItem {...friend} />
        </li>
      ))}
   </ul>
  )
}

export default Friendlist