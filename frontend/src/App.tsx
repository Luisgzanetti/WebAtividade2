import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LoginPage from './pages/LoginPage/LoginPage'
import Home from './pages/Home/Home'
import AdminPage from './pages/AdminPage/AdminPage'
import { GlobalProvider } from './context/GlobalContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/Home',
    element: <Home />
  },
  {
    path: '/Admin',
    element: <AdminPage />
  }
])

export default function App() {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  )
}
