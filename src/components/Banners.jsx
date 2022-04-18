import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

export default function Banners({ title, info, imageid }) {
    return (
        <Fragment>
            <section>
                <div class="w-full hidden md:block w-full md:w-1/3 m-4 md:m-12">
                    <Link to="/">
                        <button class="bg-white text-black shadow-xl text-lg shadow-red-900/50 px-12 md:px-6 py-2 md:py-1  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110 font-bold" >
                            Go Back
                        </button>
                    </Link>
                </div>
                <div className="w-full bg-purple-200" id={imageid}>
                    <div className='flex justify-center py-60 md:p-60 '>
                        <div className='text-4xl md:text-6xl font-extrabold text-white   flex justify-center items-center'>
                            {title}
                        </div>
                    </div>
                </div>
                <div className='my-6 mx-8 md:mx-12 '>
                    <div className='pt-12 text-white leading-loose'>
                        {info}
                    </div>
                </div>
            </section>
        </Fragment>
    );
}