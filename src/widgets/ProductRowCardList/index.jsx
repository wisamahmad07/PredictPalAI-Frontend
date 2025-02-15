// styling
import styles from "./styles.module.scss";

// components
import Spring from "@components/Spring";
import ProductRowCard from "@components/ProductRowCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Navigation } from "swiper";
import { Fragment } from "react";
import SwiperControls from "@ui/SwiperControls";

// hooks
import { useState, useEffect } from "react";
import { useThemeProvider } from "@contexts/themeContext";
import { useShopProvider } from "@contexts/shopContext";
import { useGetProductsQuery } from "@api/eCommerce/eCommerceApi";

const StaticWrapper = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

const SliderWrapper = ({ children }) => {
  const { direction } = useThemeProvider();
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.changeLanguageDirection(direction);
      swiper.update();
    }
  }, [swiper, direction]);

  return (
    <Spring>
      <div className="relative">
        <Swiper
          className="h-full"
          onSwiper={setSwiper}
          modules={[Navigation, Autoplay]}
          navigation
          slidesPerView={1}
          spaceBetween={20}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1500}
          breakpoints={{
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 3,
            },
            1499: {
              slidesPerView: 4,
            },
          }}
        >
          {children}
        </Swiper>
        <SwiperControls swiper={swiper} withShadow />
      </div>
    </Spring>
  );
};

const ProductRowCardList = ({ isSlider = false }) => {
  const { direction } = useThemeProvider();
  const WidgetWrapper = isSlider ? SliderWrapper : StaticWrapper;
  const CardWrapper = isSlider ? SwiperSlide : Fragment;
  const cardWrapperProps = isSlider
    ? { style: { margin: direction === "ltr" ? "0 20px 0 0" : "0 0 0 20px" } }
    : {};

  const { selectedCategories, priceRange, selectedSizes, selectedColors } =
    useShopProvider();
  const { data, error, isLoading } = useGetProductsQuery({
    keyword: "",
    page: 2,
    length: 4,
    sizes: selectedSizes,
    colors: selectedColors,
    brands: [],
    categories: selectedCategories,
    priceRange: priceRange,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <WidgetWrapper>
      {data &&
        data.data.rows?.map((product, index) => (
          <CardWrapper key={product.id} {...cardWrapperProps}>
            <ProductRowCard index={index} product={product} isSlide={isSlider} />
          </CardWrapper>
        ))}
    </WidgetWrapper>
  );
};

export default ProductRowCardList;
