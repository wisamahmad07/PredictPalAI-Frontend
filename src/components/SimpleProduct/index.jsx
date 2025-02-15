import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

import Spring from "@components/Spring";
import Price from "@ui/Price";
import IconButton from "@ui/IconButton";
import Like from "@ui/Like";
import TruncatedText from "@components/TruncatedText";
import CustomRating from "@ui/CustomRating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";

import useMeasure from "react-use-measure";
import { useThemeProvider } from "@contexts/themeContext";
import { useShopProvider } from "@contexts/shopContext";

const SimpleProduct = ({ product }) => {
  const [ref, { width }] = useMeasure();
  const { direction } = useThemeProvider();
  const [swiper, setSwiper] = useState(null);

  const { addToCart, addToFavList, removeFromFavList, favList } =
    useShopProvider();

  const isInFavList = (productId) =>
    favList.some((item) => item.ProductID === productId);

  useEffect(() => {
    if (swiper) {
      swiper.changeLanguageDirection(direction);
      swiper.update();
    }
  }, [swiper, direction]);

  return (
    <Spring className="card height-w-2 flex flex-col justify-between card-padded">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className={styles.title} ref={ref}>
            <NavLink className="h3" to={`/product/${product.ProductID}`}>
              <TruncatedText text={product.Name} width={width} />
            </NavLink>
          </div>
          <Like
            color="light"
            isLiked={isInFavList(product.ProductID)}
            onClick={() =>
              isInFavList(product.ProductID)
                ? removeFromFavList(product.ProductID)
                : addToFavList(product)
            }
          />
        </div>
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
      <Swiper
        className={styles.swiper}
        onSwiper={setSwiper}
        slidesPerView={1}
        loop
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
        speed={1200}
      >
        {product.Images.map((media, index) => (
          <SwiperSlide key={index}>
            <div className={styles.swiper_slide}>
              <img src={media} alt="product" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-between">
        <Price price={product.Price} />
        <div className="flex items-center gap-5">
          <IconButton
            icon="bag"
            onClick={() => addToCart(product, 1)}
            color="grass"
            ariaLabel="Add to cart"
            isCartAction={false}
          />
        </div>
      </div>
    </Spring>
  );
};

export default SimpleProduct;
