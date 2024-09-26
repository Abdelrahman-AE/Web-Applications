import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaClock, FaUser } from "react-icons/fa"
import SideBar from '../components/SideBar';


const SingleBlog = () => {
    const data = useLoaderData();
    const { title, image, category, author, published_date, reading_time, content } = data[0];
  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
      </div>

      {/* blog details */}
      <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12 '>
        <div className='lg:w-3/4 mx-auto'>
          <div>
            <img src={image} alt="" className='w-full mx-auto rounded '/>
          </div>
          <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
          <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>    
          <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>    
          <p className='text-base text-gray-500 mb-6'>{content}</p>
          <div className='text-base text-gray-500 mb-6'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit animi repellendus at iusto aliquam provident 
              consequuntur omnis, in cumque laudantium atque doloremque praesentium nam dolorum ab eius recusandae hic dolor?</p> <br/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam architecto, possimus facere distinctio 
              inventore eum voluptatem doloremque iure facilis optio maxime, sit sint veniam. Ut nam ducimus vel fuga?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quisquam vel culpa distinctio deserunt 
              non debitis cum vero quos et ea totam minus itaque quia modi impedit, sint, facere ut?</p>
          </div>
        </div>
        <div className='lg:w-1/2 '>
          <SideBar/>
        </div>
      </div>
      
    </div>
  )
}

export default SingleBlog
