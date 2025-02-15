// styling
import styles from "./styles.module.scss";

// components
import Spring from "@components/Spring";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, EffectFade } from "swiper";
import Like from "@ui/Like";
import SizeSelector from "@ui/SizeSelector";
import SizeGuide from "@components/SizeGuide";
import Price from "@ui/Price";
import IconButton from "@ui/IconButton";
import ColorCheckbox from "@ui/ColorCheckbox";

// hooks
import { useState, useEffect } from "react";
import { useThemeProvider } from "@contexts/themeContext";
import { useShopProvider } from "@contexts/shopContext";

const ProductDisplay = ({ product }) => {
  const { direction } = useThemeProvider();
  const [popupOpen, setPopupOpen] = useState(false);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [stocks, setStocks] = useState(null);

  const { addToCart, addToFavList, removeFromFavList, favList } =
    useShopProvider();

  const isInFavList = (productId) =>
    favList.some((item) => item.ProductID === productId);

  useEffect(() => {
    if (mainSwiper && thumbsSwiper) {
      mainSwiper.changeLanguageDirection(direction);
      mainSwiper.update();
      thumbsSwiper.changeLanguageDirection(direction);
      thumbsSwiper.update();
    }
  }, [mainSwiper, thumbsSwiper, direction]);

  useEffect(() => {
    console.log(selectedColor, selectedSize);
    if (selectedColor && selectedSize) {
      const selectedVariable = product.Stock.find(
        (item) => item.color === selectedColor && item.size === selectedSize
      );
      setStocks(selectedVariable ? selectedVariable.quantity : null);
    } else if (selectedColor) {
      const totalByColor = product.Stock.reduce((total, item) => {
        return item.color === selectedColor ? total + item.quantity : total;
      }, 0);
      setStocks(totalByColor || null);
    } else if (selectedSize) {
      const totalBySize = product.Stock.reduce((total, item) => {
        return item.size === selectedSize ? total + item.quantity : total;
      }, 0);
      setStocks(totalBySize || null);
    } else {
      const totalStock = product.Stock.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setStocks(totalStock || null);
    }
  }, [product.Stock, selectedColor, selectedSize]);

  return (
    <Spring className={`${styles.container} card grid card-padded`}>
      <div className={styles.media}>
        <Swiper
          className={styles.media_main}
          id="main"
          onSwiper={(swiper) => setMainSwiper(swiper)}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Autoplay, EffectFade, Thumbs]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade"
          speed={1200}
          fadeEffect={{ crossFade: true }}
        >
          {product.Images.map((item, index) => (
            <SwiperSlide key={`product-img-large-${index}`}>
              <img src={item} alt={`Product Img ${index}`} className="h-full" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
          spaceBetween={12}
          breakpoints={{
            767: {
              spaceBetween: 15,
            },
          }}
          slidesPerView={3}
          speed={1200}
          watchSlidesProgress
        >
          {product.Images.map((item, index) => (
            <SwiperSlide
              key={`product-img-small-${index}`}
              className={`${styles.thumb} ${styles[direction]}`}
            >
              <img
                src={item}
                alt={`Product Small Img ${index}`}
                className="min-h-[160px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <span className={styles.divider} />
      <div className="flex flex-col">
        <div className="flex flex-col g-30 flex-1">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5">
              <span className="label label--store h6">
                {product.ProductCategory.Name}
              </span>
              <div className="flex items-center justify-between">
                <h3 style={{ maxWidth: 240 }}>{product.Name}</h3>
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
            </div>
            <p>{product.ShortDesc}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3>Select color</h3>
            <div className="flex flex-wrap gap-4">
              {product.Colors.map((color) => (
                <ColorCheckbox
                  key={color.ColorID}
                  type="checkbox"
                  name="product-color"
                  {...color}
                  checked={color.ColorID === selectedColor}
                  onChange={() =>
                    color.ColorID === selectedColor
                      ? setSelectedColor(null)
                      : setSelectedColor(color.ColorID)
                  }
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4" style={{ marginBottom: 30 }}>
            <div className="flex justify-between">
              <h3>Select size</h3>
              <button
                className="text-button"
                onClick={() => setPopupOpen(true)}
              >
                Size table
              </button>
            </div>
            <div className="flex flex-wrap gap-4">
              {product.Sizes.map((size) => (
                <SizeSelector
                  id={size.SizeID}
                  key={size.ShortCode}
                  size={size.Name}
                  selected={size.SizeID === selectedSize}
                  onToggle={(id) =>
                    id === selectedSize
                      ? setSelectedSize(null)
                      : setSelectedSize(id)
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className={`${styles.footer} flex items-center justify-between border-top`}
        >
          <Price price={product.Price} />
          <div className="flex items-center gap-6">
            <IconButton
              icon="bag"
              onClick={() => addToCart(product, 1)}
              color="grass"
              ariaLabel="Add to cart"
              isCartAction={false}
            />
          </div>
        </div>
        <div className={`${styles.footer_details} flex flex-col gap-2`}>
          <p className="heading-font">
            <span className="font-semibold">Category:</span>{" "}
            {product.ProductCategory.Parent}
          </p>
          <p className="heading-font">
            <span className="font-semibold">Availability:</span>{" "}
            {stocks ? `In Stock ${stocks} Items` : "Not available"}
          </p>
        </div>
      </div>
      <SizeGuide open={popupOpen} onClose={() => setPopupOpen(false)} />
    </Spring>
  );
};

export default ProductDisplay;
