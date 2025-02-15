import React from "react";

import { useGetProductsQuery } from "@api/eCommerce/eCommerceApi";

import SimpleProduct from "@components/SimpleProduct";

const SimpleProductsGroup = () => {
  const { data, error, isLoading } = useGetProductsQuery({
    keyword: "",
    page: 1,
    length: 2,
    sizes: [],
    colors: [],
    brands: [],
    categories: [],
    priceRange: [5, 9999],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid gap-5 h-full">
      {data &&
        data.data.rows?.map((product) => (
          <SimpleProduct key={product.id} product={product} />
        ))}
    </div>
  );
};

export default SimpleProductsGroup;
