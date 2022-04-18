import React, { Component, Fragment } from 'react';
import { FaDiscord } from "react-icons/fa";
import {  GrMedium } from "react-icons/gr";
import {  FaPodcast } from "react-icons/fa";
import {  FaTwitch } from "react-icons/fa";
import {  AiOutlineGithub } from "react-icons/ai";


export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer class=" bg-gray-900 w-full  pb-4 pt-8 md:mt-20 " style={{ backgroundColor: '#111111' }}>
                    <div class="text-center md:text-left md:px-24 ">
                        <div class="flex-wrap md:flex">

                            <div class=" md:w-1/3 lg:w-1/4 text-white">
                                <div class="text-4xl font-bold">
                                    MFM
                                </div>
                                <div>
                                    Football Manager
                                </div>
                            </div>

                            <div class="w-full md:inline-block md:w-1/3 lg:w-1/4 text-white">

                                <hr class=" opacity-25 bg-gray-900 mt-6 md:hidden" />
                            </div>

                            <div class="w-full md:w-1/3 lg:w-1/4 mt-12 md:mt-0 rounded-full pl-12 md:pl-0">
                                <div class="font-bold flex-grow justify-center items-center text-2xl text-white">
                                   Our Channels 
                                   
                                    <div className='pt-4 flex justify-center inline'>
                                        <ul className='flex justify-center space-x-5'>
                                            <li className='pr-1'> <a href='https://discord.gg/NAKPcxaS' title='Join discord Channel'>  <FaDiscord /> </a></li>
                                            <li className='pr-1'> <a href='https://mutantfootballmanager.medium.com/' title='Read on Medium'>  <GrMedium /> </a></li>
                                            <li className='pr-1'> <a href='https://talk.harmony.one/t/mutant-football-manager/16540?u=cry8' title='Harmony Talk'>  <FaPodcast /> </a></li>
                                            <li className='pr-1'> <a href='https://twitch.tv/mutantfootballmanager' title='Harmony Talk'>  <FaTwitch /> </a></li>
                                            <li className='pr-1'> <a href='https://github.com/Cry8/Mutant_Football_Manager' title='Github Reposity'>  <AiOutlineGithub /> </a></li>
                                        </ul> 
                                    </div>
                                </div>

                            </div>
 

                        </div>

                        <div class="wow bounceInUp flex flex-wrap items-center justify-center py-4 text-center text-white">


                        </div>
                        <hr class=" opacity-75 backdrop-filter backdrop-opacity-80 bg-gray-900 " />
                        <div class="pt-12 font-medium text-blue-500 text-center">
                            &copy; Mutant 2021
                        </div>
                    </div>
                </footer>
            </Fragment>
        )
    }
}
