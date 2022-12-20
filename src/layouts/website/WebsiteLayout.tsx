import { Outlet } from "react-router-dom"
import WebsiteFooter from "./WebsiteFooter"
import WebsiteHeder from "./WebsiteHeder"

const WebsiteLayout = () => {
  return (
    <>
      <WebsiteHeder />

      <main>
        <Outlet />
      </main>

      <WebsiteFooter />
    </>
  )
}

export default WebsiteLayout