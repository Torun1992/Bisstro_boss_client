import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Fetured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            heading="Featured Item"
            subHeading="Check it out"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12  px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase"></p>
                    <p>Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, provident repellendus! Quis sint, minima suscipit architecto eos odio aut voluptatum, veniam esse totam et alias voluptate recusandae accusamus dolor error corrupti fuga ab saepe. Tenetur, fugiat ipsa excepturi et, illum odio praesentium maxime impedit quod obcaecati rem consequuntur repellat incidunt.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Fetured;