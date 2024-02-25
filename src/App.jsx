import './App.css'
import Profile from "./components/Profile/Profile"
import Friendlist from "./components/Friends/Friendlist"
import History from "./components/History/History"
import userData from "./components/Profile/userData.json";
import Friends from "./components/Friends/Friends.json"
import Transactions from "./components/History/Transactions.json"

function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        img={userData.img}
        stats={userData.stats}/>
      <Friendlist friends={Friends}/>
      <History items={Transactions}/>
    </div>
  )
}

export default App
