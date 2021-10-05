import "./CustomAlert.css";
import PropTypes from "prop-types";

const CustomAlert = ({ toggle, message, color }) => {
  return (
    <>
      {toggle && <div className={`alert-container ${color}`}>{message}</div>}
    </>
  );
};

CustomAlert.propTypes = {
  toggle: PropTypes.bool,
  message: PropTypes.string,
  color: PropTypes.string,
};

CustomAlert.defaultProps = {
  toggle: true,
  message: "This is an alert",
  color: "primary",
};

export default CustomAlert;
