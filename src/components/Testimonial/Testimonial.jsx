import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";


const Testimonial = () => {
    return (
        <div className="my-32">

            <div>
                <p className="border w-[134px] rounded-3xl flex flex-col justify-center items-center border-black font-medium p-2 px-3"> Testimonial </p>
                <h1 className="text-4xl font-semibold mt-4 mb-10"> What they say about us </h1>
            </div>

     
                <TestimonialSlider></TestimonialSlider>
   


        </div>
    );
};

export default Testimonial;