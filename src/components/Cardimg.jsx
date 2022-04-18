import React, { Fragment } from 'react'
import Cardimg2 from './Cardimg2'
import ass1 from "../assets/mutantone.png";
import ass2 from "../assets/mutanttwo.png";
import ass3 from "../assets/mutantthree.png";

export default function Cardimg(){
    return (
        <Fragment>

            <div className='my-12 mx-6'>
                <div className='w-full flex  '>
                    <div className='w-full  xs:flex-wrap md:flex justify-center '>

                         <Cardimg2 imgs={ass1} oped=" Kaang MFM " />
                         <Cardimg2 imgs={ass2} oped=" Oduduwa MFM " />
                         <Cardimg2 imgs={ass3} oped=" Sango MFM " />  

                    </div>
                </div>
            </div>

        </Fragment>
    )
}

