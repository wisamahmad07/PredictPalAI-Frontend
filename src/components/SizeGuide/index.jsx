// styling
import styles from "./styles.module.scss";

// components
import Popup from "@components/Popup";

// utils
import PropTypes from "prop-types";

const SizeGuide = ({ data = [], open, onClose }) => {
  return (
    <Popup open={open} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <h2 className="text-center">Size Chart</h2>
        <div className="flex flex-col g-30">
          <div className={`${styles.header} ${styles.row}`}>
            <span></span>
            <span className="h4">Chest(in)</span>
            <span className="h4">Waist(in)</span>
          </div>
          <div>
            {data.map((item, index) => (
              <div className={styles.row}>
                <span className="h4">{item.ShortCode}</span>
                <span>{`${item.Chest[0]}-${item.Chest[1]}`}</span>
                <span>{`${item.Waist[0]}-${item.Waist[1]}`}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Popup>
  );
};

SizeGuide.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SizeGuide;
