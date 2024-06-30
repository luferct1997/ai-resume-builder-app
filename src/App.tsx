import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { useUser } from '@clerk/clerk-react'

function App() {
  const { user, isLoaded, isSignedIn } = useUser()
  console.log(isSignedIn, isLoaded, user)
  if (!isSignedIn && isLoaded) {
    return <Navigate to="/auth/sign-in" />
  }
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
