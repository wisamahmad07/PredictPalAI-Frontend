// styling
import styled from "styled-components";

// utils
import PropTypes from "prop-types";

const StyledColorCheckbox = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${({ color1 }) => color1};
  }

  ${({ isDuo, color2 }) =>
    isDuo &&
    `
        &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: 100%;
            z-index: 2;
            background: ${color2};
        }
    `}
  input {
    display: none;

    &:checked + label {
      opacity: 1;
    }
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 10;
    opacity: 0;
    transition: opacity var(--transition);

    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      background: var(--widget);
      transform: translate(-50%, -50%);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: ${({ color1 }) => (color1 === "#3A3A3A" ? "white" : color1)};
    }
  }
`;

const ColorCheckbox = ({
  ColorID,
  Value = [],
  checked,
  onChange,
  type = "checkbox",
  name,
}) => {
  const colors = {
    color1: Value[0] || "transparent",
    color2: Value[1] || "transparent",
    isDuo: Value.length === 2,
  };

  const handleChange = () => {
    onChange(ColorID);
  };

  return (
    <StyledColorCheckbox {...colors}>
      <input
        type={type}
        checked={checked}
        onChange={handleChange}
        id={ColorID}
        name={name}
      />
      <label htmlFor={ColorID}>
        <i className="icon icon-xmark" />
      </label>
    </StyledColorCheckbox>
  );
};

ColorCheckbox.propTypes = {
  ColorID: PropTypes.string.isRequired,
  Value: PropTypes.arrayOf(PropTypes.string),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(["checkbox", "radio"]),
  name: PropTypes.string,
};

export default ColorCheckbox;
