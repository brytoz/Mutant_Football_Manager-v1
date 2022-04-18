import * as React from 'react'
import { Fragment } from 'react'
import Cards from './Cards'
import Nav from './Nav'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import goalie from '../assets/pitch.png'
import Footer from './Footer'
import { GrGamepad } from 'react-icons/gr'
import { Link } from 'react-router-dom'
//import { BiFootball } from 'react-icons/bi';

gsap.registerPlugin(ScrollTrigger)

export default function Landing() {
  const metaMask = () => {
    let provider = window.ethereum

    if (typeof provider !== 'undefined') {
      provider
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          console.log('Connected')
        })
        .catch((err) => {
          console.log('Not connected')
        })
    } else {
      console.log('Metamask Not detatcted')
    }
  }

  useEffect(() => {
    gsap.from('.welcomee', { duration: 1, opacity: 0, delay: 1, stagger: 0.5 })

    gsap.from('#firstOne', {
      duration: 3,
      y: '100',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '#sesOne',
        start: 'top 90%',
        end: 'bottom 0%',
        toggleActions: 'restart  complete reverse reset',
      },
    })
  })

  return (
    <Fragment>
      <section id="landin">
        <Nav />

        <div class="bg-transparent shadow-lg shadow-blue-900/50 ">
          <div class="py-24 leading-loose lg:p-32 md:pt-48 md:pb-52 flex justify-center items-center  ">
            <div class="w-full lg:flex justify-center lg:w-4/6">
              <div class="px-4 md:px-0 text-white text-center lg:text-left    wow fadeIn">
                <span className=" responsive px-2 md:px-0 leading-relaxed text-3xl md:text-6xl font-extrabold welcomee">
                  WELCOME TO MUTANT FOOTBALL MANAGER
                </span>
                <span className="px-4 md-0 text-sm w-full lg:w-2/3 flex justify-center items-center leading-loose text-center lg:text-left welcomee">
                  MFM is a football manager MMORPG, DEX, and a native NFT
                  marketplace built on harmony blockchain. We are excited to
                  release Mutant Football Manager to the world. Come join our
                  growing community!
                </span>
                <div class="flex-wrap justify-center lg:flex lg:justify-begin text-xl mt-8">
                  <div class="w-full block flex justify-center  w-full lg:justify-start  mt-8  ">
                    <button
                      onClick={metaMask}
                      class="flex justify-center items-center text-white bg-gradient-to-r from-red-500 to-red-600  hover:border hover:border-red-600 hover:text-red-500 hover:from-white hover:to-white  px-4 md:px-3 py-3   transition duration-500 ease-in-out  transform hover:-translate-x-1 hover:scale-110 shadow-xl shadow-red-600/50 welcomee"
                      title="Play Games"
                    >
                      <span className="text-white px-2">
                        <GrGamepad />
                      </span>
                      Play Now
                      <span className="text-white px-2">
                        <GrGamepad />
                      </span>
                    </button>
                  </div>

                  <div class="w-full block flex justify-center  w-full lg:justify-start lg:hidden mt-8 lg:mt-0">
                    <Link to="/Goal">
                      <button
                        class=" bg-purple-500 text-white shadow-xl text-lg shadow-purple-900/50 px-12 md:px-6 py-2 md:py-1  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110 "
                        style={{ backgroundColor: ' #042b56' }}
                      >
                        Explore
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden lg:inline-block w-full lg:w-2/6">
              <div class="flex justify-center items-center  ">
                <div className="border border-red-100/[.09]  p-3 bg-black-200">
                  <img
                    src={goalie}
                    alt="Mutant NFT"
                    className="w-48  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110   "
                  />
                  <div className="mt-4 00 ">
                    <Link to="/Goal">
                      <button
                        class=" text-black bg-white w-full   hover:bg-gray-700 hover:border hover:border-gray-700 hover:text-white  px-4 md:px-3 py-1.5  
                                            transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110   "
                        title="Nft Character"
                      >
                        Explore the Game
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 text-white mb-6  md:px-32">
        <div className="text-4xl pl-4 md:text-5xl font-bold pt-12">
          Features of MFM
        </div>

        <Cards
          fesOne="firstOne"
          sesOne="secondOne"
          idrad="stadiums"
          Topic="Stadium NFTs" 
          text="Ready to dive into the world of football with your mutants? Own the rights, get a Stadium to enjoy the action in mutant football manager and start earning."
          Learn="Find out more "
          Linkg="/Stadium"
        />
        <Cards
          fesOne="firstOne"
          sesOne="secondOne"
          idrad="lockers"
          Topic="Locker room"
          text="Stake Lp tokens at the locker room to earn $COACH through emissions."
          Learn="Find out more "
          Linkg="/Locker"
        />
        <Cards
          fesOne="firstOne"
          sesOne="secondOne"
          idrad="bank"
          Topic="Bank of harmony"
          text="With our Defi primitive features, time Lock just got better with the bank of Harmony. Make deposits with banker to earn platform fees in $COACH."
          Learn="Find out more "
          Linkg="/Banks"
        />
        <Cards
          fesOne="firstOne"
          sesOne="secondOne"
          idrad="marketplaces"
          Topic="Marketplace"
          text="DEX - we have a vision to create a DEX which will give our users access to DEFI with a fusion of gameplay monetization on harmony."
          Learn="Find out more  "
          Linkg="/Marketplace"
        />
        <Cards
          fesOne="firstOne"
          sesOne="secondOne"
          idrad="nftt"
          Topic="NFts"
          text="Monster football manager MMORPG, DEX, and a native NFT marketplace built on harmony blockchain. We are excited to release harmony soccer ville to the world. Come join our growing community!."
          Linkg="/Nft"
          Learn="Find out more  "
        />

        <Cards
          fesOne="firstOne"
          sesOne="secondOne"
          idrad="coachs"
          Topic="$Coach Tokens"
          text="Unlock the all the action in Mutant football manager Ecosystem with the powers of the $COACH tokens. Get rewarded in $COACH tokens for participating in PVP mode and more."
          Learn="Find out more  "
          Linkg="/MFM"
        />

        <Cards
          fesOne="firstOne"
          sesOne="secondOne"
          idrad="villagess"
          Topic="Football Villages"
          text="We aim to build a Football village where our tournaments will be hosted on the stadiums located in the villages. These villages will be governed by xCoach token holders which will be given voting rights by holding the $COACH tokens."
          Learn="Find out more"
          Linkg="/Villages"
        />
      </section>
      <Footer />
    </Fragment>
  )
}
