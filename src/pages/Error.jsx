import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default class Error_ extends Component {
    render() {
        return (
            <Fragment>
                <div id="error" className="flex-wrap  h-screen flex justify-center items-center text-white">
                    <div className="  justify-center font-extrabold text-center text-6xl">
                        404 error
                        <div className='block text-xl'>
                            Don't Give up yet
                        </div>
                        
                        <div className='pt-24 block text-xl'>
                        <Link to="/">
                             GoBack
                             </Link>
                        </div>
                    

                    </div> 
                    
                </div>
                <Footer />
            </Fragment>
        )
    }
}
