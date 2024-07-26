import {Link} from 'react-router-dom'

function Privacy() {
    return(
    <div>
        <Link to ="/"><button className=' bg-[#5f43b2] w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Go Back</button></Link>
        <h1 className='flex justify-center font-bold text-4xl text-[#5f43b2]'>PRIVACY AND MISCONDUCT</h1>
        <hr></hr>
        <p className='flex justify-center text-white'>In common with other websites, log files are stored on the web server saving details such as the visitor's IP address, browser type, referring page and time of visit.

Cookies may be used to remember visitor preferences when interacting with the website.

Where registration is required, the visitor's email and a username will be stored on the server.

The information is used to enhance the vistor's experience when using the website to display personalised content and possibly advertising.

E-mail addresses will not be sold, rented or leased to 3rd parties.

E-mail may be sent to inform you of news of our services or offers by us or our affiliates.

If you have subscribed to one of our services, you may unsubscribe by following the instructions which are included in e-mail that you receive.

You may be able to block cookies via your browser settings but this may prevent you from access to certain features of the website.
    </p>
    <h2 className='text-[#5f43b2] font-bold text-2xl'>IF THERES ANY EVIDENCE OF ABUSE OR MISCONDUCT WITH THE ANIMALS. THE COPS WILL FIND YOU AND BE SLAMMED WITH CONSEQUENCES</h2>
    <Link to = "/rent"><button className='flex justify-center bg-[#5f43b2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Lets Start!</button></Link>
    </div>
    );
}

export default Privacy