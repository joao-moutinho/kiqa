import { useOutletContext } from "react-router-dom";
import { AboutHeroImg } from "../../components/home_components/about_hero_img";
import { BrandsGrid } from "../../components/home_components/brands_grid";
import { HeroImageHome } from "../../components/home_components/hero_image_home";
import { LastestProds } from "../../components/home_components/lastest_prods";
import "./home.scss";

export const Home = () => {
  const { setHeaderState } = useOutletContext();

  return (
    <div className="home-wrapper">
      <HeroImageHome setHeaderState={setHeaderState}></HeroImageHome>
      <LastestProds></LastestProds>
      <AboutHeroImg></AboutHeroImg>
      <BrandsGrid></BrandsGrid>
    </div>
  );
};
