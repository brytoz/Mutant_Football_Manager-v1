import React, { Fragment, useEffect, useState } from 'react'
import imgV from '../assets/ball.png';
import { gsap } from 'gsap';
//import { GiCrystalShine } from "react-icons/gi";
import { BiFootball } from 'react-icons/bi';

export default function Progress({ max }) {



    const [value, setValue] = useState(0);

    useEffect(() => {

        const run = setInterval(() => {
            setValue(oldValue => {
                const newValue = oldValue + 10;

                if (newValue === 100) {
                    clearInterval(run);
                }

                return newValue;
            })
        }, 1000);

    }, []);

    useEffect(() => {

        gsap.from('.welcomee', { duration: 1, opacity: 0, delay: 1, stagger: .5 });

    });
    gsap.to(".roll", { rotation: 360, duration: 100 });

    return (
        <Fragment>
            <div id="grass" className="h-screen flex justify-center items-center text-white">
                <div className="flex-wrap justify-center text-center text-3xl md:text-5xl block ">
                    <div className=' font-bold md:font-extrabold     text-white '>
                        MUTANT <br /> FOOTBALL  MANAGER
                    </div>
                    <div className='flex justify-center font-bold pb-3 tracking-wide'>
                        <img src={imgV} alt="Loader" className='roll' /> {value}  %
                    </div>
                    <div className='flex justify-center items-center'>
                        <BiFootball />
                        <progress value={value} max={100}>
                        </progress>
                        <BiFootball />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
