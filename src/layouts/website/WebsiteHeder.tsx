import { Link } from "react-router-dom"

const WebsiteHeder = () => {
  return (
    <div>
      <div className="d-flex">
        <div>
          Logo
        </div>

        <ul>
          <li> <Link to="/">Shop</Link> </li>
          <li> <Link to="/">Offers</Link> </li>
          <li> <Link to="/">FAQ</Link> </li>
          <li> <Link to="/">Contact</Link> </li>
          <li> <Link to="/">Become a Seller</Link> </li>
          <li> <Link to="/">Join</Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default WebsiteHeder