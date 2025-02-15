import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

import Spring from "@components/Spring";
import TruncatedText from "@components/TruncatedText";
import CustomRating from "@ui/CustomRating";
import Price from "@ui/Price";
import IconButton from "@ui/IconButton";

import useMeasure from "react-use-measure";
import { useWindowSize } from "react-use";
import { useShopProvider } from "@contexts/shopContext";

const ProductRowCard = ({ product, isSlide = false }) => {
  const Wrapper = isSlide ? "div" : Spring;
  const [ref, { width }] = useMeasure();
  const { width: windowWidth } = useWindowSize();

  const { addToCart } =
    useShopProvider();

  return (
    <Wrapper
      className={`${styles.container} card card-padded ${
        windowWidth >= 414 ? "height-w-1" : ""
      }`}
    >
      <img
        className={styles.media}
        src={product.Images[0]}
        alt={product.Name}
      />
      <div className={styles.main} ref={ref}>
        <div className="flex flex-col flex-1">
          <span className="label label--store h6">
            {product.ProductCategory.Name}
          </span>
          <NavLink className={styles.main_title + " h3"} to={`/product/${product.ProductID}`}>
            <TruncatedText width={width} text={product.Name} />
          </NavLink>
          <CustomRating
            value={
              product.ProductReviews.length > 0
                ? (
                    product.ProductReviews.reduce(
                      (sum, value) => sum + value.Rating,
                      0
                    ) / product.ProductReviews.length
                  ).toFixed(1)
                : 0
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <Price price={product.Price} />
          <IconButton
            icon="bag"
            onClick={() => addToCart(product, 1)}
            color="grass"
            ariaLabel="Add to cart"
            isCartAction={false}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductRowCard;
