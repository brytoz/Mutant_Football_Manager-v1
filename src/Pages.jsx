import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Banks from './pages/Banks';
import Villages from './pages/Villages';
import MFM from './pages/MFM';
import Stadium from './pages/Stadium';
import Marketplace from './pages/Marketplace';
import Locker from './pages/Locker';
import Home from './pages/Home';
import Error from './pages/Error';
import Nft from "./pages/Nft"; 
import Dex from "./pages/Dex";
import NotificationModal from "./components/NotificationModal";
// import Web3 from 'web3';
// import Harmony from './connectContract';


const Pages = () => {
  return (
    <>
      <Routes>

        <Route path="/Banks" element={<Banks />} />
        <Route index element={<Home />} /> 
        <Route path="/Villages" element={<Villages />} />
        <Route path="/Marketplace" element={<Marketplace />} />
        <Route path="/Locker" element={<Locker />} />
        <Route path="/Stadium" element={<Stadium />} />
        <Route path="/MFM" element={<MFM />} /> 
        <Route path="/NFT" element={<Nft />} />  
        <Route path="/Dex" element={<Dex />} /> 
        <Route path="*" element={<Error />} />
        <Route path="/Goal" element={<NotificationModal />} />

      </Routes>
    </>
  );
}

export default Pages;

