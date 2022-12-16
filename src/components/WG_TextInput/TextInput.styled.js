import styled from "styled-components";

const TextInput = styled.input`
  background: #f5f5f5;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 10px 8px;
  color: #4E4E50;
  font-size: 15px;

  &:focus {
    border: 2px solid #3AAFA9;
    outline: 0 none;
  }
`;

export default TextInput;
