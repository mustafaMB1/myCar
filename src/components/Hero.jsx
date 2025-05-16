import React from 'react';
import hero from '../assets/hero2.png'
import wave from '../assets/wave.png'

const Hero = () => {
    return (
        // <section className="relative h-[90vh] w-full mt-16 ">
        //     <img
        //         src={hero}
        //         alt="Car Background"
        //         className="w-full h-full object-cover object-center"
        //     />

        //     <div className="absolute inset-0 bg-black bg-opacity-85"></div>

        //     <div className="absolute inset-0 flex flex-col justify-center  px-10">
        //         <h1 className="text-Myprimary text-4xl sm:text-5xl lg:text-8xl font-bold max-w-lg ">
        //             Find A Car
        //         </h1>
        //         <h2 className="text-white text-2xl sm:text-2xl lg:text-4xl font-bold max-w-lg ">Quick And Super Easy!</h2>
        //     </div>
        // </section>

        <section className="relative h-[90vh] w-full mt-16 bg-[#232321] flex items-center px-6 flex-col-reverse lg:flex-row justify-between overflow-hidden">

            <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-start gap-6 z-30">
                <h1 className="text-Myprimary text-4xl sm:text-5xl lg:text-7xl font-bold">
                    Find A Car
                </h1>
                <h2 className="text-white text-2xl sm:text-2xl lg:text-4xl font-bold">
                    Quick And Super Easy!
                </h2>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center z-30">
                <img
                    src={hero}
                    alt="Car Background"
                    className="max-w-full max-h-[80vh] object-contain"
                />
            </div>

            <img
                src={wave}
                alt="Wave Decoration"
                className="absolute bottom-0 left-0 w-full object-cover pointer-events-none z-0"
            />
        </section>



    );
}

export default Hero;
