import {Link} from 'react-router-dom' ;


function About() {
    return(
        <div>
            <Link to ="/"><button className=' bg-[#5f43b2] w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Go Back</button></Link>
            <h1 className='font-bold flex justify-center text-[#5f43b2] text-4xl py-5;'>ABOUT ANIMALBNB</h1>
            <hr></hr>
            <p className='text-white py-5'>AnimalBNB was created by Hunter Martin. I created this app during my time at Eastern Michigan University. I am currently studying Computer Science. After being inspired by the popular app 'AirBNB'. I realized we needed something to rent animals. Some people may not have anyone to vent to. Those same people may not be able to own an animal of their own.</p>
            <p className='text-white'>I want people to experience the unconditonal love an animal can bring. An animal does not judge.</p>
            <Link to = "/rent"><button className='flex justify-center bg-[#5f43b2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Lets Start!</button></Link>
        </div>
    );
}

export default About;