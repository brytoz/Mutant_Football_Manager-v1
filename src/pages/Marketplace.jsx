import React, { Fragment, Component } from 'react'
import Banners from '../components/Banners'
import Nav from '../components/Nav'
import Text from '../components/Text'
import { FaChevronRight } from 'react-icons/fa'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default class Marketplace extends Component {
  render() {
    return (
      <Fragment>
        <Nav />

        <Banners title="Marketplace" imageid="marketplaces" />

        <section class="my-8 dexvisit">
          <div class="flex p-4 flex-shrink flex-wrap px-8 md:px-16 lg:px-28 py-20 md:py-24">
            <div class="w-full md:w-1/2 justify-center text-white items-center  leading-loose">
              <span className="text-2xl md:text4xl font-extrabold">
               
                Visit our Dex
              </span>

              <Link to="/Goal">
                <button class="bg-white mt-5  flex items-center  py-3 px-6 font-bold text-black transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                  Find out more 
                  <i className="pl-3">
                    <FaChevronRight />
                  </i>
                </button>
              </Link>
            </div>
          </div>
        </section>
        <Text
          one="About our transfer market"
          two=" Explore our transfer market to seek mutants that suits your team. Meet the Agent to trade your Mutants freely with other players."
        />
        <Text
          one="About our Pharmacy"
          two=" Player can purchase stamina portions and health packs at the pharmacy. Stamina portions provide instant stamina refill for mutants, while the health packs heal an injured mutant instantly."
        />
        <Text
          one="About our Harmony store"
          two=" Players can equip their mutants with accessories NFTs like soccer boots and jerseys. These items will be put on display at the harmony store. Items will be priced in ONE token and not $COACH token."
        />
        <Text
          one="About our DEX"
          two="DEX - we have a vision to create a DEX which will give our users access to DEFI with a fusion of gameplay monetization on harmony. our DEX will be powered by the governance token $COACH and will satisfy users need for decentralized finance. With our liquidity mining program, users will be incentivized as they contribute to the growth of pools. Users can swap tokens at ‘Ìyál'ọ́jà’ at the current exchange rates and add liquidity to pools. Liquidity providers will earn fees when their pool tokens are traded, they could also stake their Lp tokens at the locker room to earn rewards in $COACH."
        />
        <Footer />
      </Fragment>
    )
  }
}
