import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <h1>AdminLayout</h1>

      <Outlet />
    </>
  )
}

export default AdminLayout