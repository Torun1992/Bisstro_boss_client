import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Fetured from "../Featured/Fetured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonals from "../Testimonials/Testimonals";
import Category from "./Categoey/Category";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Fetured></Fetured>
      <Testimonals></Testimonals>
    </div>
  );
};

export default Home;
