import Banner from "../../components/Banner/Banner";
import HealthStats from "../../components/HealthStats/HealthStats";
import Navbar from "../../components/Navbar/Navbar";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";


const Home = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Banner></Banner>
            <HealthStats></HealthStats>
            <WhoWeAre></WhoWeAre>

            
        </div>
    );
};

export default Home;