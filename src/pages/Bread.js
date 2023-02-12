import React from 'react';
import {Link } from 'react-router-dom';
import Header from '../components/Header';


const Bread = ()=> {

    return ( <div>
        <Header/>
          <Link to="/"><h1>Хлебцы</h1></Link>
    </div>
      
    )
}
export {Bread}