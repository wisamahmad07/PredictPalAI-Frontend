// components
import Spring from "@components/Spring";

const ProductDetails = ({ product }) => {
  return (
    <Spring className="card flex flex-col gap-4 card-padded">
      <h3>Product Details</h3>
      <p className="line-clamp-6">{product.Description}</p>
    </Spring>
  );
};

export default ProductDetails;
