import React from 'react'

const Landing = () => {

    const stars = new Array(250).fill(0)



    return (
        <div style={{ height: "100vh" }} className="relative flex justify-center items-center bg-gradient-to-b from-sky-900 to-purple-500 ">

            {
                stars.map((star, index) => (
                    <span style={{ top: (Math.random() * 100).toString() + "%", left: (Math.random() * 100).toString() + "%" }}
                        key={index}
                        className="absolute animate-pulse bg-white h-[2px] w-[2px] rounded-full"></span>
                ))
            }
            {
                stars.map((star, index) => (
                    <span style={{ top: (Math.random() * 100).toString() + "%", left: (Math.random() * 100).toString() + "%" }}
                        key={index}
                        className="absolute animate-twinkling-star bg-white h-1 w-1 rounded-full"></span>
                ))
            }

            <p className = "font-lexend text-6xl text-center text-white">Divyank Shah<br/><p className='text-3xl mt-3'>Aspiring Software Engineer</p></p>


        </div>
    )
}

export default Landing