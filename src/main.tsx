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
import EditResume from './pages/dashboard/resume/[resumeId]/edit'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/dashboard/resume/:resumeId/edit',
        element: <EditResume />
      }
    ]
  },
  {
    path: '/',
    element: <Home />
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
