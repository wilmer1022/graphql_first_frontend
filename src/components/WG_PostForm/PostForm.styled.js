import styled from "styled-components";

const PostForm = styled.div`
  width: 660px;
  min-height: 360px;
  position: relative;
  background: white;
  padding: 30px 25px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-bottom: 40px;

  .postform__card_header {
    width: 100%;
    margin-bottom: 25px;
    display: flex;

    &_icon {
      background: #00796b;
      min-width: 40px;
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
      width: 100%;

      i {
        color: #039be5;
      }
    }
  }

  .postform__card_content {
    margin-bottom: 15px;
    cursor: pointer;
  }

  .postform__card_footer {
    display: flex;
    justify-content: end;
    align-items: center;

    .alert__message {
      margin-right: 25px;
      font-weight: 500;
    } 
    
    .success_ms {
      color: #00796b;
    }

    .danger_ms {
      color: #ff8f00;
    }

    .error_ms {
      color: #d81b60;
    }
  }

  @media (max-width: 750px) {
    & {
      width: 100%;
      border-radius: 0;

      .postform__card_footer {
        flex-direction: column;
        justify-content: center;

        .alert__message {
          margin-right: 0;
          margin-bottom: 15px;
        } 
      }
    }
  }
`;

export default PostForm;