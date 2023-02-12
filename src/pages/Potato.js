import React from 'react';
import {Link } from 'react-router-dom';
import Header from '../components/Header';


const Potato = ()=> {

    return ( <div>
        <Header/>
          <Link to="/"><h1>Картофель</h1></Link>
    </div>
      
    )
}
export {Potato}