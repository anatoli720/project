import React from 'react';
import {Link } from 'react-router-dom';
import Header from '../components/Header';


const Salads = ()=> {

    return ( <div>
        <Header/>
          <Link to="/"><h1>Салаты</h1></Link>
    </div>
      
    )
}
export {Salads}