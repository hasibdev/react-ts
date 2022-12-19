import { Outlet } from "react-router-dom"
import WebsiteHeder from "./WebsiteHeder"

const WebsiteLayout = () => {
  return (
    <>
      <WebsiteHeder />

      <Outlet />
    </>
  )
}

export default WebsiteLayout