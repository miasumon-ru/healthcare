

const Faq = () => {
    return (
        <div className="my-32">


            <div>
                <p className="border w-[77px] rounded-3xl flex flex-col justify-center items-center border-black font-medium p-2 px-3"> Faq </p>
                <h1 className="text-4xl font-semibold mt-4 mb-10"> Frequntly Asked Question </h1>
            </div>

            {/* accordian */}

            <div className="join join-vertical w-full space-y-2">
                <div className="collapse collapse-arrow join-item border-base-300 border bg-[#FFFFF5]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium"> What are your office hours?</div>
                    <div className="collapse-content bg-white">
                        <p className="text-[14px]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border bg-[#FFFFF5] rounded-3xl">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How can I schedule an appointment?</div>
                    <div className="collapse-content">
                        <p> Content Coming </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-base-300 border bg-[#FFFFF5]">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Do you accept insurance?</div>
                    <div className="collapse-content">
                        <p>Content Coming</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border bg-[#FFFFF5]">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What should I bring to my appointment??</div>
                    <div className="collapse-content">
                        <p>Content Coming</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border bg-[#FFFFF5]">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Do you offer telemedicine appointments??</div>
                    <div className="collapse-content">
                        <p>Content Coming</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Faq;