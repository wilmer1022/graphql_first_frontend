import styled from "styled-components";

const AlertToast = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  min-height: 100px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  top: ${({ active }) => (active === true ? "0" : "-100px")};
  transition: all ease 0.3s;
  z-index: 100;

  .alert__section {
    width: 100%;

    &_icon {
      background: ${({ type }) =>
        type === "error" ? "#e41749" : type === "danger" ? "#f2a600" : "#12c99b"};
      width: 7vw;
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;

      &:after {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        display: block;
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        border-left: 0;
        border-bottom: 0;
        top: 45%;
        right: -6px;
        margin-top: -5px;
        background: ${({ type }) =>
          type === "error" ? "#e41749" : type === "danger" ? "#f2a600" : "#12c99b"};
      }
    }

    &_content {
      width: 90vw;
      height: 100%;
      left: 7vw;
      position: absolute;
      padding: 15px 35px;

      h3 {
        margin-bottom: 5px;
        color: ${({ type }) =>
          type === "error" ? "#e41749" : type === "danger" ? "#f2a600" : "#12c99b"};
      }
    }

    &_close {
      width: 3vw;
      height: 100%;
      left: 97vw;
      position: absolute;
      padding-top: 15px;

      span {
        opacity: 0.2;
        cursor: pointer;
        transition: all ease 0.3s;

        &:hover {
          opacity: 0.5;
        }
      }
    }

    &_progress_bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 5px;
      width: 100vw;

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 100%;
        height: 100%;
        width: 100%;
        background-color: ${({ type }) =>
          type === "error" ? "#e41749" : type === "danger" ? "#f2a600" : "#12c99b"};
      }

      &.active:before {
        animation: progress 5s linear forwards;
      }

      @keyframes progress {
        100% {
          right: 0;
        }
      }
    }
  }

  @media (max-width: 950px) {
    .alert__section_icon {
      width: 15vw;
    }

    .alert__section_content {
      left: 15vw;
      width: 80vw;
    }

    .alert__section_close {
      left: 95vw;
      width: 5vw;
    }
  }

  @media (max-width: 600px) {
    .alert__section_icon {
      width: 20vw;
    }

    .alert__section_content {
      left: 20vw;
      width: 70vw;

      h3 {
        margin-bottom: 2px;
      }

      p {
        font-size: 13px;
      }
    }

    .alert__section_close {
      left: 90vw;
      width: 10vw;
    }
  }
`;

export default AlertToast;
