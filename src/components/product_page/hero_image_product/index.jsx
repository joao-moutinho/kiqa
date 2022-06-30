import "./hero_image_products.scss";

export const HeroImageProduct = ({ img }) => {
  return (
    <div className="image-handler">
      <img
        className="hero-image-product"
        src={img}
      ></img>
    </div>
  );
};
