import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <h1>Get Your Bakery Items Delivered</h1>
      <p>Get your favorite bakery items baked and delivered to your doorsteps at any time</p>

      <form className="search-box">
        <input type="text" placeholder='Search your product from here' className='input' />
        <button type="submit">
          <BiSearch className='search-icon' />
          <span className='ms-2'>Search</span>
        </button>
      </form>
    </StyledHeroSection>
  )
}

const StyledHeroSection = styled.section`
  text-align: center;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 22px;
  }
  
  .search-box {
    margin-top: 1rem;
    display: flex;
    box-shadow: 0px 10px 35px #cccccc8f;
    width: 70%;
    justify-content: center;

    .input {
      border: 1px solid transparent;
      outline: none;
      transition: border 0.2s ease-in-out;
      padding: 0.5rem 1.3rem;
      display: block;
      width: 100%;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      &:focus {
        border-color: var(--bs-primary);
        outline: none;
      }
      &:focus-visible {
        outline: none;
      }
    }
    
    button {
      outline: none;
      border: 1px solid var(--bs-primary);
      padding: 1.2rem 2.3rem;
      color: #fff;
      font-size: 20px;
      background-color: var(--bs-primary);
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .search-icon {
      font-size: 25px;
    }
  }
`

export default HeroSection