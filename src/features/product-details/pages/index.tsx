import { useParams } from "react-router-dom";
import ProductDetails from "../product-details";

function ProductDetailsPage() {
  const { id } = useParams();
  return <ProductDetails />;
}

export default ProductDetailsPage;
