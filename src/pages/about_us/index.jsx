import "./about_us.scss";
import image from "../../assets/Kiqa-logo-by-joao.png";
import { HeroImageHome } from "../../components/home_components/hero_image_home";
import { SocialBox } from "../../components/about_page/social-box";
import { Description } from "../../components/about_page/description";
import { Presentation } from "../../components/about_page/presentation";

export const AboutUs = () => {
  return (
    <div className="about_us">
      <div className="about_us_info">
        <Presentation/>
        <div className="center-icons">
          <div className="top">
            <img className="kiqa-logo" src={image} />
            <SocialBox />
          </div>
          <div className="bottom">
            <Description />
          </div>
        </div>
      </div>
      <HeroImageHome />
    </div>
  );
};
