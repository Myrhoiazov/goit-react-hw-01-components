import user from '../data/profile.json';
import Profile from './Profile/Profile.jsx';

import statistics from '../data/statistics.json';
import Statistics from './Statistics/Statistics.jsx';

import friendList from '../data/friendList.json';
import FriendList from './FriendList/FriendList.jsx';

import transactions from '../data/transactionHistory.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';

import Container from './Container/Container.jsx';

export const App = () => {
  return (
    <>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={statistics} />
      </Container>
      <Container>
        <FriendList friends={friendList} />{' '}
      </Container>
      <Container>
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};
