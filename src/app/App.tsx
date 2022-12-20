import { Routes, Route } from "react-router-dom"
import Home from "../pages/website/home/Index"
import Admin from "../pages/admin/Index"
import Seller from "../pages/seller/Index"
import AdminLayout from "../layouts/admin/AdminLayout"
import SellerLayout from "../layouts/seller/SellerLayout"
import AdminLogin from "../pages/admin/auth/AdminLogin"
import WebsiteLayout from "../layouts/website/WebsiteLayout"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
        </Route>

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