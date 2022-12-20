import { Link } from "react-router-dom"
import { StyledHeader } from "./StyledWebsiteLayout"
import logoImage from "../../assets/images/PickBazar.webp"


const WebsiteHeder = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <Link to="/">
          <img src={logoImage} className="img-fluid" />
        </Link>
      </div>

      <ul className="list">
        <li className="item"> <Link to="/" className="link">Shop</Link> </li>
        <li className="item"> <Link to="/" className="link">Offers</Link> </li>
        <li className="item"> <Link to="/" className="link">FAQ</Link> </li>
        <li className="item"> <Link to="/" className="link">Contact</Link> </li>
        <li className="item"> <Link to="/" className="btn btn-primary">Become a Seller</Link> </li>
        <li className="item"> <Link to="/" className="btn btn-primary">Join</Link> </li>
      </ul>
    </StyledHeader>
  )
}

export default WebsiteHeder