import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from '@/pages/auth/sign-in'
import Home from '@/pages/home'
import Dashboard from '@/pages/dashboard'
import { ClerkProvider } from '@clerk/clerk-react'
import { CLERK_KEY_API } from './constants/env.constants'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />,
  }
])
if (!CLERK_KEY_API) {
  throw new Error('CLERK_KEY_API is not defined')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={CLERK_KEY_API}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)
