import Overview from "./Overview";
import Features from "./Features";
import ProductPictures from "./ProductPictures";
import Recommended from "./Recommended";
import GoBack from "./GoBack";

export default function Product({ productArray }) {
  return (
    <div>
      <GoBack />
      <Overview productArray={productArray} />
      <Features productArray={productArray} />
      <ProductPictures productArray={productArray} />
      <Recommended productArray={productArray} />
    </div>
  );
}
