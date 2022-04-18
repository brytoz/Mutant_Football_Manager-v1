import { Fragment } from "react";




export default function Cardimg2({imgs, oped})  {
    return (
        <Fragment>
            <div class="w-full md:1/2  mt-12">
                <div class="flex justify-center items-center  ">
                    <div className="border border-red-100/[.09]  p-3 bg-black-200">
                        <img src={imgs} alt='Mutant NFT' className='w-48  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110   ' />
                        <div className="mt-4 00 ">
                            <button class=" text-white bg-gray-700 w-full   hover:bg-white hover:border hover:border-gray-700 hover:text-black  px-4 md:px-3 py-1.5  
                                            transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110   " title="Nft Character">
                               {oped}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>

    );
}