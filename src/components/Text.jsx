import React, { Fragment } from 'react'


export default function Text({one, two}) {
    return (
        <Fragment>
            <div className='mt-20 mx-4 md:mx-20 text-white'>
                <div className='font-extrabold text-2xl md:text-3xl tracking-wider'>
               {one}
                </div>
                <div className='mt-3 md:mt-4 md:text-xl leading-normal tracking-wide'> 
                   {two}
                </div>

            </div>
        </Fragment>
    );
}