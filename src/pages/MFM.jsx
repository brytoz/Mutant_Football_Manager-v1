import React, { Fragment, Component } from 'react'
import Banners from '../components/Banners'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default class MFM extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Banners
          imageid="coachs"
          title="$Coach Tokens"
          info="When players deposit $coach tokens, they will receive coach tokens in proportion to their deposits. The coach token will be the governance token of Mutant Football Manager. The banker distributes fees gotten in game to depositors which includes 20% of collected fees from the DEX, 20% of proceeds from in game transactions. 
The swapping mechanism dictates the reward allocation. $coach token will be swapped into $coach tokens at the ratio of 2:1. During the period the player holders the coach tokens, rewards gotten from fees in-game are distributed coach. The rewards are distributed in proportion to their deposits compared to the total deposit. These rewards will vary regularly due to changes experienced with in-game transactions volume and the current state of total deposits. As time goes, the ratio between the 2 tokens will grow. Players could also withdraw at any point in time with zero withdrawal fees. The longer time a player holds the token, the more ratio increases. At withdrawal, players will receive more coach tokens than deposited with the difference standing as their rewards. The Soccer village council will consist of all $coach token holders, and this gives them an active role in decision making process of the project. Voting will be announced through our social media accounts and our discord server. Users can cast votes in proportion to amounts of coach tokens held."
        />
        <Footer />
      </Fragment>
    )
  }
}
