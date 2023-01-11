import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/website/Home"
import AdminDashboard from "./pages/admin/Dashboard"
import SellerDashboard from "./pages/seller/Dashboard"
import AdminLayout from "./layouts/admin/AdminLayout"
import SellerLayout from "./layouts/seller/SellerLayout"
import AdminLogin from "./pages/admin/auth/AdminLogin"
import WebsiteLayout from "./layouts/website/WebsiteLayout"
import NoteIndex from './pages/notes/Index'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          {/* Home Page */}
          <Route index element={<HomePage />} />

          {/* Notes */}
          <Route path="/notes">
            <Route index element={<NoteIndex />} />
          </Route>
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="login" element={<AdminLogin />} />
        </Route>

        {/* Seller */}
        <Route path="/seller" element={<SellerLayout />}>
          <Route index element={<SellerDashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App