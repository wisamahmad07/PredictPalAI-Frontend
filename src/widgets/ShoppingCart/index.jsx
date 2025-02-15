// styling
import styles from "./styles.module.scss";

// components
import Spring from "@components/Spring";
import { NavLink, useNavigate } from "react-router-dom";
import ScrollContainer from "@components/ScrollContainer";
import Popup from "@components/Popup";
import TruncatedText from "@components/TruncatedText";
import IconButton from "@ui/IconButton";
import Like from "@ui/Like";

// hooks
import useMeasure from "react-use-measure";
import { useShopProvider } from "@contexts/shopContext";

const ShoppingCart = ({ isPopup }) => {
  const navigate = useNavigate();

  const {
    cartOpen,
    setCartOpen,
    cart,
    updateCart,
    removeFromCart,
    addToFavList,
    removeFromFavList,
    favList,
  } = useShopProvider();
  const [headerRef, { height: headerHeight }] = useMeasure();
  const [footerRef, { height: footerHeight }] = useMeasure();
  const [nameRef, { width }] = useMeasure();

  const Wrapper = isPopup ? Popup : Spring;
  const wrapperProps = isPopup
    ? {
        open: cartOpen,
        onClose: () => setCartOpen(false),
        popupClass: styles.popup,
      }
    : {
        className: "card height-w-2 flex flex-col",
      };

  const isInFavList = (productId) =>
    favList.some((item) => item.ProductID === productId);

  const totalPrice = cart.reduce(
    (total, item) => total + item.Price * item.amount,
    0
  );

  return (
    <Wrapper {...wrapperProps}>
      <h3 className="card_header" style={{ paddingBottom: 20 }} ref={headerRef}>
        Shopping Cart
      </h3>
      <ScrollContainer height={headerHeight + footerHeight}>
        <div className="track flex flex-col flex-1">
          {cart.length > 0 ? (
            cart.map((item) => {
              const price = `$${item.Price.toFixed(2)}`;

              return (
                <div
                  className={`${styles.item} flex items-center justify-between gap-5`}
                  key={`cart-${item.ProductID}`}
                >
                  <div className="flex items-center flex-1 gap-2.5">
                    <img
                      className="square-avatar"
                      src={item.Images[0]}
                      alt={item.Name}
                    />
                    <div className="flex flex-col flex-1" ref={nameRef}>
                      <NavLink className="h4" to="/product">
                        <TruncatedText
                          text={item.Name}
                          width={width}
                          lines={1}
                        />
                      </NavLink>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`label label--store ${
                            isPopup ? "h5" : "h6"
                          }`}
                        >
                          {isPopup ? price : item.ProductCategory.Name}{" "}
                        </span>
                        <span className="text-lg">&times;</span>
                        <div className="flex items-center gap-1 h-4 bg-black border border-border">
                          <button
                            onClick={() =>
                              updateCart(
                                item.ProductID,
                                Math.max(item.amount - 1, 1)
                              )
                            }
                            className="flex items-center justify-center w-4 h-4 border-0 !border-r border-border border-solid"
                          >
                            -
                          </button>
                          <span className="flex justify-center w-3">
                            {item.amount}
                          </span>
                          <button
                            onClick={() =>
                              updateCart(item.ProductID, item.amount + 1)
                            }
                            className="flex items-center justify-center w-4 h-4 border-0 !border-l border-border border-solid"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {isPopup ? (
                    <div className="flex gap-2.5">
                      <Like
                        isCartAction
                        color="light"
                        isLiked={isInFavList(item.ProductID)}
                        onClick={() =>
                          isInFavList(item.ProductID)
                            ? removeFromFavList(item.ProductID)
                            : addToFavList(item)
                        }
                      />
                      <IconButton
                        icon="trash"
                        ariaLabel="Remove product"
                        isCartAction
                        onClick={() => removeFromCart(item.ProductID)}
                      />
                    </div>
                  ) : (
                    <h3 className="text-highlight">{price}</h3>
                  )}
                </div>
              );
            })
          ) : (
            <p className="px-7">No Products In Cart</p>
          )}
        </div>
      </ScrollContainer>
      <div className="card-padded flex flex-col gap-5" ref={footerRef}>
        {isPopup && (
          <p className="flex justify-between h3">
            Total: <span>${totalPrice.toFixed(2)}</span>
          </p>
        )}
        <button
          className="btn w-full"
          onClick={() => {
            navigate("/checkout");
            setCartOpen(false);
          }}
        >
          Proceed to checkout
        </button>
      </div>
    </Wrapper>
  );
};

export default ShoppingCart;
