import { FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import lightLogo from '../../assets/logo light.png'

const Footer = () => {
    return (
        <div>

            <footer className="footer bg-[#020043] text-[#FFFFF5] h-[442px] pl-[195px] pt-[174px]">
                <aside>

                    <img className='mb-6' src={lightLogo} alt="" />

                    <p>
                        123 Main Street Anytown, USA <br /> Postal Code: 12345 <br /> <br />
                        
                        Support: support@oyolloo.com <br />
                        (Available : 10:00am to 07:00pm)
                                            </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Home</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Success Page</a>
                    <a className="link link-hover">Terms and Conditions</a>
                  
                </nav>
                <nav>
                    <h6 className="footer-title">Service</h6>
                    <a className="link link-hover">Scheduling</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Patient Portal</a>
                 
                </nav>
                <nav>
                    <h6 className="footer-title"> Follow Us</h6>

                    <div className='flex flex-row gap-6'>
                        <FaFacebook className='w-6 h-6'></FaFacebook>
                        <FaInstagram className='w-6 h-6'></FaInstagram>
                        <FaLinkedin className='w-6 h-6'></FaLinkedin>
                        <FaYoutube className='w-6 h-6'></FaYoutube>

                    </div>

                    <p className='mt-10 flex flex-row items-center gap-2'> <FaCopyright> </FaCopyright> Doctor Plus 2024 </p>
                 
                </nav>
            </footer>



        </div>
    );
};

export default Footer;