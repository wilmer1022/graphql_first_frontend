import styled from "styled-components";

const IconButton = styled.button`
  align-items: center;
  display:block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-clip: padding-box;
  background-color: ${({ type }) =>
    type === "primary" ? "#1565c0" : type === "danger" ? "#bd1e51" : "#263238"};
  border: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 20px;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  position: relative;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;

  &:hover {
    background-color: ${({ type }) =>
      type === "primary"
        ? "#4f83cc"
        : type === "danger"
        ? "#f35487"
        : "#4f5b62"};
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transform: translateY(-1px);
  }
`;

export default IconButton;