import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '../scenes/dashboard';
import Podcast from '../scenes/podcast';

export const router = createBrowserRouter([
    {
      path: "/podcast/:podcastId",
      element: <Podcast />,
    },
    {
      path: "/",
      element: <Dashboard />,
    },
]);