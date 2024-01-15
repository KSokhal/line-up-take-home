import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserData from './pages/UserData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Home</h2>,
  }, {
    path: "/user/:userId",
    element: <UserData />,
    // Could use a `loader` function load data before rendering but hard to get type safety so avoided due to time
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
