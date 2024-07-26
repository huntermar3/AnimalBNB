import animal from '../assets/animal-safety.jpeg'
import {Link} from 'react-router-dom'

function Safety() {
return (
    <div className='w-full bg-white py-15 px-3'>
        <div className = 'max-w-[1240px] mx-auto grid md:grid-cols-2' >
            <img className = 'w-[500px] mx-auto my-4' src = {animal} alt = "animal" ></img>
            <div className='flex flex-col justify-center'>
                <p className='text-[#5f43b2] font-bold '>ANIMAL SAFETY</p>
                <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>We take animal safety very seriously.</h1>
                <p>Any misconduct of any kind with the animals will have serious consequences. Please refer to <Link to = '/privacy'><span className='text-[#5f43b2]'>Misconduct forum</span></Link></p>
                <Link to = "/rent"><button className='flex justify-center bg-[#5f43b2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Lets Start!</button></Link>
            </div>
        </div>

    </div>
);
}
 
export default Safety ;