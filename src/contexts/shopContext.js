import { useState, createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useScrollLock from "@hooks/useScrollLock";

const ShopContext = createContext(undefined);

export const ShopProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([5, 9999]);

  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error reading cart from localStorage", error);
      return [];
    }
  });

  const [favList, setFavList] = useState(() => {
    try {
      const storedFavList = localStorage.getItem("favList");
      return storedFavList ? JSON.parse(storedFavList) : [];
    } catch (error) {
      console.error("Error reading favList from localStorage", error);
      return [];
    }
  });

  const location = useLocation();
  const setIsLocked = useScrollLock();

  useEffect(() => {
    setFiltersOpen(false);
  }, [location]);

  useEffect(() => {
    if (filtersOpen) {
      setIsLocked(true);
    } else {
      setIsLocked(false);
    }

    return () => {
      setIsLocked(false);
    };
  }, [filtersOpen, setIsLocked]);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to localStorage", error);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("favList", JSON.stringify(favList));
    } catch (error) {
      console.error("Error saving favList to localStorage", error);
    }
  }, [favList]);

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(categoryId)
        ? prevCategories.filter((id) => id !== categoryId)
        : [...prevCategories, categoryId]
    );
  };

  const resetCategory = () => {
    setSelectedCategories([]);
  };

  const updatePriceRange = (newRange) => {
    setPriceRange(newRange);
  };

  const toggleSize = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const resetSizes = () => {
    setSelectedSizes([]);
  };

  const toggleColor = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((s) => s !== color)
        : [...prevColors, color]
    );
  };

  const resetColors = () => {
    setSelectedColors([]);
  };

  const addToCart = (item, amount) => {
    setCart((prevCart) =>
      prevCart.some((product) => product.ProductID === item.ProductID)
        ? prevCart.map((product) =>
            product.ProductID === item.ProductID
              ? { ...product, amount: product.amount + amount }
              : product
          )
        : [...prevCart, { ...item, amount }]
    );
  };

  const updateCart = (itemId, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.ProductID === itemId ? { ...item, amount } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.ProductID !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const addToFavList = (item) => {
    setFavList((prevFavList) => [...prevFavList, item]);
  };

  const removeFromFavList = (itemId) => {
    setFavList((prevFavList) =>
      prevFavList.filter((item) => item.ProductID !== itemId)
    );
  };

  const clearFavList = () => {
    setFavList([]);
  };

  return (
    <ShopContext.Provider
      value={{
        cartOpen,
        setCartOpen,
        filtersOpen,
        setFiltersOpen,
        selectedCategories,
        toggleCategory,
        resetCategory,
        priceRange,
        updatePriceRange,
        selectedSizes,
        toggleSize,
        resetSizes,
        selectedColors,
        toggleColor,
        resetColors,
        cart,
        addToCart,
        updateCart,
        removeFromCart,
        clearCart,
        favList,
        addToFavList,
        removeFromFavList,
        clearFavList,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopProvider = () => useContext(ShopContext);
