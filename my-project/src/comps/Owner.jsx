import {Link} from 'react-router-dom'

function Owner(){
    return (
        <div className='w-full py-16 text-black bg-white'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to become a renter?</h1>
                    <p>Please enter your email to be informed about being a renter!</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black border border-black' type = "email" placeholder='Please enter an email'></input>
                        <button className='bg-[#5f43b2] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-white'>Send</button>
                    </div>
                    <p>Your privacy is a main priority. <Link to = '/privacy'><span className='text-[#5f43b2]'>Privacy Policy</span></Link></p>
                </div>
            </div>
        </div>
    ) ;
}
export default Owner; 