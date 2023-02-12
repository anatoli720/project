import React from 'react';
import {Link } from 'react-router-dom';
import Header from '../components/Header';


const Juices = ()=> {

    return ( <div>
        <Header/>
          <Link to="/"><h1>Напитки</h1></Link>
    </div>
      
    )
}
export {Juices}