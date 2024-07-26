import { Card } from "flowbite-react";
import animal1 from "../assets/dog1.jpeg"
import animal2 from "../assets/dog2.jpeg"
import animal3 from "../assets/kitty.webp"
import animal4 from "../assets/cat2.jpeg"
import animal5 from "../assets/bunny1.jpeg"

const animal1_obj = {
  name: "Ja Morant",
  location: "Garden City, Michigan",
  description: "Friendly dog looking for hugs!",
  ownerName: "Christian M." ,
  imageSrc: animal1 
}

const animal2_obj = {
  name: "Mr.Fluff",
  location: "Westland, Michigan",
  description: "Just looking for some chill friends",
  ownerName: "Mila M." ,
  imageSrc: animal2 
}

const animal3_obj = {
  name: "Mr.Kitty",
  location: "Ypsilanti, Michigan",
  description: "Mellow Kitty is my nickname. I like to kick back",
  ownerName: "Maxim B." ,
  imageSrc: animal3
}

const animal4_obj = {
  name: "John Wick",
  location: "Ann Arbor, Michigan",
  description: "I like catnips and cuddles",
  ownerName: "Kenny P." ,
  imageSrc: animal4
}

const animal5_obj = {
  name: "Macho",
  location: "Dearborn Heights, Michigan",
  description: "If I wasn't doing my fulltime job of sleeping I would eat",
  ownerName: "Tiler H." ,
  ImageSrc: animal5
}

function Cards() {
    return (
        <div className='w-full py-[5rem] px-4 bg-black'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-7'>
            <Card
            className='max-w-sm border border-[#5f43b2] rounded-lg overflow-hidden'
            imgAlt='Meaningful alt text for an image that is not purely decorative'
            imgSrc = {animal1}
            >
      <h1 className=' flex justify-center font-bold tracking-tight border border-[#5f43b2] text-[#5f43b2]'>{animal1_obj.name}</h1>
      <h5 className='text-medium font-bold tracking-tight text-black '>
        {animal1_obj.description}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
      <span className='font-bold text-[#5f43b2]'>Location: </span>{animal1_obj.location}
      </p>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
       <span className='font-bold text-[#5f43b2]'>Owner: </span> {animal1_obj.ownerName}
      </p>
      <button className=' bg-[#5f43b2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Rent Me!</button>
    </Card>

    <Card
            className='max-w-sm border border-[#5f43b2] rounded-lg overflow-hidden'
            imgAlt='Meaningful alt text for an image that is not purely decorative'
            imgSrc = {animal2}
            >
      <h1 className=' flex justify-center font-bold tracking-tight border border-[#5f43b2] text-[#5f43b2]'>{animal2_obj.name}</h1>
      <h5 className='text-medium font-bold tracking-tight text-black '>
        {animal2_obj.description}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
      <span className='font-bold text-[#5f43b2]'>Location: </span>{animal2_obj.location}
      </p>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
       <span className='font-bold text-[#5f43b2]'>Owner: </span> {animal2_obj.ownerName}
      </p>
      <button className=' bg-[#5f43b2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Rent Me!</button>
    </Card>

    <Card
            className='max-w-sm border border-[#5f43b2] rounded-lg overflow-hidden'
            imgAlt='Meaningful alt text for an image that is not purely decorative'
            imgSrc = {animal3}
            >
      <h1 className=' flex justify-center font-bold tracking-tight border border-[#5f43b2] text-[#5f43b2]'>{animal3_obj.name}</h1>
      <h5 className='text-medium font-bold tracking-tight text-black '>
        {animal3_obj.description}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
      <span className='font-bold text-[#5f43b2]'>Location: </span>{animal3_obj.location}
      </p>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
       <span className='font-bold text-[#5f43b2]'>Owner: </span> {animal3_obj.ownerName}
      </p>
      <button className=' bg-[#5f43b2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Rent Me!</button>
    </Card>

    <Card
            className='max-w-sm border border-[#5f43b2] rounded-lg overflow-hidden'
            imgAlt='Meaningful alt text for an image that is not purely decorative'
            imgSrc = {animal4}
            >
      <h1 className=' flex justify-center font-bold tracking-tight border border-[#5f43b2] text-[#5f43b2]'>{animal4_obj.name}</h1>
      <h5 className='text-medium font-bold tracking-tight text-black '>
        {animal4_obj.description}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
      <span className='font-bold text-[#5f43b2]'>Location: </span>{animal4_obj.location}
      </p>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
       <span className='font-bold text-[#5f43b2]'>Owner: </span> {animal4_obj.ownerName}
      </p>
      <button className=' bg-[#5f43b2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Rent Me!</button>
    </Card>

    <Card
            className='max-w-sm border border-[#5f43b2] rounded-lg overflow-hidden'
            imgAlt='Meaningful alt text for an image that is not purely decorative'
            imgSrc = {animal5}
            >
      <h1 className=' flex justify-center font-bold tracking-tight border border-[#5f43b2] text-[#5f43b2]'>{animal5_obj.name}</h1>
      <h5 className='text-medium font-bold tracking-tight text-black '>
        {animal5_obj.description}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
      <span className='font-bold text-[#5f43b2]'>Location: </span>{animal5_obj.location}
      </p>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
       <span className='font-bold text-[#5f43b2]'>Owner: </span> {animal5_obj.ownerName}
      </p>
      <button className=' bg-[#5f43b2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Rent Me!</button>
    </Card>

                </div>
            </div>
    ) ;
}

export default Cards;