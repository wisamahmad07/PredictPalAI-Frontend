// components
import Spring from "@components/Spring";
import ProductInfoItem from "@components/ProductInfoItem";

const ProductAdditionalInfo = ({ product }) => {
  return (
    <Spring className="card flex flex-col gap-4 card-padded">
      <h3>Additional Information</h3>
      <ul className="flex flex-col gap-2">
        <ProductInfoItem property="Brand:" value={product.Brand.Name} />
        <ProductInfoItem property="Color:" value={product.Colors.map((color) => color.Color).join(", ")} />
        <ProductInfoItem property="Fabric:" value={product.Material} />
        <ProductInfoItem property="Return Policy:" value={`${product.ReturnPolicy} days`} />
      </ul>
    </Spring>
  );
};

export default ProductAdditionalInfo;
