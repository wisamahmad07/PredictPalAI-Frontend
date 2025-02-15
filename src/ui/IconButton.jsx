import { toast } from "react-toastify";
import PropTypes from "prop-types";

const IconButton = ({
  icon = "bag",
  onClick,
  color = "green",
  ariaLabel = "Add to cart",
  isCartAction,
}) => {
  const handleClick = () => {
    onClick();
    toast.success(`${ariaLabel} successfully!`);
  };

  return (
    <button
      className={`icon-btn ${isCartAction ? "icon-btn--cart" : ""}`}
      aria-label={ariaLabel}
      onClick={handleClick}
      style={!isCartAction ? { background: `var(--${color})` } : {}}
    >
      <i className={`icon-${icon}`}></i>
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["grass", "green", "blue", "blue-gradient"]),
  ariaLabel: PropTypes.string,
  isCartAction: PropTypes.bool,
};

export default IconButton;
