import React from "react";

const Rooms = () => {
    return (
        <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
        {/* Bagian kiri */}
        <div className="lg:top-20 relative lg:col-span-1 col-span-2">
            <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
            <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, alias.</p>
        </div>
        
        {/* Bagian kanan */}
        <div className="grid grid-cols-2 col-span-2 gap-2">
            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="/" />
            <img className="row-span-2 object-cover w-full h-full" src="https://images.unsplash.com/photo-1582880421648-a7154a8c99c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" alt="/" />
            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="/" />
        </div>
    </div>    
    )
}

export default Rooms;