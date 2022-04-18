import * as React from "react";
import { Fragment, useState } from "react"; 
import Progress from "../components/Progress"; 
import { useEffect } from 'react'; 
import Landing from "../components/Landing";



const Home = () => {

     const [loading, setLoading] = useState(true);
    
    useEffect(()=> {
        setLoading(true);
        setTimeout(()=> {
            setLoading(false);
        }, 10000);
    }, []);

    
 
    return (
        <Fragment>
            {loading ? <Progress /> : <Landing /> }
      
        </Fragment>
    );
}

export default Home;
