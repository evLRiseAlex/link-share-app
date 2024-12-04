import Container from "./index.styled";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <Container variant={props.variant} {...props}>
      {props.children}{" "}
    </Container>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.element,
  variant: PropTypes.oneOf(["fill", "outline"]),
};
