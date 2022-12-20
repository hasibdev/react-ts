import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  background-color: #fff;
  padding: 2rem 1.2rem;

  .logo {
    width: 12rem;
  }
  
  .list {
    list-style: none;
    display: flex;
    align-items: center;
    margin-left: auto;

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