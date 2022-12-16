import styled from "styled-components";

const TextArea = styled.textarea`
  background: #f5f5f5;
  width: 100%;
  resize: none;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 11px 8px;
  color: #4E4E50;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 100vw;
  }

  ::-webkit-scrollbar-thumb {
    background: #8eacbb;
    border-radius: 100vw;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #607d8b;
  }

  &:focus {
    border: 2px solid #3AAFA9;
    outline: 0 none;
  }
`;

export default TextArea;