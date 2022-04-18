import React, { Fragment, Component } from 'react';
import Banners from '../components/Banners';
import Nav from '../components/Nav';
// import Fish from "../assets/mutantone.png";
import Cardimg from '../components/Cardimg';
import Footer from '../components/Footer';

export default class Nft extends Component {
    render() {
        return (
            <Fragment>
                <Nav />
                <Banners imageid="nftt" title="NFTs" info="Our player NFTs serves as a tool to access the core features of our game, as our gameplay is built around them. It enables you partake in the leagues, PVP and can also be suited up with player accessories to maximize their stats. We intend to rollout player packs to users for the first sets of player NFTs which will be a public mint. Subsequent Player NFTs will be available for purchase on our native marketplace, and users will need our $coach token to purchase a player after the minting phase is over." />
               <Cardimg />
               <Footer />
            </Fragment>
        );
    }
}
