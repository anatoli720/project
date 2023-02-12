import React from 'react';
import {Link } from 'react-router-dom';
import Header from '../components/Header';


const Desserts = ()=> {

    return ( <div>
        <Header/>
          <Link to="/"><h1>Десерты</h1></Link>
    </div>
      
    )
}
export {Desserts}