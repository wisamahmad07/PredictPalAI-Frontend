import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const useStoreRoute = () => {
  const storeRoutes = ["/shop", "/shop/brand", "/product"];
  const location = useLocation();
  const [isStoreRoute, setIsStoreRoute] = useState(false);

  useEffect(() => {
    setIsStoreRoute(
      storeRoutes.some((path) => location.pathname.includes(path))
    );

    return () => {
      setIsStoreRoute(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return isStoreRoute;
};

export default useStoreRoute;
