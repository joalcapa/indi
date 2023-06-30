import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '../scenes/dashboard';
import Podcast from '../scenes/podcast';
import Episode from '../scenes/episode';

export const router = createBrowserRouter([
    {
      path: "/podcast/:podcastId/episode/:episodeId",
      element: <Episode />,
    },
    {
      path: "/podcast/:podcastId",
      element: <Podcast />,
    },
    {
      path: "/",
      element: <Dashboard />,
    },
]);