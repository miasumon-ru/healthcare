import { MdOutlineArrowOutward } from "react-icons/md";

import whoWeAreImage from '../../assets/Rectangle 24.png'


const WhoWeAre = () => {
    return (
        <div className="flex flex-row justify-between relative my-40">

            <div className="w-2/5">

                <div className="space-y-6">
                    <p className="border w-[140px] rounded-3xl flex flex-col justify-center items-center border-black font-medium p-2 px-3"> Who We Are </p>

                    <p className="font-semibold text-4xl text-[#020043]"> We Help To Get <br /> Soultions </p>

                    <p> We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                    </p>
                </div>


                <p className=" bg-[#FFC637] mt-10 w-[158px] flex flex-row gap-2 items-center justify-center border-black rounded-lg py-2 px-4 font-semibold">Learn More <MdOutlineArrowOutward className="text-xl" /> </p>
            </div>

            <div className="w-[568px] h-[415px]">

                <div className="w-[395px] h-[210px] absolute -bottom-8 right-64 bg-[#343268] rounded-3xl p-5 ">

                    <h1 className="text-2xl text-white mt-4 mb-6">Our mission is simple</h1>

                    <p className="text-[#FFFFFFCC]">To provide high-quality healthcare services <br /> that are accessible, personalized, and <br /> patient-centered.</p>

                </div>



                <img className="flex items-end" src={whoWeAreImage} alt="" />

            </div>

        </div>
    );
};

export default WhoWeAre;