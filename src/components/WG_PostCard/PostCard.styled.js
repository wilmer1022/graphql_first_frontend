import styled from "styled-components";

const PostCard = styled.div`
  width: 660px;
  min-height: 360px;
  position: relative;
  background: white;
  padding: 30px 25px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-bottom: 40px;

  .posts__card_header {
    margin-bottom: 25px;
    display: flex;

    &_icon {
      background: #00796b;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 21px;
      font-weight: 700;
      cursor: pointer;
    }

    &_info {
      margin-left: 10px;

      h3 {
        cursor: pointer;
      }

      i {
        color: #039be5;
      }
    }
  }

  .posts__card_content {
    margin-bottom: 25px;
    cursor: pointer;
  }

  .posts__card_reactions {
    padding-bottom: 25px;
    border-bottom: 1px solid #cfcfcf;
    display: flex;

    svg {
      cursor: pointer;
    }

    strong {
      margin-left: 5px;
      color: #ff1744;
    }
  }

  .posts__card_comments {
    min-height: 80px;
    margin-bottom: 25px;
    padding-top: 20px;

    &_content {
      margin-bottom: 10px;
      display: flex;

      &_icon {
        background: #f4b400;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
      }

      &_info {
        margin-left: 10px;
        display: flex;
        align-items: center;
        padding: 10px 10px;
        background: #cfd8dc;
        font-size: 15px;
        border-radius: 10px;
      }
    }

    .owner {
      flex-flow: row-reverse;
      gap: 10px;
    }

    &_notfound {
      background: #f2f2f2;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        color: #666666;
      }
    }

    &_field {
      margin-top: 25px;
      display: flex;

      button {
        margin-left: 10px;
      }

      &_notloggedin {
        display: flex;
        justify-content: center;
        opacity: 0.5;

        strong {
          margin-left: 10px;
        }
      }
    }
  }

  .posts__card_footer {
    display: flex;
    color: #546e7a;
    justify-content: end;

    strong {
      cursor: pointer;
    }
  }

  @media (max-width: 750px) {
    & {
      width: 100%;
      border-radius: 0;
    }
  }
`;

export default PostCard;
