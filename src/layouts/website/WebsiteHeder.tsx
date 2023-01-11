import { Link } from "react-router-dom"
import styled from 'styled-components'
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
        <li className="item"> <Link to="/notes" className="link">Notes</Link> </li>
        <li className="item"> <Link to="/" className="link">Contact</Link> </li>
        <li className="item"> <Link to="/" className="btn btn-primary">Become a Seller</Link> </li>
        <li className="item"> <button className="btn btn-primary">Join</button> </li>
      </ul>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 2rem 2.2rem;

  .logo {
    width: 12rem;
  }
  
  .list {
    list-style: none;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-bottom: 0;

    .item {
      .link {
        text-decoration: none;
        padding: 5px 10px;
        font-size: 20px;
        color: rgba(31,41,55, 1);
        transition: all 0.2s ease-in-out;
        &:hover {
          color: #009f7f;
        }
      }
      .btn {
        font-size: 20px;
        color: #fff;
      }

      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
`

export default WebsiteHeder