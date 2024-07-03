// import appointmentBanner from '../../assets/Rectangle 32.png'
import { MdOutlineArrowOutward } from 'react-icons/md';
import './Appointment.css'

import logoLight from '../../assets/logo light.png'


const Appointment = () => {
    return (
        <div className='my-20'>

            <div className="bannerAppointment relative rounded-3xl">

                <div className='w-[630px] p-10 absolute top-16'>
                    <p className='text-[40px] text-white'>Get Your <br />
                        First Appointment <br />
                        at 50% Off!</p>

                    <div className='flex flex-row gap-6'>

                        <p className=" bg-[#FFC637] mt-10 w-[158px] flex flex-row gap-2 items-center justify-center border-black rounded-lg py-2 px-4 font-semibold"> Appointment <MdOutlineArrowOutward className="text-xl" /> </p>

                        <p className="mt-10 w-[158px] flex flex-row gap-2 items-center justify-center border border-white rounded-lg py-2 px-4 font-semibold text-white"> Learn More <MdOutlineArrowOutward className="text-xl" /> </p>

                    </div>
                </div>

                <div className='absolute right-10 top-16'>
                    <img src={logoLight} alt="" />
                </div>


            </div>



        </div>
    );
};

export default Appointment;
