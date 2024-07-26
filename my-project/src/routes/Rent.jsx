import {Link} from 'react-router-dom'
import Cards from '../comps/Cards.jsx'


function Rent() {
    return(
        <div>
            <Link to ="/"><button className=' bg-[#5f43b2] w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Go Back</button></Link>
            <h1 className = 'flex justify-center text-[#5f43b2] font-bold text-4xl'>RENTING</h1>
            <hr></hr>
            <Cards/>
        </div>
    );
}

export default Rent;