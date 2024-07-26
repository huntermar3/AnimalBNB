import {Link} from 'react-router-dom'

function AreYouReady(){
    return (
        <div className= 'text-white font-bold w-full py-16 px-10' >
            <h1 className='text-4xl'>What are you waiting for??!</h1>
            <p className='font-bold text-[#5f43b2] text-2xl'>Let find a pet perfect for you</p>
            <Link to = "/rent"><button className='flex justify-center bg-[#5f43b2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Lets Start!</button></Link>
        </div>
    
    ) ;
}

export default AreYouReady ;