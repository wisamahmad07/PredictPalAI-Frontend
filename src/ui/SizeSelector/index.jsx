// styling
import styles from "./styles.module.scss";

// hooks
import { useThemeProvider } from "@contexts/themeContext";

// utils
import PropTypes from "prop-types";
import classNames from "classnames";

const SizeSelector = ({
  id,
  size,
  disabled = false,
  type = "checkbox",
  selected,
  onToggle,
}) => {
  const { theme } = useThemeProvider();

  const handleChange = () => {
    if (!disabled) {
      onToggle(id);
    }
  };

  return (
    <div
      className={classNames(styles.radio, {
        [styles.disabled]: disabled,
        [styles[theme]]: theme,
      })}
    >
      <input
        type={type}
        name="size"
        id={size}
        value={size}
        checked={selected}
        disabled={disabled}
        onChange={handleChange}
      />
      <label className="h4" htmlFor={size}>
        {size} <i className="icon-xmark" />
      </label>
    </div>
  );
};

SizeSelector.propTypes = {
  size: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["checkbox", "radio"]),
};

export default SizeSelector;
