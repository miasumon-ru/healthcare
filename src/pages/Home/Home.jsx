import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";
import HealthStats from "../../components/HealthStats/HealthStats";
import Navbar from "../../components/Navbar/Navbar";
import Service from "../../components/Navbar/Service";
import Testimonial from "../../components/Testimonial/Testimonial";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";


const Home = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Banner></Banner>
            <HealthStats></HealthStats>
            <WhoWeAre></WhoWeAre>
            <Service></Service>
            <Testimonial></Testimonial>
            <Faq></Faq>

            
        </div>
    );
};

export default Home;