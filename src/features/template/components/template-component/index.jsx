import Container from "./index.styled";
import PropTypes from "prop-types";

const TemplateComponent = (props) => {
  return <Container>Template Component{props.children}</Container>;
};

export default TemplateComponent;

TemplateComponent.propTypes = {
  children: PropTypes.element,
};
