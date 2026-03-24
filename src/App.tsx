import './App.css';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './pages/About';
import TestPage from './pages/Test';

export const routes = [
  { path: '/', element: <AboutPage /> },
  { path: '/test', element: <TestPage /> }
];

const router = createMemoryRouter(routes);

const App = () => {
  return (
    <div className='mf-remote-shell'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
