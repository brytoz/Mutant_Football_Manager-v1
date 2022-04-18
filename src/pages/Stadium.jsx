import React, { Fragment, Component } from 'react'
import Nav from '../components/Nav'
import Banners from '../components/Banners'
import Footer from '../components/Footer'

export default class Stadium extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Banners
          imageid="stadiums"
          title=" Stadium nfts"
          info="Mutant Football Manager tournaments will be played in stadiums owned by community members. The stadium NFTs will be decentralized, giving ownership to the community by breaking down the deeds of the stadium NFT which will enable owners to earn passively. Owners will be rewarded in $coach tokens for matches played by users.
	DEEDS: the deeds of the stadiums will be held by community members who will partake in the stadium deeds sale. The deeds give holders ownership rights to the stadium and its resources. Stadium deeds could be transferred between users.
	REWARDS: Owners of the stadium deeds will be rewarded in $coach tokens for each football match played on the stadium. Players that partake in PVP matches will need to stake a specific amount of $coach which the winner will take. 5% will be deducted from the stake for stadium fees which will be distributed to the stadium owners (70%) and the treasury (30%)."
        />
        <Footer />
      </Fragment>
    )
  }
}
