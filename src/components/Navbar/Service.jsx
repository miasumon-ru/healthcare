import { MdOutlineArrowOutward } from "react-icons/md";

import heartImage from '../../assets/Rectangle 27.png'
import doctorImage from '../../assets/Rectangle 27-1.png'
import womenImage from '../../assets/Rectangle 27-2.png'


const Service = () => {
    return (
        <div className="grid grid-cols-2 gap-10 mb-16 bg-[#FFFFF5] p-5 rounded-3xl">

            {/* first card */}

            <div className="">

                {/* content */}

                <div className="space-y-6">
                    <p className="border w-[105px] rounded-3xl flex flex-col justify-center items-center border-black font-medium p-2 px-3"> Service </p>

                    <p className="font-semibold text-4xl text-[#020043]"> Empowering Health, <br />  Enriching Lives </p>

                    <p> We are committed to providing high-quality, <br /> compassionate care to every patient we serve. <br /> Whatever your healthcare needs may be, you can trust <br /> us to be your partner in health and wellness.
                    </p>
                </div>


                <p className=" bg-[#FFC637] mt-10 w-[158px] flex flex-row gap-2 items-center justify-center border-black rounded-lg py-2 px-4 font-semibold">Learn More <MdOutlineArrowOutward className="text-xl" /> </p>
            </div>

            {/* second card */}

            <div className="relative">

                {/* content */}

                <div className="w-[321px] h-[144px] opacity-60 absolute bottom-4 left-4 bg-[#020043] rounded-3xl p-5 ">

                    <div className="relative">

                        <div>
                            <h1 className="text-xl text-white ">Advanced Technology</h1>

                            <p className="text-[#FFFFFFCC] text-xs mt-2">Our surgeons are trained in the latest <br /> robotic surgical techniques, which <br /> allow for greater precision</p>
                        </div>

                        <div className="absolute right-0 -bottom-4">

                            <p><MdOutlineArrowOutward className="bg-[#FFC637] text-white p-2 w-8 h-8 rounded-full" /></p>

                        </div>



                    </div>



                </div>

                {/* image */}


                <img className="rounded-3xl" src={heartImage} alt="" />

            </div>

            {/* third card */}

            <div className="relative">

                {/* content */}

                <div className="w-[321px] h-[144px] opacity-60 absolute bottom-4 left-4 bg-[#020043] rounded-3xl p-5 ">

                    <div className="relative">

                        <div>
                            <h1 className="text-xl text-white ">Online Doctor Meet</h1>

                            <p className="text-[#FFFFFFCC] text-xs mt-2">Our surgeons are trained in the latest <br /> robotic surgical techniques, which <br /> allow for greater precision</p>
                        </div>

                        <div className="absolute right-0 -bottom-4">

                            <p><MdOutlineArrowOutward className="bg-[#FFC637] text-white p-2 w-8 h-8 rounded-full" /></p>

                        </div>



                    </div>



                </div>

                {/* image */}

                <img className="rounded-3xl" src={doctorImage} alt="" />
            </div>

            {/* fourth card */}

            <div className="relative">

                {/* content */}

                <div className="w-[321px] h-[144px] opacity-60 absolute bottom-4 left-4 bg-[#020043] rounded-3xl p-5 ">

                    <div className="relative">

                        <div>
                            <h1 className="text-xl text-white ">Consultancy your health</h1>

                            <p className="text-[#FFFFFFCC] text-xs mt-2">Our surgeons are trained in the latest <br /> robotic surgical techniques, which <br /> allow for greater precision</p>
                        </div>

                        <div className="absolute right-0 -bottom-4">

                            <p><MdOutlineArrowOutward className="bg-[#FFC637] text-white p-2 w-8 h-8 rounded-full" /></p>

                        </div>



                    </div>



                </div>

                {/* image */}

                <img className="rounded-3xl" src={womenImage} alt="" />
            </div>



        </div>
    );
};

export default Service;