import React from 'react';
import {Link } from 'react-router-dom';
import Header from '../components/Header';


const Chicken = ()=> {

    return ( <div>
        <Header/>
          <Link to="/"><h1>Курица</h1></Link>
    </div>
      
    )
}
export {Chicken}