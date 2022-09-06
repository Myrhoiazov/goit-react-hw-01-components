import user from '../data/profile.json';
import Profile from './Profile.jsx';

import statistics from '../data/statistics.json';
import Statistics from './Statistics.jsx';

import friendList from '../data/friendList.json';
import FriendList from './FriendList.jsx';

import transactions from '../data/transactionHistory.json';
import TransactionHistory from './TransactionHistory.jsx';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={statistics} />
      </div>
      <div>
        <FriendList friends={friendList} />{' '}
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
