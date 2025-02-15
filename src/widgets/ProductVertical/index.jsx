import React from "react";

// styling
import styles from "./styles.module.scss";

// components
import Spring from "@components/Spring";
import Price from "@ui/Price";
import TruncatedText from "@components/TruncatedText";
import IconButton from "@ui/IconButton";
import Like from "@ui/Like";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import ProductInfoItem from "@components/ProductInfoItem";

// hooks
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { useThemeProvider } from "@contexts/themeContext";
import { useShopProvider } from "@contexts/shopContext";

// assets
import { useGetPopularProductsQuery } from "@api/eCommerce/eCommerceApi";

const ProductVertical = () => {
  const { direction } = useThemeProvider();
  const [swiper, setSwiper] = useState(null);
  const [item, setItem] = useState(null);
  const [titleRef, { width: titleWidth }] = useMeasure();

  const { data, error, isLoading } = useGetPopularProductsQuery({ num: 1 });

  const { addToCart, addToFavList, removeFromFavList, favList } =
    useShopProvider();

  useEffect(() => {
    if (swiper) {
      swiper.changeLanguageDirection(direction);
      swiper.update();
    }
  }, [swiper, direction]);

  useEffect(() => {
    const firstItem = data?.data?.[0];
    if (firstItem) setItem(firstItem);
  }, [data]);

  const isInFavList = (productId) =>
    favList.some((item) => item.ProductID === productId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product data.</div>;
  }

  return (
    <Spring className="card flex flex-col card-padded">
      {item && (
        <>
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2.5">
                <span className="label label--store h6">
                  {item.ProductCategory.Name}
                </span>
                <div className={styles.title} ref={titleRef}>
                  <TruncatedText
                    className="h3"
                    text={item.Name}
                    width={titleWidth}
                  />
                </div>
              </div>
              <Price price={item.Price} />
            </div>
            <Swiper
              className={styles.swiper}
              onSwiper={setSwiper}
              modules={[Autoplay, EffectFade]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={1200}
            >
              {item.Images.map((item, index) => (
                <SwiperSlide key={index} className={styles.swiper_slide}>
                  <img
                    src={item}
                    alt={`Product-Img_${index}`}
                    className="object-cover min-h-[400px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex flex-col g-30">
              <p>{item.ShortDesc}</p>
              <ul className="flex flex-col gap-2">
                <ProductInfoItem property="Brand:" value={item.Brand.Name} />
                <ProductInfoItem
                  property="Color:"
                  value={item.Colors.map((color) => color.Color).join(", ")}
                />
                <ProductInfoItem property="Fabric:" value={item.Material} />
                <ProductInfoItem
                  property="Return Policy:"
                  value={`${item.ReturnPolicy} days`}
                />
              </ul>
            </div>
          </div>
          <div className={`${styles.footer} flex justify-between`}>
            <IconButton
              icon="bag"
              onClick={() => addToCart(item, 1)}
              color="grass"
              ariaLabel="Add to cart"
              isCartAction={false}
            />
            <div className="flex items-center gap-5">
              <Like
                color="light"
                isLiked={isInFavList(item.ProductID)}
                onClick={() =>
                  isInFavList(item.ProductID)
                    ? removeFromFavList(item.ProductID)
                    : addToFavList(item)
                }
              />
            </div>
          </div>
        </>
      )}
    </Spring>
  );
};

export default ProductVertical;
