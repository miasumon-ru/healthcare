import Banner from "../../components/Banner/Banner";
import HealthStats from "../../components/HealthStats/HealthStats";
import Navbar from "../../components/Navbar/Navbar";


const Home = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Banner></Banner>
            <HealthStats></HealthStats>

            
        </div>
    );
};

export default Home;