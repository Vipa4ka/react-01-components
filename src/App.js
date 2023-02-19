import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";

import Statistics from "./components/Statistics/Statistics";
import data from "./components/Statistics/data.json";

const App = () => {
  return (
    <div>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        avatar={user.avatar}
      />
      <Statistics title="Upload stats" stats={data} />;
    </div>
  );
};

export default App;
