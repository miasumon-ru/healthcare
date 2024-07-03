import pieChart from '../../assets/icons8-pie-chart-94.png'
import badge from '../../assets/icons8-badge-48.png'
import groupPeople from '../../assets/icons8-group-32.png'
import money from '../../assets/icons8-money-50.png'
import star from '../../assets/icons8-star-48.png'
import video from '../../assets/icons8-video-48.png'


const HealthStats = () => {
    return (
        <div className="relative bg-[#FBFBFB] rounded-3xl mt-12 max-w-6xl mx-auto">

            <div className="grid grid-cols-5 gap-4  ">

                {/* first card */}

                <div className="w-[216px] rounded-3xl h-[312px] bg-white border" >

                    <div className='p-4'>
                        <h1 className="text-5xl font-bold mb-3"> 90% </h1>
                        <p className='font-medium'>Patient satisfaction <br /> rate, reflecting our <br /> commitment.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <img className='w-32' src={pieChart} alt="" />
                    </div>

                </div>

                {/* second card */}

                <div className="w-[216px] p-4 rounded-3xl bg-[#FFFFF5] relative top-[121px]  h-[190px] border">

                    <div className=''>
                        <h1 className="text-5xl font-bold mb-3"> 500+ </h1>

                        <p className='font-medium'> Board-certified <br /> doctors </p>
                    </div>

                    <div className='flex justify-end'>
                        <img className='w-14' src={badge} alt="" />
                    </div>

                </div>

                {/* third card */}

                <div className="w-[216px] rounded-3xl p-4 bg-white relative top-[148px]  h-[162px] border">

                    <div className=''>
                        <div className='flex flex-row gap-2 items-center'>
                            <h1 className="text-5xl font-bold mb-3"> 4.8  </h1>
                            <img src={star} alt="" />
                        </div>

                        <p className='font-medium'> Over 20,000 Patient </p>

                        <img className='w-14 ' src={groupPeople} alt="" />
                    </div>



                </div>

                {/* fourth card */}

                <div className="w-[216px] rounded-3xl p-4 bg-[#FFFFF5] relative top-[121px] h-[190px] border">

                    <div className=''>
                        <h1 className="text-5xl font-bold mb-3"> $5000 </h1>

                        <p className='font-medium'> Money spend <br />
                            for poor patient </p>
                    </div>

                    <div className='flex justify-end'>
                        <img className='w-14' src={money} alt="" />
                    </div>


                </div>

                {/* fifth card */}


                <div className="w-[216px] rounded-3xl bg-white h-[312px] border">
                    <div className='p-4'>
                        <h1 className="text-5xl font-bold mb-3"> 50+ </h1>
                        <p className='font-medium'>Free lession video <br />
                            for patient</p>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <img className='w-32 rounded-3xl' src={video} alt="" />
                    </div>
                </div>

            </div>

            {/* Stats Title */}

            <div className="w-532px text-5xl top-0 left-80 p-2 font-semibold absolute ">

                <p className="text-center "> Comprehensive Care <br />

                    for Every Patient

                </p>

            </div>


        </div>
    );
};

export default HealthStats;