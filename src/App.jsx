import userData from "./data/userData.json";
import Profile from "./components/Profile";
import friendsData from "./data/friendsData.json";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";
import transactions from "./data/transactionsData.json";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Container>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />

        <FriendList friendsData={friendsData} />

        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
}

export default App;
