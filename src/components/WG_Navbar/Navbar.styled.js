import styled from "styled-components";

const Navbar = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  top: 0px;
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 999;

  .navbar__icon {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 20px;

    img {
      width: 70px;
      height: 70px;
    }
  }

  .navbar__login_section {
    height: 100%;
    position absolute;
    right: 30px;
    display: flex;
    align-items: center;

    &__btn {
      border: none;
      border-radius: 20px;
      background: #4a148c;
      font-size: 16px;
      color: #fff;
      padding: 10px 15px;
      cursor: pointer;

      &:hover {
        background: #7c43bd;
      }
    }

    &__btn:first-child {
      background: transparent;
      color: #000;
      margin-right: 15px;

      &:hover {
        color: #607d8b;
      }
    }
  }

  .navbar__user_section {
    height: 100%;
    position absolute;
    right: 30px;
    display: flex;
    align-items: center;

    &_icon {
      background: #f4b400;
      width: 40px;
      height: 40px;
      margin-right: 10px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 21px;
      font-weight: 700;
      cursor: pointer;
    }

    &_name {
      color: #6B6E70;
      visibility: visible;
      cursor: default;
    }

    svg {
      cursor: pointer;
    }
  }

  @media (max-width: 750px) {
    .navbar__user_section_icon {
      width: 45px;
      height: 45px;
      font-size: 25px;
    }

    .navbar__user_section_name {
      visibility: hidden;
      width: 0;
    }
  }
`;

export default Navbar;
