import {Link} from 'react-router-dom'

function Contact() {
    return(
        <div>
            <Link to ="/"><button className=' bg-[#5f43b2] w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Go Back</button></Link>
            <h1 className = 'flex justify-center text-[#5f43b2] font-bold text-4xl'>CONTACT</h1>
            <hr></hr>
            <p className='text-white flex justify-center pt-2'>If you have questions regarding anything. There shouldnt be any questions because this page never went live.</p>
            <p className = 'text-white flex justify-center'>Hunter Martin approves this message</p>
            <Link to = "/rent"><button className='flex justify-center bg-[#5f43b2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Lets Start!</button></Link>
        </div>
    );
}

export default Contact;