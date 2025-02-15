import React from "react";
import { useParams } from "react-router-dom";

import PageHeader from "@layout/PageHeader";
import AppGrid from "@layout/AppGrid";
import ProductDisplay from "@widgets/ProductDisplay";
import ProductDetails from "@widgets/ProductDetails";
import ProductAdditionalInfo from "@widgets/ProductAdditionalInfo";
import StoreSupport from "@widgets/StoreSupport";
import Reviews from "@widgets/Reviews";
import ProductRowCardList from "@widgets/ProductRowCardList";
import { useGetProductByIDQuery } from "@api/eCommerce/eCommerceApi";

const ClubSummary = () => {
  const { id } = useParams();

  const { data: productInfo, error, isLoading } = useGetProductByIDQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product information.</div>;
  }

  const widgets = {
    product_display: <ProductDisplay product={productInfo.data} />,
    product_details: <ProductDetails product={productInfo.data} />,
    product_additional: <ProductAdditionalInfo product={productInfo.data} />,
    support: <StoreSupport />,
    reviews: <Reviews standalone reviews={productInfo.data.ProductReviews} />,
    products_list: (
      <ProductRowCardList
        isSlider
        relatedProducts={productInfo.data.relatedProducts}
      />
    ),
  };

  return (
    <>
      <PageHeader title="Product Page" />
      <AppGrid id="product" widgets={widgets} />
    </>
  );
};

export default ClubSummary;
