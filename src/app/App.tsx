import { Routes, Route } from "react-router-dom"
import Home from "../pages/website/Index"
import Admin from "../pages/admin/Index"
import Seller from "../pages/seller/Index"
import AdminLayout from "../layouts/admin/AdminLayout"
import SellerLayout from "../layouts/seller/SellerLayout"
import AdminLogin from "../pages/admin/auth/AdminLogin"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="login" element={<AdminLogin />} />
        </Route>

        <Route path="/seller" element={<SellerLayout />}>
          <Route index element={<Seller />} />
        </Route>
      </Routes>
    </>
  )
}

export default App