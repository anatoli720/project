import React from 'react';
import {Link } from 'react-router-dom';
import Header from '../components/Header';


const Promotions = ()=> {

    return ( <div>
        <Header/>
          <Link to="/"><h1>Акции</h1></Link>
    </div>
      
    )
}
export {Promotions}