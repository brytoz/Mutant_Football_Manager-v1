import React, { Fragment, Component } from 'react'
import Banners from '../components/Banners'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default class Banks extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Banners
          imageid="bank"
          title="Bank of Harmony"
          info="The Bank of Harmony will serve as a bank to players where they could deposit their $coach tokens which will allow them take part in the fee sharing and governance votes."
        />
        <Footer />
      </Fragment>
    )
  }
}
