import styled from "styled-components";

const Button = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: ${({ type }) =>
    type === "primary" ? "#1565c0" : type === "danger" ? "#bd1e51" : "#263238"};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: ${({ size }) =>
    size === "sm"
      ? "12px"
      : size === "md"
      ? "14px"
      : size === "lg"
      ? "16px"
      : "18px"};
  font-weight: ${({ size }) =>
    size === "sm"
      ? "450"
      : size === "md"
      ? "550"
      : size === "lg"
      ? "600"
      : "600"};
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 2rem;
  padding: ${({ size }) =>
    size === "sm"
      ? "2px 10px"
      : size === "md"
      ? "8px 13px"
      : size === "lg"
      ? "12px 15px"
      : "20px 18px"};
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

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

export default Button;
