import styled from "styled-components";

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  height: 46px;
  outline: none;
  appearance: none;
  border-radius: 8px;
  transition: 0.2s ease all;
  padding: 25px;
  border: ${(props) => {
    switch (props.variant) {
      case "fill":
        return "none";
      case "outline":
        return "1px solid var(--app-color-1)";
    }
  }};
  background: ${(props) => {
    switch (props.variant) {
      case "fill":
        return "var(--app-color-1)";
      case "outline":
        return "none";
    }
  }};
  font-family: "Instrument Sans", sans-serif;
  font-size: var(--heading-size-2);
  font-weight: var(--heading-weight-2);
  line-height: var(--heading-line-2);
  color: ${(props) => {
    switch (props.variant) {
      case "fill":
        return "var(--button-color-1)";
      case "outline":
        return "var(--button-color-2)";
    }
  }};
  &:active {
    background: ${(props) => {
      switch (props.variant) {
        case "fill":
          return "var(--app-color-2)";
        case "outline":
          return "var(--app-color-3)";
      }
    }};
    box-shadow: ${(props) => {
      switch (props.variant) {
        case "fill":
          return "0 0 32px #633CFF40";
        case "outline":
          return "none";
      }
    }};
  }
  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
`;

export default Container;
