import * as React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from "react";
import { FaChevronRight } from 'react-icons/fa'; 
 

export default function Cards({ Topic, text, Learn, Linkg, idrad, fesOne, sesOne }) { 
    return (
        <Fragment>
            <div className=" mt-20" id={fesOne}>
                <div class=" flex  flex-shrink flex-wrap px-6 md:px-12 py-12 md:py-24  bg-white shadow-xl shadow-black/50" id={idrad} >
                    <div className=" px-4 md:pl-12 text-white" id={sesOne}>
                        <div className="text-4xl font-bold ">
                            {Topic}
                        </div>
                        <div className="text-sm w-auto md:w-3/5 leading-loose  md:text-left mt-4 md:text-xl">
                            {text}
                        </div>
                        <div className="mt-4">
                            <Link to={`${ Linkg }`}>
                                <button class="flex items-center shadow-xl shadow-purple-600/50 text-black bg-white  hover:border hover:border-purple-600 hover:text-purple-500   px-4 md:px-3 py-2   transition duration-500 ease-in-out  transform hover:-translate-x-1 hover:scale-110   " title="Learn More">
                                    {Learn}
                                    <i className='pl-3'> <FaChevronRight />
                                    </i>
                                </button>

                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};