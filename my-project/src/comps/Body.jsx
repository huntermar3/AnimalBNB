import React from 'react'
import { ReactTyped } from "react-typed";
import {Link} from 'react-router-dom' ;

function Body() {
return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#5f43b2] font-bold p-2 '>NEED COMFORT OF A PET?</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Rent any domesticated animal!</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Safe, and affordable! Choose  </p>
                <ReactTyped className = 'md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-[#5f43b2]' strings = {[
                    'Dog' ,
                    'Cat' ,
                    'Bird' ,
                    'Bunny'
                ]}
                typeSpeed = {130} 
                backSpeed = {150}
                loop 
                />
            </div>
            <Link to = "/rent"><button className='flex justify-center bg-[#5f43b2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Lets Start!</button></Link>
        </div>
    </div>
) ;
}

export default Body ;