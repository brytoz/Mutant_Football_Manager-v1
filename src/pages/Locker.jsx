import React, { Fragment, Component } from 'react'
import Banners from '../components/Banners'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default class Locker extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Banners
          imageid="lockers"
          title="Locker Room"
          info="The locker room is a place where to the pools to earn our $coach token. Players can stake tokens to receive rewards in $coach emissions.
"
        />
        <Footer />
      </Fragment>
    )
  }
}
