import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Notification from './pages/Notification.jsx';
import Message from './pages/Message.jsx';
import Profile from './pages/Profile.jsx';
import Error from './pages/Error.jsx';

import './index.css';
import Bookmark from './pages/Bookamark.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'notifications',
        element: <Notification />,
      },
      {
        path: 'messages',
        element: <Message />,
      },
      {
        path: 'bookmarks',
        element: <Bookmark />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
