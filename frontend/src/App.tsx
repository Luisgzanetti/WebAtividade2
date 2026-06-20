import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LoginPage from './pages/LoginPage/LoginPage'
import Home from './pages/Home/Home'
import { GlobalProvider } from './context/GlobalContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/Home',
    element: <Home />
  }
])

export default function App() {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  )
}
