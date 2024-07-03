import Appointment from "../../components/Appointment/Appointment";
import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import HealthStats from "../../components/HealthStats/HealthStats";
import Navbar from "../../components/Navbar/Navbar";
import Service from "../../components/Navbar/Service";
import Testimonial from "../../components/Testimonial/Testimonial";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";


const Home = () => {
    return (
        <div>

            <Navbar ></Navbar>
            <Banner></Banner>
            <HealthStats></HealthStats>
            <WhoWeAre></WhoWeAre>
            <Service></Service>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Appointment></Appointment>
            <Footer></Footer>

            
        </div>
    );
};

export default Home;