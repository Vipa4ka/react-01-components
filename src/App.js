import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";

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
    </div>
  );
};

export default App;
