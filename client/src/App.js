import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NavBar from './components/NavBar'
import UserProfile from './components/UserProfile'
import UserReservations from './components/UserReservations'
import { AuthProvider } from './context/AuthContext'
import About from './pages/About'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import MyAccount from './pages/MyAccount'
import Register from './pages/Register'
import ProtectedRoute from './utils/ProtectedRoute'
import Reservations from './components/admin/Reservations'
import RedirectRoutes from './utils/RedirectRoutes'
import NoMatch from './pages/NoMatch'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <main className="flex flex-col">
          <Routes>
            <Route element={<RedirectRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/cars/:id" element={<CarDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<Register />} />
              <Route path="my-account" element={<MyAccount />}>
                <Route path="profile" element={<UserProfile />} />
                <Route path="reservations" element={<UserReservations />} />
              </Route>
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/admin/dashboard" element={<Dashboard />} exact />
              <Route
                path="/admin/reservations"
                element={<Reservations />}
                exact
              />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
