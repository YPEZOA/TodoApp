import { Route, Routes } from 'react-router-dom'
import { Login } from '../components/Login'
import { Main } from '../components/Main'
import { Navbar } from '../components/Navbar'

export const AppRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  )
}
