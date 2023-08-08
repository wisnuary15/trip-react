import React from "react";

const Plan = () => {
    return(
        <div className="max-w-[1400px] m-auto py-10 px-4 grid lg:grid-cols-2 gap-4">
        {/* Left side */}
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
            <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1594471204420-0efa37bc6dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1104&q=80" alt="/" />
            <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1579340888456-d50f716d20c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="/" />
            <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1515932600702-e7937d80ed22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1463&q=80" alt="/" />
            <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1520038569969-98da7959fcbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" alt="/" />
            <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1469967700385-5b0140e16e33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="/" />
        </div>
            <div className=" flex flex-col h-full justify-center">
                <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
                <p className="text-2xl py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p className="pb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo tempore qui itaque repudiandae?</p>
                <div>
                    <button className="border-black mr-4 hover:shadow-xl">Learn More</button>
                    <button className="bg-black text-white border-black hover:shadow-xl">Book Your Trip</button>
                </div>
            </div>
        </div>
    )
}

export default Plan;