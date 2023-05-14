import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home.jsx';
import Bookmark from './pages/Bookamark.jsx';
import Notification from './pages/Notification.jsx';
import Message from './pages/Message.jsx';
import Profile from './pages/Profile.jsx';
import Error from './pages/Error.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" Component={Layout}>
        <Route index Component={Home} />
        <Route path="/bookmarks" Component={Bookmark} />
        <Route path="/notifications" Component={Notification} />
        <Route path="/messages" Component={Message} />
        <Route path="/profile" Component={Profile} />
        <Route path="*" Component={Error} />
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
