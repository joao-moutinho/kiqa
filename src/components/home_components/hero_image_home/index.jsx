import { InView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import heroimage from "../../../assets/hero-image-home.jpg";
import "./heroimagehome.scss";

export const HeroImageHome = ({ setHeaderState }) => {
  const navigate = useNavigate();

  return (
    <InView
      as="div"
      onChange={setHeaderState}
      className="hero-image-wrapper"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      <div
        className="hero-image-text"
        style={{ backgroundImage: `url(${heroimage})` }}
      >
        <h2>
          <i>Makeup is an ArtForm</i>
        </h2>

        <p>
          Together we’re building a safe, welcoming space in beauty and beyond.
          This is makeup made to feel good in, without hiding what makes you
          unique. And it’s all vegan and cruelty free.
        </p>
        <div className="hero-img-btn">
          <button onClick={() => navigate("/products")}>JOIN US</button>
        </div>
      </div>
    </InView>
  );
};
