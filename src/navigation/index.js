import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '../scenes/dashboard';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
]);